import { IsInt, IsNotEmpty, Length, IsString, Min } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 40)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  country: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  duration: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  price: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  maxPeopleAmount: number;

  mainPhoto: string | null;

  @IsNotEmpty()
  @IsString()
  @Length(50, 1000)
  description: string;
}
