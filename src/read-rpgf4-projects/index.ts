import { Prisma, PrismaClient } from '@prisma/client';
import { projects } from './projects-628';
import axios from 'axios';

const getSpace = (): Prisma.SpaceUncheckedCreateInput => ({
  title: 'Optimism (OP)',
  description:
    'OP is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency.',
});

const getPoll = (): Prisma.PollUncheckedCreateInput => ({
  title: 'RetroPGF 4',
  endsAt: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // in 60 days
  spaceId: 1,
});

const addMetricsId = async (prisma: PrismaClient, projectId: string) => {
  const query = `
  query MyQuery($where: code_metrics_by_project_v1_bool_exp) {
    code_metrics_by_project_v1(
      where: $where
    ) {
      display_name
      project_name
    }
  }
  `;

  // const whereVar = {
  //   project_id: { _eq: 'tcJvWiZJInhq79YFWAhvTjB-bNjhTM4evTflhFk1tNc=' },
  // };

  const gqlUrl = `https://opensource-observer.hasura.app/v1/graphql`;
  const { data: res } = await axios.post(gqlUrl, {
    query: query,
    operationName: 'MyQuery',
    variables: {
      where: {
        project_id: { _eq: projectId },
      },
    },
  });

  if (
    !res ||
    !res.data ||
    !res.data.code_metrics_by_project_v1 ||
    !res.data.code_metrics_by_project_v1[0]
  )
    return;

  const { display_name: displayName, project_name: projectName } =
    res.data.code_metrics_by_project_v1[0];

  if (displayName || projectName) {
    console.log(displayName, projectName);
    const exists = await prisma.project.findFirst({
      select: { id: true },
      where: {
        name: { in: [displayName, projectName] },
      },
    });

    if (exists) {
      console.log('added metric id');
      await prisma.project.update({
        where: {
          id: exists.id,
        },
        data: {
          metricsProjectId: projectId,
        },
      });
    } else console.log("Doesn't exist");
  }
};

const addImages = async (prisma: PrismaClient) => {
  const { data: allProjects } = await axios.get<
    {
      id: string;
      bannerImageUrl: string;
      profileImageUrl: string;
      displayName: string;
    }[]
  >('https://round4-api-eas.retrolist.app/projects');

  // console.log(allProjects);

  const promises: Promise<void>[] = [];
  for (const project of allProjects) {
    const func = async () => {
      const exists = await prisma.project.findFirst({
        select: { id: true },
        where: { name: `${project.displayName}`, type: 'project' },
      });
      if (exists) {
        await prisma.project.update({
          where: { id: exists.id },
          data: { image: project.profileImageUrl, RPGF4Id: project.id },
        });
      }
    };
    promises.push(func());
  }

  await Promise.all(promises);
};

const addRpgf4IdToCollections = async (prisma: PrismaClient) => {
  try {
    const projectsToUpdate = await prisma.project.findMany({
      where: {
        type: 'collection',
      },
    });

    const updatePromises = projectsToUpdate.map((project) => {
      const encodedName = Buffer.from(project.name).toString('base64');
      return prisma.project.update({
        where: {
          id: project.id,
        },
        data: {
          RPGF4Id: `pw-${encodedName}`,
        },
      });
    });

    await Promise.all(updatePromises);
    console.log('All projects updated successfully.');
  } catch (error) {
    console.error('Error updating projects:', error);
  }
};

export const main = async () => {
  // const categories: Record<string, number> = {};

  // const nonSpamProjects = [];

  // for (let i = 0; i < projects.length; i++) {
  //   const project = projects[i];
  //   // if (project.CHECK !== '!PASS') continue;
  //   // if (removed.findIndex((el) => el.Name === project.displayName) !== -1) {
  //   //   console.log(project.displayName, 'Is spam');
  //   //   continue;
  //   // }

  //   if (!(project['Pairwise category'] in categories)) {
  //     categories[project['Pairwise category']] = 1;
  //   } else {
  //     categories[project['Pairwise category']] =
  //       categories[project['Pairwise category']] + 1;
  //   }

  //   nonSpamProjects.push(project);
  // }

  // console.log(categories);

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

  // // add categories

  // await prisma.project.createMany({
  //   data: Object.keys(categories).map((category) => ({
  //     type: 'collection',
  //     pollId: 1,
  //     name: category,
  //     impactDescription: `Description for ${category}`,
  //   })),
  // });

  // for (let i = 0; i < Object.keys(categories).length; i++) {
  //   console.log('Now doing category #', i);
  //   const catName = Object.keys(categories)[i];
  //   const category = await prisma.project.findFirst({
  //     select: { id: true },
  //     where: {
  //       name: catName,
  //       type: 'collection',
  //     },
  //   });

  //   if (!category)
  //     throw new Error(
  //       `No category available for this category name ${catName}`,
  //     );

  //   const categoryProjects = nonSpamProjects.filter(
  //     (el) => el['Pairwise category'] === catName,
  //   );

  //   await prisma.project.createMany({
  //     data: categoryProjects.map((project) => ({
  //       type: 'project',
  //       parentId: category.id,
  //       pollId: 1,
  //       name: `${project.displayName}`,
  //       impactDescription: project.impactDescription,
  //       contributionDescription: project.contributionDescription,
  //       shortDescription: project['Short description'],
  //       RPGF4Id: project.id,
  //       metadataUrl: project.websiteUrl,
  //     })),
  //   });
  // }

  // for (const metric of metricsArray) {
  //   await addMetricsId(prisma, metric.project_id);
  // }

  await addImages(prisma);

  // await addRpgf4IdToCollections(prisma);

  // await insertTopCollections(prisma);

  // await insertMoonCollections(prisma);

  // await insertProjects(prisma);

  // findErigonI();
  // printCategories();

  await prisma.$disconnect();
};

void main();
