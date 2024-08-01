import { ApiProperty } from '@nestjs/swagger';
import { InclusionState } from '@prisma/client';
import { IsDefined, IsIn, IsOptional } from 'class-validator';

export class FinishCollectionBody {
  @ApiProperty({ description: 'Collection id' })
  @IsDefined()
  cid: number;
}

export class InclusionProjectBody {
  @ApiProperty({ description: 'Project id' })
  id: number;

  @IsIn(['included', 'excluded'])
  state: InclusionState;
}
export class InclusionProjectsBulkBody {
  @ApiProperty({ description: 'Project id' })
  ids: number[];

  @IsIn(['included'])
  state: InclusionState;

  @ApiProperty({ description: 'collection id' })
  @IsDefined()
  collectionId: number;
}

export class DnDBody {
  @ApiProperty({ description: 'collection id' })
  @IsDefined()
  collectionId: number;

  @ApiProperty({ description: 'New order of the projects in descending order' })
  @IsDefined()
  projectIds: number[];
}

export class RemoveLastVoteDto {
  @ApiProperty({
    type: 'number',
    description:
      'Collection id (null for the top-level collection comparisons)',
  })
  @IsDefined()
  collectionId: number | null;
}
