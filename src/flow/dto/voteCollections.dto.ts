import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Validate } from 'class-validator';
import { IsNumberOrNull } from './voteProjects.dto';

export class VoteCollectionsDTO {
  @IsInt()
  @ApiProperty()
  collection1Id: number;

  @IsInt()
  @ApiProperty()
  collection2Id: number;

  @Validate(IsNumberOrNull)
  @ApiProperty()
  pickedId: number | null;
}
