import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoinDto } from './dto/create-coin.dto';
import { Coin } from './entities/coin.entity';

@Injectable()
export class CoinsService {
  private coins: Coin[] = [];

  getAll(): Coin[] {
    return this.coins;
  }

  getOne(id: number): Coin {
    const coin = this.coins.find((coin) => coin.id === id);
    if (!coin) {
      throw new NotFoundException(`Coin with ID:${id} not found`);
    }
    return coin;
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.coins = this.coins.filter((coin) => coin.id !== +id);
    return true;
  }

  create(coinData: CreateCoinDto): void {
    this.coins.push({
      id: this.coins.length + 1,
      ...coinData,
    });
  }

  update(id: number, updateData) {
    const coin = this.getOne(id);
    this.deleteOne(id);
    this.coins.push({ ...coin, ...updateData });
  }
}
