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
      collection_id: number;
      image: string | null;
      created_at: Date;
    } | null;
  }[];
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
