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

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'get all items';
  }
  @Post()
  createItem(@Body() createItemDto: CreateItemDto): CreateItemDto {
    // return `Name : ${createItemDto.name}`;
    return createItemDto;
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item ${param.id}`;
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
