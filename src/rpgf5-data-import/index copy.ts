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
  const categories: Record<string, number> = {};

  const projects = await getAllProjects();

  console.log('projects length', projects.length);

  const jsonString = JSON.stringify(
    projects.filter((item) => item.applicationCategory === 'OP_STACK_TOOLING'),
    null,
    2,
  );

  fs.writeFile('ost.json', jsonString, (err) => {
    if (err) {
      console.error('Error writing file', err);
    } else {
      console.log('JSON file saved successfully');
    }
  });
};

void main();
