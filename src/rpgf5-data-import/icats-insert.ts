import { PrismaClient } from '@prisma/client';
import { projects } from './gsheet';

const implicitCatDist = async (prisma: PrismaClient) => {
  const projects = await prisma.project.findMany({
    select: { implicitCategory: true },
    where: {
      type: 'project',
    },
  });

  const distro = projects.reduce(
    (acc, project) => {
      if (!project.implicitCategory) acc['null'] = acc['null'] + 1;
      else if (project.implicitCategory in acc)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        acc[project.implicitCategory] = acc[project.implicitCategory] + 1;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      else acc[project.implicitCategory] = 1;

      return acc;
    },
    { null: 0 },
  );

  return distro;
};

export const main = async () => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    },
  });

  await prisma.$connect();

  console.log('Connected!');

  const nullPs = await prisma.project.findMany({
    select: { name: true },
    where: { type: 'project', implicitCategory: null },
  });

  console.log(nullPs);

  // for (let i = 0; i < projects.length; i++) {
  //   const project = projects[i];
  //   if (project.isSelected !== 'Approved') continue;
  //   console.log('Project', i);
  //   const exists = await prisma.project.findFirst({
  //     where: { name: project.name, implicitCategory: null },
  //   });

  //   if (exists) {
  //     await prisma.project.update({
  //       where: {
  //         id: exists.id,
  //       },
  //       data: {
  //         implicitCategory: project['PW subcategory'],
  //       },
  //     });
  //   }
  // }

  // console.log(await implicitCatDist(prisma));

  await prisma.$disconnect();
};

void main();
