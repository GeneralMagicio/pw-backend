import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

export class ShareDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @Max(1)
  @Min(0)
  @IsNumber()
  @ApiProperty()
  share: number;
}
