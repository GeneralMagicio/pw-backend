import { ApiProperty } from '@nestjs/swagger';
import { medalTypes } from 'src/utils/badges/readBadges';

export class BadgeDataResponse {
  @ApiProperty({ required: false })
  holderPoints?: number;

  @ApiProperty({ required: false })
  delegatePoints?: number;

  @ApiProperty({ required: false })
  holderAmount?: number;

  @ApiProperty({ required: false })
  delegateAmount?: number;

  @ApiProperty({ required: false })
  badgeholderPoints?: 1;

  @ApiProperty({ required: false, enum: medalTypes })
  holderType?: (typeof medalTypes)[number];

  @ApiProperty({ required: false, enum: medalTypes })
  delegateType?: (typeof medalTypes)[number];

  @ApiProperty({ required: false })
  worldCoinVerified?: true;
}
