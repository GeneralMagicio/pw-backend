import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class VoteCollectionsDTO {
  @IsInt()
  @ApiProperty()
  collection1Id: number;

  @IsInt()
  @ApiProperty()
  collection2Id: number;

  @IsInt()
  @ApiProperty()
  pickedId: number;
}
