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
import * as fs from 'fs';
import * as path from 'path';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Get('/')
  getAll(): any {
    return this.tripsService.getAll();
  }

  @Get('/extended')
  getAllExtended(): any {
    return this.tripsService.getAllExtended();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const singleTrip = await this.tripsService.getById(id);
    if (!singleTrip) throw new NotFoundException('Trip not found');
    return singleTrip;
  }

  @Get('/extended/:id')
  async getExtendedById(@Param('id', new ParseUUIDPipe()) id: string) {
    const singleTrip = await this.tripsService.getExtendedById(id);
    if (!singleTrip) throw new NotFoundException('Trip not found');
    return singleTrip;
  }

  @Post('/')
  @UseInterceptors(
    FileInterceptor('mainPhoto', {
      storage: diskStorage({
        destination: './src/public/uploads',
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
  @UseInterceptors(
    FileInterceptor('mainPhoto', {
      storage: diskStorage({
        destination: './src/public/uploads',
        filename: editFileName,
      }),
      limits: { fileSize: 15728640 },
      fileFilter: checkImageFormat,
    }),
  )
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFile() photo: Express.Multer.File,
    @Body() tripData: UpdateTripDTO,
  ) {
    const { title, country, duration, price, maxPeopleAmount, description } =
      tripData;
    const durationInt = parseInt(duration);
    const priceInt = parseInt(price);
    const maxPeopleAmountInt = parseInt(maxPeopleAmount);

    let targetPath: string;
    const existingTrip = await this.tripsService.getById(id);

    const parsedTripData = {
      title: title,
      country: country,
      duration: durationInt,
      price: priceInt,
      maxPeopleAmount: maxPeopleAmountInt,
      description: description,
    };

    if (!(await this.tripsService.getById(id)))
      throw new NotFoundException('Trip not found');

    if (photo) {
      if (existingTrip.mainPhoto) {
        const filePath = path.join(
          __dirname,
          '../../../src',
          existingTrip.mainPhoto,
        );
        try {
          fs.unlinkSync(filePath);
        } catch (err) {
          console.error('Error while deleting the file:', err);
        }
      }
      targetPath = `./public/uploads/${photo.filename}`;
    } else {
      targetPath = existingTrip.mainPhoto;
    }
    return this.tripsService.updateById(id, targetPath, parsedTripData);
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.tripsService.getById(id)))
      throw new NotFoundException('Trip not found');
    await this.tripsService.deleteById(id);
    return { success: true };
  }
}
