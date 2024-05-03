import { ApiProperty } from '@nestjs/swagger';
import { InclusionState } from '@prisma/client';
import { IsIn } from 'class-validator';

export class FinishCollectionBody {
  @ApiProperty({ description: 'Collection id' })
  cid: number;
}

export class InclusionProjectBody {
  @ApiProperty({ description: 'Project id' })
  id: number;

  @ApiProperty({ description: 'Inclusion state' })
  @IsIn(['included', 'excluded'])
  state: InclusionState;
}
