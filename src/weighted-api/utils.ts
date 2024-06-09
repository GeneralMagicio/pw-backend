import { PrismaClient } from '@prisma/client';
import { BadgeData } from 'src/utils/badges/readBadges';

export type StakeHolderType =
  | 'badgeholder'
  | 'delegate'
  | 'recipient'
  | 'holder';

export interface List {
  weightList: CategoryWeight[];
  type: StakeHolderType;
}

interface ProjectWeight {
  projectRPGFId: string;
  weight: number;
}

export interface CategoryWeight {
  categoryName: string;
  weight: number;
  projects: ProjectWeight[];
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
      projects: children.map(({ RPGF4Id }) => {
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
  // console.log('Adding', weight, 'to project', projectId);
  const clonedList = cloneObjects(list);

  for (const category of clonedList) {
    if (category.categoryName !== categoryName) continue;

    for (const project of category.projects) {
      if (project.projectRPGFId !== projectId) continue;

      project.weight = project.weight + weight;
    }
  }

  return clonedList;
};

// TODO: rewrite this part
export const getVoteWeight = (
  badges: BadgeData,
  stakeHolderType: StakeHolderType,
) => {
  switch (stakeHolderType) {
    case 'badgeholder':
      return badges.badgeholderPoints || 0;
    case 'recipient':
      return badges.recipientsPoints || 0;
    case 'delegate':
      return badges.delegatePoints || 0;
    case 'holder':
      return badges.holderPoints || 0;
    default:
      return 0;
  }
};

// TODO: Make this as sophisticated as you want
export const getRankingDistribution = (rank: number, total: number) => {
  const totalWeight = (1 + total) * (total / 2);

  return (total + 1 - rank) / totalWeight;
};

export const sortWeightedList = (list: List) => {
  list.weightList.sort((a, b) => b.weight - a.weight);
  for (const category of list.weightList) {
    category.projects.sort((a, b) => b.weight - a.weight);
  }
  return list;
};

export const printLists = (lists: List[]) => {
  for (const list of lists) {
    console.log(list.type, '-------------------------------------');
    for (const category of list.weightList) {
      console.log(
        '************* Category:',
        category.categoryName,
        '*************',
      );
      for (const project of category.projects) {
        console.log('************* Project:', project.weight, '*************');
      }
    }
  }
};
