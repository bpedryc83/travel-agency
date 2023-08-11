import { Order } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateOrderDTO } from './dtos/update-order.dto';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Order[]>;
    getAllExtended(): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order | null>;
    getExtendedById(id: Order['id']): Promise<Order | null>;
    create(createOrderDTO: CreateOrderDTO): Promise<Order>;
    updateById(id: Order['id'], updateOrderDTO: UpdateOrderDTO): Promise<Order>;
    deleteById(id: Order['id']): Promise<Order>;
}
