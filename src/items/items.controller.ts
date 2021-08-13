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
  findAll(): ItemInterface[] {
    return this.itemsService.findAll();
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): CreateItemDto {
    // return `Name : ${createItemDto.name}`;
    return createItemDto;
  }

  @Get(':id')
  findOne(@Param() param): ItemInterface {
    return this.itemsService.findOne(param.id);
  }

  @Delete(':id')
  deleteItem(@Param('id') id): string {
    return `delete item ${id}`;
  }

  @Put(':id')
  updateItem(@Body() updateItemDto: CreateItemDto, @Param(':id') id): string {
    return `Updated item ${id} - name: ${updateItemDto.name}`;
  }
}
