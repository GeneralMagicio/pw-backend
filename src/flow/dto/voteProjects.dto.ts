import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class IsNumberOrNull implements ValidatorConstraintInterface {
  validate(value: any) {
    return typeof value === 'number' || value === null;
  }

  defaultMessage(args: ValidationArguments) {
    return `Property ${args.property} must be a number or null`;
  }
}

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

  @Validate(IsNumberOrNull)
  @ApiProperty()
  project1Stars: number | null;

  @Validate(IsNumberOrNull)
  @ApiProperty()
  project2Stars: number | null;
}
