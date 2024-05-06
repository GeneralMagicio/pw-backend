import { Prisma, PrismaClient, ProjectType } from '@prisma/client';
import * as XLSX from 'xlsx';
import { data } from './s4data';

// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: process.env.DATABASE_URL,
//     },
//   },
// });

interface Row {
  CATEGORY: string;
  DESCRIPTION: string;
  LOGO: string;
  pid: number;
}

const getSpace = (): Prisma.SpaceUncheckedCreateInput => ({
  title: 'Optimism (OP)',
  description:
    'OP is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency.',
});

const getPoll = (): Prisma.PollUncheckedCreateInput => ({
  title: 'RetroPGF 3',
  endsAt: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // in 60 days
  spaceId: 1,
});

const printCategories = () => {
  let categories: { category: string; count: number }[] = [];
  for (const application of data) {
    if (application.pwIsFlagged) continue;

    if (!application.pwCategory) {
      // throw new Error(`Not flagged but no category either for ${application.displayName}`);
      console.error(
        `Not flagged but no category either for ${application.displayName}`,
      );
      continue;
    }

    // if () continue;

    const index = categories.findIndex(
      (item) => item.category === application.pwCategory,
    );
    if (index === -1) {
      categories.push({ category: application.pwCategory, count: 1 });
    } else {
      categories[index] = {
        ...categories[index],
        count: categories[index].count + 1,
      };
    }
  }

  console.log('# of projects:', data.length);

  categories = categories.filter((cat) => cat.category.length < 60);

  console.log(
    '# of non-spam categorized projects:',
    categories.reduce((acc, curr) => (acc += curr.count), 0),
  );
  console.log('# of collections:', categories.length);
  console.log(categories);
};

function findErigonI() {
  // const workbook = XLSX.readFile('./fdp-min.xlsx');
  // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  // const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    // console.log(row);
    // if (i > 30) return;
    if (row.websiteUrl === 'https://raiden-dev.xyz/') {
      console.log(i);
    }
  }
}

async function insertProjects(prisma: PrismaClient) {
  // const workbook = XLSX.readFile('./fdp-min.xlsx');
  // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  // const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (Math.random() > 0.4) continue;
    const row = data[i];
    // console.log(row);
    // if (i > 30) return;
    if (row.pwIsFlagged) continue;

    if (!row.pwCategory || !row.applicationApprovalUID)
      throw new Error('All projects must have a category and UID');

    count++;
    console.log('Importing #', count);
    const collection = await prisma.project.findFirst({
      where: {
        name: row.pwCategory,
        type: 'collection',
      },
    });

    if (!collection) {
      throw new Error(`Collection with id ${row.pwCategory} not found`);
    }

    await prisma.project.create({
      data: {
        name: row.displayName,
        image: row.profileImageUrl,
        impactDescription: row.impactDescription,
        contributionDescription: row.contributionDescription,
        RPGF4Id: row.applicationApprovalUID,
        metadataUrl: row.applicationMetadataPtr,
        url: row.websiteUrl,
        parentId: collection.id,
        pollId: 1,
        type: ProjectType.project,
      },
    });
  }
}

// async function insertTopCollections(prisma: PrismaClient) {
//   const workbook = XLSX.readFile('./pwcat.xlsx');
//   const worksheet = workbook.Sheets[workbook.SheetNames[1]];
//   const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

//   for (let i = 0; i < jsonData.length; i++) {
//     const row = jsonData[i];

//     await prisma.project.create({
//       data: {
//         name: row.CATEGORY,
//         image: row.LOGO || '',
//         impactDescription: row.DESCRIPTION,
//         url: 'url',
//         parentId: null,
//         pollId: 1,
//         type: ProjectType.collection,
//       },
//     });
//   }
// }

async function insertMoonCollections(prisma: PrismaClient) {
  const workbook = XLSX.readFile('./pwcat.xlsx');
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

  for (let i = 0; i < jsonData.length; i++) {
    const row = jsonData[i];

    await prisma.project.create({
      data: {
        name: row.CATEGORY,
        image: row.LOGO || '',
        url: 'url',
        impactDescription: row.DESCRIPTION,
        parentId: null,
        pollId: 1,
        type: ProjectType.collection,
      },
    });
  }
}

const main = async () => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    },
  });

  await prisma.$connect();

  // const space = getSpace();
  // await prisma.space.create({
  //   data: space,
  // });

  // // add poll
  // const poll = getPoll();
  // await prisma.poll.create({
  //   data: poll,
  // });

  // await insertTopCollections(prisma);

  await insertMoonCollections(prisma);

  await insertProjects(prisma);

  // findErigonI();
  // printCategories();

  await prisma.$disconnect();
};

void main();
