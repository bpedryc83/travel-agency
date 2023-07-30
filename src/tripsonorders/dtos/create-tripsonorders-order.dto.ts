import { IsNotEmpty, Length, IsString, IsUUID, Matches } from 'class-validator';

// create-trips-on-orders.dto.ts
export class CreateTripsOnOrdersDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  tripId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  orderId: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 5)
  @Matches(/^[0-9]+$/)
  peopleAmount: number;
}
