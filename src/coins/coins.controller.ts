import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoinsService } from './coins.service';
import { Coin } from './entities/coin.entity';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}
  @Get()
  getAll(): Coin[] {
    return this.coinsService.getAll();
  }

  @Get('/search')
  search(@Query('name') coinName: string) {
    return `We are searching for a movie with a name ${coinName}`;
  }

  @Get('/:id')
  getOne(@Param('id') coinId: string): Coin {
    return this.coinsService.getOne(coinId);
  }

  @Post()
  create(@Body() coinData) {
    return this.coinsService.create(coinData);
  }

  @Delete('/:id')
  remove(@Param('id') coinId: string) {
    return this.coinsService.deleteOne(coinId);
  }

  @Patch('/:id')
  patch(@Param('id') coinId: string, @Body() updateData) {
    return this.coinsService.update(coinId, updateData);
  }
}
