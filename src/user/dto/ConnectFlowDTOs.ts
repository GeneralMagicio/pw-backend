import { IsDefined, IsEthereumAddress } from 'class-validator';

export class StoreBadgesDTO {
  @IsEthereumAddress()
  @IsDefined()
  mainAddress: string;

  @IsDefined()
  signature: string;
}

export class StoreIdentityDTO {
  @IsDefined()
  identity: string;
}
export class GetBadgesDTO {
  @IsEthereumAddress()
  @IsDefined()
  address: string;
}
