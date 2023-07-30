import {
  Body,
  Param,
  Delete,
  Get,
  Post,
  Put,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/extended')
  getAllExtended(): any {
    return this.ordersService.getAllExtended();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const singleOrder = await this.ordersService.getById(id);
    if (!singleOrder) throw new NotFoundException('Order not found');
    return singleOrder;
  }

  @Get('/extended/:id')
  async getExtendedById(@Param('id', new ParseUUIDPipe()) id: string) {
    const singleOrder = await this.ordersService.getExtendedById(id);
    if (!singleOrder) throw new NotFoundException('Order not found');
    return singleOrder;
  }

  @Post('/')
  async createOrder(@Body() createOrderDTO: CreateOrderDTO) {
    return this.ordersService.create(createOrderDTO);
  }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateOrderData: UpdateOrderDTO,
  ) {
    if (!(await this.ordersService.getById(id)))
      throw new NotFoundException('Order not found');
    await this.ordersService.updateById(id, updateOrderData);
    return { success: true };
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.ordersService.getById(id)))
      throw new NotFoundException('Order not found');
    await this.ordersService.deleteById(id);
    return { success: true };
  }
}
