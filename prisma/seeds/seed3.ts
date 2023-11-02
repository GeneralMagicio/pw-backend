import { Prisma, PrismaClient, ProjectType } from '@prisma/client';
import * as XLSX from 'xlsx';
import { data } from './s4data';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

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
  ends_at: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // in 15 days
  space_id: 1,
});

const printCategories = () => {
  let categories: { category: string; count: number }[] = [];
  for (const application of data) {
    if (application.pwIsFlagged || application.applicantType === 'INDIVIDUAL')
      continue;

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

async function insertProjects() {
  // const workbook = XLSX.readFile('./fdp-min.xlsx');
  // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  // const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    // console.log(row);
    // if (i > 30) return;
    if (
      !row.pwCategory ||
      row.pwIsFlagged ||
      row.applicantType === 'INDIVIDUAL' ||
      row.displayName === 'RadicalxChange Foundation'
    )
      continue;

    const collection = await prisma.project.findFirst({
      where: {
        name: row.pwCategory,
        type: 'collection',
      },
    });

    if (!collection) {
      // continue;
      throw new Error(`Collection with id ${row.pwCategory} not found`);
    }

    await prisma.project.create({
      data: {
        name: row.displayName,
        image: row.profileImageUrl,
        impactDescription: row.impactDescription,
        contributionDescription: row.contributionDescription,
        RPGF3Id: row.RPGF3_Application_UID,
        url: row.websiteUrl,
        parentId: collection.id,
        poll_id: 1,
        type: ProjectType.project,
      },
    });
  }
}

// async function insertUUID() {
//   // const workbook = XLSX.readFile('./fdp-min.xlsx');
//   // const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//   // const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

//   for (let i = 0; i < data.length; i++) {
//     const row = data[i];
//     // console.log(row);
//     // if (i > 30) return;
//     if (
//       !row.pwCategory ||
//       row.pwIsFlagged ||
//       row.applicantType === 'INDIVIDUAL' ||
//       row.displayName === 'RadicalxChange Foundation'
//     )
//       continue;

//     const collection = await prisma.project.findFirst({
//       where: {
//         name: row.pwCategory,
//         type: 'collection',
//       },
//     });

//     if (!collection) {
//       // continue;
//       throw new Error(`Collection with id ${row.pwCategory} not found`);
//     }

//     await prisma.project.updateMany({
//       where: {
//         name: row.displayName,
//         url: row.websiteUrl,
//         type: ProjectType.project,
//       },
//       data: {
//         RPGF3Id: row.RPGF3_Application_UID,
//       },
//     });
//   }
// }

async function insertTopCollections() {
  const workbook = XLSX.readFile('./pwcat.xlsx');
  const worksheet = workbook.Sheets[workbook.SheetNames[1]];
  const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

  for (let i = 0; i < jsonData.length; i++) {
    const row = jsonData[i];
    // console.log(row);
    // if (i > 30) return;
    // const collection = await prisma.project.findFirst({
    //   where: {
    //     name: row.Category.split('')
    //       .filter((c) => c !== ':')
    //       .join(''),
    //   },
    // });

    // if (!collection) {
    //   throw new Error(`Collection with id ${row.Category} not found`);
    // }

    await prisma.project.create({
      data: {
        name: row.CATEGORY,
        image: row.LOGO || '',
        impactDescription: row.DESCRIPTION,
        url: 'Some url',
        parentId: null,
        poll_id: 1,
        type: ProjectType.collection,
      },
    });
  }
}

async function insertMoonCollections() {
  const workbook = XLSX.readFile('./pwcat.xlsx');
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData: Row[] = XLSX.utils.sheet_to_json(worksheet, { raw: false });

  for (let i = 0; i < jsonData.length; i++) {
    const row = jsonData[i];
    // const collection = await prisma.project.findFirst({
    //   where: {
    //     name: row.CATEGORY,
    //     type: 'collection',
    //   },
    // });

    // if (!collection) {
    //   throw new Error(`Collection with id ${row.CATEGORY} not found`);
    // }

    await prisma.project.create({
      data: {
        name: row.CATEGORY,
        image: row.LOGO || '',
        impactDescription: row.DESCRIPTION,
        url: 'Some url',
        parentId: Number(row.pid),
        poll_id: 1,
        type: ProjectType.collection,
      },
    });
  }
}

const main = async () => {
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

  await insertTopCollections();

  await insertMoonCollections();

  await insertProjects();

  // printCategories();

  await prisma.$disconnect();
};

void main();
