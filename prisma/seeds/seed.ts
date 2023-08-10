import { Prisma, PrismaClient } from '@prisma/client';
import * as XLSX from 'xlsx';

const readExcelFile = (
  filePath: string,
): Array<{ collection: string; name: string }> => {
  const workbook = XLSX.readFile(filePath);
  const sheetNameList = workbook.SheetNames;
  const sheet1 = workbook.Sheets[sheetNameList[0]];
  const data: any[][] = XLSX.utils.sheet_to_json(sheet1, { header: 1 });

  const result: Array<{ collection: string; name: string }> = [];
  for (let i = 1; i < data.length; i++) {
    result.push({ collection: data[i][0], name: data[i][1] });
  }
  return result;
};

const getSpace = (): Prisma.SpaceUncheckedCreateInput => ({
  title: 'Optimism (OP)',
  description:
    'OP is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency.',
});

const getPoll = (): Prisma.PollUncheckedCreateInput => ({
  title: 'RetroPGF 3',
  ends_at: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // in 15 days
  space_id: 1,
});

const getCollections = (): Prisma.CollectionUncheckedCreateInput[] => [
  { name: 'Infrastructure', poll_id: 1, parent_collection_id: null },
  { name: 'Education 1', poll_id: 1, parent_collection_id: null },
  { name: 'Education 2', poll_id: 1, parent_collection_id: null },
  {
    name: 'Tooling & Utilities 1',
    poll_id: 1,
    parent_collection_id: null,
  },
  {
    name: 'Tooling & Utilities 2',
    poll_id: 1,
    parent_collection_id: null,
  },
];

const getProjects = () => {
  const filePath = './rpgf2-min.xlsx';
  const array = readExcelFile(filePath);
  array.splice(0, 1);
  const projects: Prisma.ProjectUncheckedCreateInput[] = array.map((item) => ({
    name: item.name,
    collection_id: Number(item.collection.split(' - ')[0]),
    url: 'https://app.optimism.io/retropgf-discovery',
    description: `Hi! My name is ${item.name}`,
  }));

  return projects;
};

const seed = async () => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  await prisma.$connect();

  const space = getSpace();
  await prisma.space.create({
    data: space,
  });

  // add poll
  const poll = getPoll();
  await prisma.poll.create({
    data: poll,
  });

  // add collections
  const collections = getCollections();
  await prisma.collection.createMany({
    data: collections,
  });

  // add projects

  const projects = getProjects();
  await prisma.project.createMany({
    data: projects,
  });
};

seed();
