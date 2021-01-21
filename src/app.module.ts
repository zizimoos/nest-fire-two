import { Module } from '@nestjs/common';
import { CoinsModule } from './coins/coins.module';
import { AppController } from './app.controller';

@Module({
  imports: [CoinsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
