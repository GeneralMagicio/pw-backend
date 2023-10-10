import { GetResult } from '@prisma/client/runtime/library';

export interface CollectionRanking {
  collectionTitle: string | undefined;
  ranking: {
    share: number;
    project: {
      id: number;
      name: string;
      url: string;
      description: string;
      parentId: number;
      image: string | null;
      created_at: Date;
    } | null;
  }[];
}

export interface CollectionRanking2 {
  type: 'collection' | 'composite project';
  id: number;
  collectionTitle: string;
  share: number;
  ranking: (CollectionRanking2 | ProjectRanking)[];
}

export interface ProjectRanking {
  type: 'project';
  id: number;
  share: number;
  name: string;
}

export interface EditingCollectionRanking extends CollectionRanking2 {
  locked: boolean;
  error: boolean;
  expanded: boolean;
  ranking: (EditingCollectionRanking | EditingProjectRanking)[];
}

export interface EditingProjectRanking extends ProjectRanking {
  locked: boolean;
  error: boolean;
}

// type A =
//   | (GetResult<
//       {
//         id: number;
//         name: string;
//         poll_id: number;
//         parent_collection_id: number | null;
//         image: string | null;
//         created_at: Date;
//       },
//       unknown
//     > & {})
//   | null;

// // Promise<{
//   collectionTitle: string | undefined;
//   ranking: {
//       share: number;
//       project: (GetResult<{
//           id: number;
//           name: string;
//           url: string;
//           description: string;
//           collection_id: number;
//           image: string | null;
//           created_at: Date;
//       }, unknown> & {}) | null;
//   }[];}>
