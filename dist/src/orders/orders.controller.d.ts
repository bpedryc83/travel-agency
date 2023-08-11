import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getAllExtended(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        remarks: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    getExtendedById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        remarks: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    createOrder(createOrderDTO: CreateOrderDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        userId: string;
        remarks: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    update(id: string, updateOrderData: UpdateOrderDTO): Promise<{
        success: boolean;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
}
