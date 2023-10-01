import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsJSON, IsOptional, Validate } from 'class-validator';
import { IsNumberOrNull } from './voteProjects.dto';

export class EditedRankingDto {
  @Validate(IsNumberOrNull)
  @ApiProperty()
  collectionId: number | null;

  @IsJSON()
  @ApiProperty()
  ranking: string;
}
