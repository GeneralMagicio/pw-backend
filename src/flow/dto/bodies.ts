import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEthereumAddress,
  IsObject,
  IsString,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ISuccessResult } from 'src/utils/world-coin';

@ValidatorConstraint()
export class IsPositiveOrNegativeOneConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any) {
    if (typeof value !== 'number') {
      return false;
    }
    return value > 0 || value === -1;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a positive number or -1`;
  }
}

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
export class DelegateFarcasterDto {
  @IsString()
  @IsDefined()
  targetUsername: string;

  @Validate(IsPositiveOrNegativeOneConstraint)
  @IsDefined()
  collectionId: number;
}
export class RevokeDelegationDto {
  @Validate(IsPositiveOrNegativeOneConstraint)
  @IsDefined()
  collectionId: number;
}
export class UserByUsernameDto {
  @IsString()
  @IsDefined()
  username: string;
}

export class ConnectWorldIdDto {
  @IsObject()
  @IsDefined()
  proof: ISuccessResult;
}
