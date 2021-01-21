import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateCoinDto } from './create-coin.dto';

export class UpdateCoinDto extends PartialType(CreateCoinDto) {}
