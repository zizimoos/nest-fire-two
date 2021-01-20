import { IsNumber, IsString } from 'class-validator';

export class CreateCoinDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsString({ each: true })
  readonly genres: string[];
}
