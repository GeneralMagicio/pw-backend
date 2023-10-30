import { GetResult } from '@prisma/client/runtime/library';

export interface CollectionRanking {
  type: 'collection' | 'composite project';
  hasRanking: true;
  isFinished: boolean;
  id: number;
  RPGF3Id: string;
  name: string;
  share: number;
  ranking: (CollectionRanking | ProjectRanking)[];
}

export interface ProjectRanking {
  type: 'project' | 'collection' | 'composite project';
  hasRanking: false;
  id: number;
  RPGF3Id: string;
  share: number;
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
