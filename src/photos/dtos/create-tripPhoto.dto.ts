import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTripPhotoDTO {
  mainPhoto: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  tripId: string;
}
