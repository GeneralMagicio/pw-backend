import { projects } from './all-projects';
import { projects as gProjects } from './gsheet';

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

export const main = async () => {
  console.log(
    projects.filter(
      (item) =>
        !gProjects.find(
          (el) =>
            el['isSelected'] === 'Approved' &&
            el.name.trim() === item.name.trim(),
        ),
    ),
  );
};

void main();
