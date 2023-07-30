import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateTripPhotoDTO {
  mainPhoto: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  tripId: string;
}
