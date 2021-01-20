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
import { CreateCoinDto } from './dto/create-coin.dto';
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
  getOne(@Param('id') coinId: number): CreateCoinDto {
    return this.coinsService.getOne(coinId);
  }

  @Post()
  create(@Body() coinData: CreateCoinDto) {
    return this.coinsService.create(coinData);
  }

  @Delete('/:id')
  remove(@Param('id') coinId: number) {
    return this.coinsService.deleteOne(coinId);
  }

  @Patch('/:id')
  patch(@Param('id') coinId: number, @Body() updateData) {
    return this.coinsService.update(coinId, updateData);
  }
}
