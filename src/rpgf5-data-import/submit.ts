import { projects } from './osrad';
import * as fs from 'fs';
// async function getAllProjects(): Promise<Project[]> {
//   const baseUrl =
//     'https://vote.optimism.io/api/v1/retrofunding/rounds/5/projects';
//   const limit = 100; // Maximum allowed limit
//   let offset = 0;
//   let allProjects: Project[] = [];
//   let hasNext = true;

//   while (hasNext) {
//     try {
//       const response = await axios.get<AgoraApiResponse>(baseUrl, {
//         params: {
//           offset,
//           limit,
//         },
//         headers: {
//           Authorization: 'Bearer 80963194-c250-4a37-921a-302bf50dee34',
//         },
//         timeout: 30 * 1000,
//       });

//       allProjects = allProjects.concat(response.data.data);
//       hasNext = response.data.meta.has_next;
//       offset = response.data.meta.next_offset;
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//       break;
//     }
//   }

//   return allProjects;
// }

type AgoraBallotPost = {
  projects: {
    project_id: string;
    allocation: string;
    impact: number;
  }[];
};

const createFakeDistribution = (total: number) => {
  const distribution = [];

  for (let i = 0; i < total; i++) {
    distribution.push(Math.random());
  }

  const initialSum = distribution.reduce((a, b) => a + b, 0);

  const coefficient = 100 / initialSum;

  return distribution.map((el) => Math.round(el * coefficient * 1000) / 1000);
};

export const main = async () => {
  const dist = createFakeDistribution(projects.length);
  const ballot = projects.map((item, index) => ({
    project_id: item.id,
    allocation: `${dist[index]}`,
    impact: Math.round(Math.random() * 4) + 1,
  }));

  const jsonString = JSON.stringify(ballot, null, 2);

  fs.writeFile('ballot.json', jsonString, (err) => {
    if (err) {
      console.error('Error writing file', err);
    } else {
      console.log('JSON file saved successfully');
    }
  });
};

void main();
