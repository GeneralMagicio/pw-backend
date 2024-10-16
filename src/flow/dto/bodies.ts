import { ApiProperty } from '@nestjs/swagger';
import { ISuccessResult } from '@worldcoin/idkit/*';
import {
  IsDefined,
  IsEthereumAddress,
  IsJSON,
  IsString,
} from 'class-validator';

export class SetCoIDto {
  @ApiProperty({ description: 'project id' })
  @IsDefined()
  pid: number;
}

export class DnDBody {
  @ApiProperty({ description: 'collection id' })
  @IsDefined()
  collectionId: number;

  @ApiProperty({ description: 'New order of the projects in descending order' })
  @IsDefined()
  projectIds: number[];
}

export class RemoveLastVoteDto {
  @ApiProperty({
    type: 'number',
    description:
      'Collection id (null for the top-level collection comparisons)',
  })
  @IsDefined()
  collectionId: number | null;
}

export class ConnectFarcasterDto {
  @IsString()
  @IsDefined()
  signature: string;

  @IsString()
  @IsDefined()
  message: string;

  @IsEthereumAddress()
  @IsDefined()
  address: string;
}

export class ConnectWorldIdDto {
  @IsJSON()
  @IsDefined()
  proof: ISuccessResult;
}
