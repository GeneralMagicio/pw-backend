import { ApiProperty } from '@nestjs/swagger';

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
  type: 'project' | 'collection';
}
