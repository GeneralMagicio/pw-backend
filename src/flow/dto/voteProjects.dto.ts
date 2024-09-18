import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  Max,
  Min,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class IsNumberOrNull implements ValidatorConstraintInterface {
  validate(value: any) {
    return (
      (typeof value === 'number' && Number.isInteger(value)) || value === null
    );
  }

  defaultMessage(args: ValidationArguments) {
    return `Property ${args.property} must be a number or null`;
  }
}

@ValidatorConstraint()
export class IsRating implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value === 'number') {
      if (value >= 1 && value <= 5 && Number.isInteger(value)) return true;
      return false;
    }
    return value === null;
  }

  defaultMessage(args: ValidationArguments) {
    return `Property ${args.property} must be an integer (1 <= r <= 5) or null`;
  }
}

export type Rating = 1 | 2 | 3 | 4 | 5 | null;

export class VoteProjectsDTO {
  @IsInt()
  @ApiProperty()
  project1Id: number;

  @IsInt()
  @ApiProperty()
  project2Id: number;

  @Validate(IsNumberOrNull)
  @ApiProperty()
  pickedId: number | null;

  @Validate(IsRating)
  @ApiProperty()
  project1Stars: Rating;

  @Validate(IsRating)
  @ApiProperty()
  project2Stars: Rating;
}
