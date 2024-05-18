import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, Length } from 'class-validator';

export class OtpDTO {
  @ApiProperty()
  @IsNumberString()
  @Length(6, 6)
  otp: string;
}
