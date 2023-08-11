import { CreateTripsOnOrdersDTO } from 'src/tripsonorders/dtos/create-tripsonorders-order.dto';
export declare class CreateOrderDTO {
    userId: string;
    remarks: string;
    trips: CreateTripsOnOrdersDTO[];
}
