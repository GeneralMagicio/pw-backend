import { ApiProperty } from '@nestjs/swagger';
import { FarcasterUserByFid } from '../types';

export class CollectionResponse {
  @ApiProperty({
    example:
      'Infrastructure and tooling that powered governance or that made the usage of governance infrastructure more accessible.',
    description: 'Description of the category',
  })
  description: string;

  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the category',
  })
  id: number;

  @ApiProperty({
    example: null,
    description: 'Image associated with the category',
    nullable: true,
  })
  image: string | null;

  @ApiProperty({
    example: 'Governance Infrastructure & Tooling 2',
    description: 'Name of the category',
  })
  name: string;

  @ApiProperty({
    example: 'Pending',
    description: 'Progress status of the category',
  })
  progress: string;

  @ApiProperty({
    example: 29,
    description: 'Number of projects in the category',
  })
  projectCount: number;
}

export class ProjectResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  pollId: number;

  @ApiProperty({ example: null, nullable: true })
  url: string | null;

  @ApiProperty()
  description: string;

  @ApiProperty({ nullable: true, example: null })
  shortDescription: string;

  @ApiProperty()
  RF6Id: string;

  @ApiProperty()
  parentId: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  metadata: string;

  @ApiProperty()
  aiSummary: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  type: string;
}

export const exampleFarcasterUserByFid: FarcasterUserByFid = {
  result: {
    user: {
      fid: 12345,
      username: 'johndoe',
      displayName: 'John Doe',
      pfp: {
        url: 'https://example.com/profile-picture.jpg',
        verified: true,
      },
      profile: {
        bio: {
          text: "Hello, I'm John! #tech #coding",
          mentions: [],
          channelMentions: [],
        },
        location: {
          placeId: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
          description: 'San Francisco, CA',
        },
      },
      followerCount: 1000,
      followingCount: 500,
      activeOnFcNetwork: true,
      connectedAccounts: [],
      viewerContext: {
        following: true,
        followedBy: false,
        canSendDirectCasts: true,
        enableNotifications: true,
        hasUploadedInboxKeys: false,
      },
    },
    collectionsOwned: [],
    extras: {
      fid: 12345,
      custodyAddress: '0x1234567890123456789012345678901234567890',
    },
  },
};

export const delegateStatusExample = {
  fromYou: {
    budget: {
      metadata: {
        username: 'griff.eth',
        profileUrl: 'https://example.com/some.png',
      },
    },
    collections: [
      {
        collectionId: 1,
        metadata: {
          username: 'elon.eth',
          profileUrl: 'https://example.com/elon.png',
        },
      },
      {
        collectionId: 2,
        metadata: {
          username: 'griff.eth',
          profileUrl: 'https://example.com/some.png',
        },
      },
    ],
  },
  toYou: {
    budget: [
      {
        metadata: {
          username: 'some.eth',
          profileUrl: 'https://example.com/some.png',
        },
      },
      {
        metadata: {
          username: 'some2.eth',
          profileUrl: 'https://example.com/some.png',
        },
      },
      {
        metadata: {
          username: 'some3.eth',
          profileUrl: 'https://example.com/some.png',
        },
      },
    ],
    collections: [
      {
        collectionId: 1,
        metadata: {
          username: 'elon.eth',
          profileUrl: 'https://example.com/elon.png',
        },
      },
      {
        collectionId: 1,
        metadata: {
          username: 'adele.eth',
          profileUrl: 'https://example.com/some.png',
        },
      },
    ],
  },
};

export const delegateStatusExample2 = {
  fromYou: {
    budget: null,
    collections: [
      {
        collectionId: 1,
        metadata: {
          username: 'mo.eth',
          profileUrl: 'https://example.com/elon.png',
        },
      },
    ],
  },
  toYou: {
    budget: [],
    collections: [],
  },
};
