import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { AgoraApiResponse, Project } from './types';
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

  const projects = await getAllProjects();

  // const nullPs = await prisma.project.findMany({
  //   select: { name: true },
  //   where: { type: 'project', implicitCategory: null },
  // });

  // console.log(nullPs);

  // fs.writeFile('all-projects.json', JSON.stringify(projects), (err) => {
  //   if (err) {
  //     console.error('Error writing file', err);
  //   } else {
  //     console.log('JSON file saved successfully');
  //   }
  // });

  for (let i = 0; i < projects.length; i++) {
    console.log('Project', i);
    const project = projects[i];
    const exists = await prisma.project.findFirst({
      where: { OR: [{ name: project.name.trim(), RF6Id: project.id }] },
    });

    if (!exists) {
      console.log(
        `Project ${project.name} with id: ${project.id} doens't exist`,
      );
    }

    if (exists) {
      await prisma.project.update({
        where: {
          id: exists.id,
        },
        data: {
          name: exists.name,
        },
      });
    }
  }

  // console.log(await implicitCatDist(prisma));

  await prisma.$disconnect();
};

void main();
