import { Injectable } from '@nestjs/common';
import { ItemInterface } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: ItemInterface[] = [
    {
      id: '123123',
      name: 'item 1',
      description: 'item ya kwanza',
      qty: 1,
    },
    {
      id: '1231323',
      name: 'item 1',
      description: 'item ya pili',
      qty: 1,
    },
  ];

  findAll(): ItemInterface[] {
    return this.items;
  }

  findOne(id): ItemInterface {
    return this.items.find((item) => (item.id === id));
  }
}
