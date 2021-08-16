import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { ItemInterface } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<ItemInterface[]> {
    return this.itemsService.findAll();
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<ItemInterface> {
    // return `Name : ${createItemDto.name}`;
    return this.itemsService.create(createItemDto);
  }

  @Get(':id')
  findOne(@Param() param): Promise<ItemInterface> {
    return this.itemsService.findOne(param.id);
  }

  @Delete(':id')
  deleteItem(@Param('id') id): Promise<ItemInterface> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  updateItem(
    @Body() updateItemDto: CreateItemDto,
    @Param(':id') id,
  ): Promise<ItemInterface> {
    return this.itemsService.update(id, updateItemDto);
  }
}
