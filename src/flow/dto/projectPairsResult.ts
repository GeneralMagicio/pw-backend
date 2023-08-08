import { ApiProperty } from '@nestjs/swagger';

export class ProjectPairsResult {
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
  totalVotes: number;
}
