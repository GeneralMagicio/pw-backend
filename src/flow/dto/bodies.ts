import { ApiProperty } from '@nestjs/swagger';

export class FinishCollectionBody {
  @ApiProperty({ description: 'Collection id' })
  cid: number;
}

export class ExcludeProjectBody {
  @ApiProperty({ description: 'Project id' })
  id: number;
}
