import { IsDefined, IsEthereumAddress } from 'class-validator';

export class StoreBadgesDTO {
  @IsEthereumAddress()
  @IsDefined()
  mainAddress: string;
}
