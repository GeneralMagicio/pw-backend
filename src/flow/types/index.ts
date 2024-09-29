import { GetResult } from '@prisma/client/runtime/library';

export interface CollectionRanking {
  type: 'collection' | 'composite project';
  hasRanking: true;
  // isFinished: boolean;
  id: number;
  RPGF4Id: string;
  name: string;
  rank: number;
  ranking: (CollectionRanking | ProjectRanking)[];
}

export interface ProjectRanking {
  type: 'project' | 'collection' | 'composite project';
  hasRanking: false;
  id: number;
  RPGF4Id: string;
  rank: number;
  name: string;
}

export interface EditingCollectionRanking extends CollectionRanking {
  locked: boolean;
  error: boolean;
  expanded: boolean;
  ranking: (EditingCollectionRanking | EditingProjectRanking)[];
}

export interface EditingProjectRanking extends ProjectRanking {
  locked: boolean;
  error: boolean;
}

export type CollectionProgressStatus =
  // | 'Attested'
  | 'Finished'
  | 'WIP - Threshold'
  | 'WIP'
  // | 'Filtered'
  // | 'Filtering'
  | 'Pending';
