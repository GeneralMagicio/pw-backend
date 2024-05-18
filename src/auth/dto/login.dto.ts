import { ApiProperty } from '@nestjs/swagger';
export class LoginDTO {
  @ApiProperty()
  message: string;

  @ApiProperty()
  signature: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  chainId: number;
}
