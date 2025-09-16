import { IsDefined, IsEthereumAddress, IsOptional } from 'class-validator';

export class StoreBadgesAndIdentityDTO {
  @IsEthereumAddress()
  @IsDefined()
  mainAddress: string;

  @IsDefined()
  signature: string;

  @IsOptional()
  identity: string;
}

export class StoreBadgesDTO {
  @IsEthereumAddress()
  @IsDefined()
  mainAddress: string;

  @IsDefined()
  signature: string;
}

export class StoreIdentityDTO {
  @IsOptional()
  identity: string;
}
export class GetBadgesDTO {
  @IsEthereumAddress()
  @IsDefined()
  address: string;
}
