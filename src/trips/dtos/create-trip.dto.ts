import { IsNotEmpty, Length, IsString, Matches } from 'class-validator';

export class CreateTripDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 40)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 2)
  @Matches(/^[0-9]+$/)
  duration: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 5)
  @Matches(/^[0-9]+$/)
  price: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 2)
  @Matches(/^[0-9]+$/)
  maxPeopleAmount: string;

  mainPhoto: string;

  @IsNotEmpty()
  @IsString()
  @Length(50, 1000)
  description: string;
}
