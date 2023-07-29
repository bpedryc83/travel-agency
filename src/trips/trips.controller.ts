import {
  Controller,
  Param,
  ParseUUIDPipe,
  Body,
  Get,
  Put,
  Post,
  Delete,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TripsService } from './trips.service';
import { CreateTripDTO } from './dtos/create-trip.dto';
import { UpdateTripDTO } from './dtos/update-trip.dto';
import { diskStorage } from 'multer';
import { checkImageFormat } from 'utils/checkImageFormat';
import { editFileName } from 'utils/editFileName';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Get('/')
  getAll(): any {
    return this.tripsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = await this.tripsService.getById(id);
    if (!prod) throw new NotFoundException('Trip not found');
    return prod;
  }

  @Post('/')
  @UseInterceptors(
    FileInterceptor('mainPhoto', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: editFileName,
      }),
      limits: { fileSize: 15728640 },
      fileFilter: checkImageFormat,
    }),
  )
  async create(
    @UploadedFile() photo: Express.Multer.File,
    @Body() tripData: CreateTripDTO,
  ) {
    const { title, country, duration, price, maxPeopleAmount, description } =
      tripData;
    const durationInt = parseInt(duration);
    const priceInt = parseInt(price);
    const maxPeopleAmountInt = parseInt(maxPeopleAmount);

    const parsedTripData = {
      title: title,
      country: country,
      duration: durationInt,
      price: priceInt,
      maxPeopleAmount: maxPeopleAmountInt,
      description: description,
    };

    if (!photo) {
      throw new BadRequestException('Main photo is obligatory');
    }

    const targetPath = `./public/uploads/${photo.filename}`;
    return this.tripsService.create(targetPath, parsedTripData);
  }

  @Put('/:id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() tripData: UpdateTripDTO,
  ) {
    if (!(await this.tripsService.getById(id)))
      throw new NotFoundException('Trip not found');
    await this.tripsService.updateById(id, tripData);
    return { success: true };
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.tripsService.getById(id)))
      throw new NotFoundException('Trip not found');
    await this.tripsService.deleteById(id);
    return { success: true };
  }
}
