import { CreateTripsOnOrdersDTO } from 'src/tripsonorders/dtos/create-tripsonorders-order.dto';
export declare class UpdateOrderDTO {
    userId: string;
    remarks: string;
    trips: CreateTripsOnOrdersDTO[];
}
