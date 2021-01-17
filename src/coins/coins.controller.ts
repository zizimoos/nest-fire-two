import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}
  @Get()
  getAll() {
    return `This will return all coins`;
  }

  @Get('/:id')
  getOne(@Param('id') coinId: string) {
    return `This will return one coin id ${coinId}`;
  }

  @Post()
  create() {
    return `This will create a coin`;
  }

  @Delete('/:id')
  remove(@Param('id') coinId: string) {
    return `This will delete a coin id ${coinId}`;
  }

  @Patch('/:id')
  patch(@Param('id') coinId: string) {
    return `This will patch a coin with the id ${coinId}`;
  }
}
