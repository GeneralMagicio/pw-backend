import axios from 'axios';
import { AgoraApiResponse, Project } from './types';
import { Prisma, PrismaClient } from '@prisma/client';
import * as fs from 'fs';

async function getAllProjects(): Promise<Project[]> {
  const baseUrl =
    'https://vote.optimism.io/api/v1/retrofunding/rounds/5/projects';
  const limit = 100; // Maximum allowed limit
  let offset = 0;
  let allProjects: Project[] = [];
  let hasNext = true;

  while (hasNext) {
    try {
      const response = await axios.get<AgoraApiResponse>(baseUrl, {
        params: {
          offset,
          limit,
        },
        headers: {
          Authorization: 'Bearer 80963194-c250-4a37-921a-302bf50dee34',
        },
        timeout: 30 * 1000,
      });

      allProjects = allProjects.concat(response.data.data);
      hasNext = response.data.meta.has_next;
      offset = response.data.meta.next_offset;
    } catch (error) {
      console.error('Error fetching projects:', error);
      break;
    }
  }

  return allProjects;
}

const getSpace = (): Prisma.SpaceUncheckedCreateInput => ({
  title: 'Optimism (OP)',
  description:
    'OP is a Layer 2 Optimistic Rollup network designed to utilize the strong security guarantees of Ethereum while reducing its cost and latency.',
});

const getPoll = (): Prisma.PollUncheckedCreateInput => ({
  title: 'RetroPGF 5',
  endsAt: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // in 60 days
  spaceId: 1,
});

export const main = async () => {
  const categories: Record<string, number> = {};

  const nonSpamProjects = await getAllProjects();

  console.log('projects length', nonSpamProjects.length);

  for (let i = 0; i < nonSpamProjects.length; i++) {
    const project = nonSpamProjects[i];

    if (!(project['applicationCategory'] in categories)) {
      categories[project['applicationCategory']] = 1;
    } else {
      categories[project['applicationCategory']] =
        categories[project['applicationCategory']] + 1;
    }
  }

  console.log(categories);

  // fs.writeFile(
  //   'all-projects-930.json',
  //   JSON.stringify(nonSpamProjects),
  //   (err) => {
  //     if (err) {
  //       console.error('Error writing file', err);
  //     } else {
  //       console.log('JSON file saved successfully');
  //     }
  //   },
  // );

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    },
  });

  await prisma.$connect();

  console.log('Connected!');

  const space = getSpace();
  await prisma.space.create({
    data: space,
  });

  // add poll
  const poll = getPoll();
  await prisma.poll.create({
    data: poll,
  });

  // // add categories

  await prisma.project.createMany({
    data: Object.keys(categories).map((category) => ({
      type: 'collection',
      pollId: 1,
      name: category,
      description: `Description for ${category}`,
      metadata: '',
    })),
  });

  for (let i = 0; i < Object.keys(categories).length; i++) {
    console.log('Now doing category #', i);
    const catName = Object.keys(categories)[i];
    const category = await prisma.project.findFirst({
      select: { id: true },
      where: {
        name: catName,
        type: 'collection',
      },
    });

    if (!category)
      throw new Error(
        `No category available for this category name ${catName}`,
      );

    const categoryProjects = nonSpamProjects.filter(
      (el) => el['applicationCategory'] === catName,
    );

    await prisma.project.createMany({
      data: categoryProjects.map((project) => ({
        type: 'project',
        parentId: category.id,
        pollId: 1,
        image: project.profileAvatarUrl,
        name: `${project.name}`.trim(),
        description: project.description,
        // contributionDescription: project.contributionDescription,
        // shortDescription: project['Short description'],
        RF6Id: project.id,
        metadata: JSON.stringify(project),
      })),
    });
  }

  // await addRpgf4IdToCollections(prisma);

  // // for (const metric of metricsArray) {
  // //   await addMetricsId(prisma, metric.project_id);
  // // }

  // await addImages(prisma);

  // // await insertTopCollections(prisma);

  // // await insertMoonCollections(prisma);

  // // await insertProjects(prisma);

  // // findErigonI();
  // // printCategories();

  await prisma.$disconnect();
};

void main();
