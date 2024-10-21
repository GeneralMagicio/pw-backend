import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsEnum,
  IsEthereumAddress,
  IsObject,
  IsPositive,
  IsString,
  Max,
  Min,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ISuccessResult, VerificationLevel } from 'src/utils/world-coin';

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
  @ApiProperty()
  signature: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  message: string;

  @IsEthereumAddress()
  @IsDefined()
  @ApiProperty()
  address: string;
}
export class DelegateFarcasterDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  targetUsername: string;

  @Validate(IsPositiveOrNegativeOneConstraint)
  @IsDefined()
  @ApiProperty()
  collectionId: number;
}
export class DelegateBudgetFarcasterDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  targetUsername: string;
}

@ValidatorConstraint()
export class IsPositiveNumberArray implements ValidatorConstraintInterface {
  validate(array: unknown[]) {
    if (!Array.isArray(array)) {
      return false;
    }
    return array.every((element) => typeof element === 'number' && element > 0);
  }

  defaultMessage(args: ValidationArguments) {
    return 'All elements in the array must be positive numbers';
  }
}

export class BudgetDto {
  @IsPositive()
  @Min(2_000_000)
  @Max(8_000_000)
  @IsDefined()
  @ApiProperty()
  budget: number;

  @IsArray()
  @ArrayMinSize(1)
  @IsDefined()
  @Validate(IsPositiveNumberArray)
  @ApiProperty({ isArray: true, type: Number })
  allocationPercentages: number[];
}
export class RevokeDelegationDto {
  @Validate(IsPositiveOrNegativeOneConstraint)
  @IsDefined()
  @ApiProperty()
  collectionId: number;
}
export class UserByUsernameDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  username: string;
}

export class SuccessResultDto {
  @IsString()
  @ApiProperty()
  proof: string;

  @IsString()
  @ApiProperty()
  merkle_root: string;

  @IsString()
  @ApiProperty()
  nullifier_hash: string;

  @IsEnum(VerificationLevel)
  @ApiProperty()
  verification_level: VerificationLevel;
}

export class ConnectWorldIdDto {
  @IsObject()
  @IsDefined()
  @ApiProperty({ type: SuccessResultDto })
  proof: ISuccessResult;
}

@ValidatorConstraint()
export class ValidateRanking implements ValidatorConstraintInterface {
  validate(array: any[]) {
    if (!Array.isArray(array)) {
      return false;
    }
    return array.every(
      (element) =>
        'id' in element &&
        typeof element.id === 'number' &&
        'share' in element &&
        typeof element.share === 'number',
    );
  }

  defaultMessage(args: ValidationArguments) {
    return 'Validation error';
  }
}

export class CustomRankingDto {
  @IsPositive()
  @IsDefined()
  @ApiProperty()
  collectionId: number;

  @Validate(ValidateRanking)
  @IsDefined()
  @ApiProperty()
  ranking: { id: number; share: number }[];
}

export const exampleRankingDto = {
  value: {
    collectionId: 2,
    ranking: [
      { id: 11, share: 0.05 },
      { id: 16, share: 0.25 },
      { id: 28, share: 0.3 },
      { id: 21, share: 0.1 },
      { id: 5, share: 0.1 },
      { id: 17, share: 0.18 },
      { id: 31, share: 0.02 },
    ],
  },
};
