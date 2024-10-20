import { ApiProperty } from '@nestjs/swagger';

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
