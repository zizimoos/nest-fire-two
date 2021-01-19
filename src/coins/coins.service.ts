import { Injectable, NotFoundException } from '@nestjs/common';
import { Coin } from './entities/coin.entity';

@Injectable()
export class CoinsService {
  private coins: Coin[] = [];

  getAll(): Coin[] {
    return this.coins;
  }

  getOne(id: string): Coin {
    const coin = this.coins.find((coin) => coin.id === +id);
    if (!coin) {
      throw new NotFoundException(`Coin with ID:${id} not found`);
    }
    return coin;
  }

  deleteOne(id: string): boolean {
    this.getOne(id);
    this.coins = this.coins.filter((coin) => coin.id !== +id);
    return true;
  }

  create(coinData) {
    this.coins.push({
      id: this.coins.length + 1,
      ...coinData,
    });
  }

  update(id: string, updateData) {
    const coin = this.getOne(id);
    this.deleteOne(id);
    this.coins.push({ ...coin, ...updateData });
  }
}
