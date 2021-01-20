import { Module } from '@nestjs/common';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';

@Module({
  imports: [],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
