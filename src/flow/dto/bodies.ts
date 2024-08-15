import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsIn } from 'class-validator';

export class FinishCollectionBody {
  @ApiProperty({ description: 'Collection id' })
  @IsDefined()
  cid: number;
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
