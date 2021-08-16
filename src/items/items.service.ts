import { Injectable } from '@nestjs/common';
import { ItemInterface } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemInterface>,
  ) {}

  async findAll(): Promise<ItemInterface[]> {
    return this.itemModel.find();
  }

  async findOne(id): Promise<ItemInterface> {
    return this.itemModel.findOne({ _id: id });
  }

  async create(item: ItemInterface): Promise<ItemInterface> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<ItemInterface> {
    return this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemInterface): Promise<ItemInterface> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
