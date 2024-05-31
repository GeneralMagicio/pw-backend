import { PrismaClient } from '@prisma/client';

type StakeHolderType = 'badgeholder' | 'delegate' | 'recipient' | 'holder';

interface ProjectWeight {
  projectRPGFId: string;
  weight: number;
}

interface CategoryWeight {
  categoryName: string;
  weight: number;
  children: ProjectWeight[];
}

export type AttestationMetadata = {
  listDescription: string;
  impactEvaluationLink: string;
  impactCategory: string[];
  impactEvaluationDescription: string;
  listContent: Array<{
    RPGF3_Application_UID: string;
  }>;
};

export const initializeWeightList = async () => {
  const weightList: CategoryWeight[] = [];

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_PRISMA_URL,
      },
    },
  });

  await prisma.$connect();

  const categories = await prisma.project.findMany({
    select: { name: true, id: true },
    where: {
      type: 'collection',
      parentId: null,
    },
  });

  for (const category of categories) {
    const children = await prisma.project.findMany({
      select: { RPGF4Id: true },
      where: {
        type: 'project',
        parentId: category.id,
      },
    });

    weightList.push({
      categoryName: category.name,
      children: children.map(({ RPGF4Id }) => {
        if (!RPGF4Id) throw new Error('All projects must have a RPGF4 id');
        return {
          projectRPGFId: RPGF4Id,
          weight: 0,
        };
      }),
      weight: 0,
    });
  }

  await prisma.$disconnect();

  return weightList;
};

export const cloneObjects = <T>(object: T): T =>
  JSON.parse(JSON.stringify(object));

export const addWeightToList = (
  categoryName: string,
  projectId: string,
  weight: number,
  list: CategoryWeight[],
) => {
  console.log('Adding', weight, 'to project', projectId);
  const clonedList = cloneObjects(list);

  for (const category of clonedList) {
    if (category.categoryName !== categoryName) continue;

    for (const project of category.children) {
      if (project.projectRPGFId !== projectId) continue;

      project.weight = project.weight + weight;
    }
  }

  return clonedList;
};

// TODO: rewrite this part
export const getVoteWeight = (
  userId: number,
  stakeHolderType: StakeHolderType,
) => {
  return 1;
};

// TODO: Make this as sophisticated as you want
export const getRankingDistribution = (rank: number, total: number) => {
  const totalWeight = (1 + total) * (total / 2);

  return (total + 1 - rank) / totalWeight;
};
