import { ApiProperty, OmitType } from '@nestjs/swagger';

export class PairsResult {
  @ApiProperty({
    type: 'array',
    items: {
      type: 'object',
    },
  })
  pairs: unknown[];

  @ApiProperty()
  totalPairs: number;

  @ApiProperty()
  votedPairs: number;

  @ApiProperty()
  collectionTitle: string;

  @ApiProperty()
  type: 'project' | 'collection';
}

export class ExpertisePairs extends OmitType(PairsResult, ['type'] as const) {}
