import { IsNotEmpty, Length, IsString, IsUUID } from 'class-validator';
import { CreateTripsOnOrdersDTO } from 'src/tripsonorders/dtos/create-tripsonorders-order.dto';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  @Length(15, 500)
  remarks: string;

  trips: CreateTripsOnOrdersDTO[];
}
