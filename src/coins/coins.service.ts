import { Injectable } from '@nestjs/common';
import { Coin } from './entities/coin.entity';

@Injectable()
export class CoinsService {
  private coins: Coin[] = [];

  getAll(): Coin[] {
    return this.coins;
  }

  getOne(id: string): Coin {
    return this.coins.find((coin) => coin.id === +id);
  }

  deleteOne(id: string): boolean {
    this.coins.filter((coin) => coin.id !== +id);
    return true;
  }

  create(coinData) {
    this.coins.push({
      id: this.coins.length + 1,
      ...coinData,
    });
  }
}
