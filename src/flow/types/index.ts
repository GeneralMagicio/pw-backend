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

export type FarcasterUserByFid = {
  result: {
    user: {
      fid: number;
      username: string;
      displayName: string;
      pfp: {
        url: string;
        verified: boolean;
      };
      profile: {
        bio: {
          text: string;
          mentions: any[];
          channelMentions: any[];
        };
        location: {
          placeId: string;
          description: string;
        };
      };
      followerCount: number;
      followingCount: number;
      activeOnFcNetwork: boolean;
      connectedAccounts: any[];
      viewerContext: {
        following: boolean;
        followedBy: boolean;
        canSendDirectCasts: boolean;
        enableNotifications: boolean;
        hasUploadedInboxKeys: boolean;
      };
    };
    collectionsOwned: any[];
    extras: {
      fid: number;
      custodyAddress: string;
    };
  };
};

export type FarcasterMetadata = FarcasterUserByFid['result']['user'];
