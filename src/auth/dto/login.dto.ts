import { ApiProperty } from '@nestjs/swagger';
import { SiweMessage } from 'siwe';

export class SiweMessageClass {
  @ApiProperty({
    description: 'RFC 4501 dns authority that is requesting the signing.',
  })
  domain: string;

  @ApiProperty({
    description: `Ethereum address performing the signing conformant to capitalization
   encoded checksum specified in EIP-55 where applicable.`,
  })
  address: string;

  @ApiProperty({
    description: `Human-readable ASCII assertion that the user will sign`,
    required: false,
  })
  statement?: string;

  @ApiProperty({
    description: `RFC 3986 URI referring to the resource that is the subject of the signing
   (as in the __subject__ of a claim).`,
  })
  uri: string;

  @ApiProperty({ description: `Current version of the message.` })
  version: string;

  @ApiProperty({
    description: `EIP-155 Chain ID to which the session is bound, and the network where
  Contract Accounts must be resolved.`,
  })
  chainId: number;

  @ApiProperty({
    description: `Randomized token used to prevent replay attacks, at least 8 alphanumeric
  characters.`,
  })
  nonce: string;

  @ApiProperty({
    description: `ISO 8601 datetime string of the current time.`,
    required: false,
  })
  issuedAt?: string;

  @ApiProperty({
    description: `ISO 8601 datetime string that, if present, indicates when the signed
  authentication message is no longer valid.`,
    required: false,
  })
  expirationTime?: string;

  @ApiProperty({
    description: `ISO 8601 datetime string that, if present, indicates when the signed
  * authentication message will become valid.`,
    required: false,
  })
  notBefore?: string;

  @ApiProperty({
    description: `System-specific identifier that may be used to uniquely refer to the
  * sign-in request.`,
    required: false,
  })
  requestId?: string;

  @ApiProperty({
    description: `List of information or references to information the user wishes to have
  resolved as part of authentication by the relying party. They are
  expressed as RFC 3986 URIs separated by`,
    required: false,
  })
  resources?: Array<string>;
}

export class LoginDTO {
  @ApiProperty({ type: SiweMessageClass })
  message: SiweMessage;

  @ApiProperty()
  signature: string;
}
