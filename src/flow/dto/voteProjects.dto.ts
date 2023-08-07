import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class VoteProjectsDTO {
  @IsInt()
  @ApiProperty()
  project1Id: number;

  @IsInt()
  @ApiProperty()
  project2Id: number;

  @IsInt()
  @ApiProperty()
  pickedId: number;
}
