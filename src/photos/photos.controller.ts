import {
  Body,
  Param,
  Delete,
  Get,
  Post,
  ParseUUIDPipe,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PhotosService } from './photos.service';
import { CreateTripPhotoDTO } from './dtos/create-tripPhoto.dto';
import { checkImageFormat } from 'utils/checkImageFormat';
import { editFileName } from 'utils/editFileName';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Get('/')
  getAll(): any {
    return this.photosService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const singlePhoto = await this.photosService.getById(id);
    if (!singlePhoto) throw new NotFoundException('Photo not found');
    return singlePhoto;
  }

  @Post('/')
  @UseInterceptors(
    FileInterceptor('photo', {
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
    @Body() createTripPhotoDTO: CreateTripPhotoDTO,
  ) {
    if (!photo) {
      throw new BadRequestException('Attach the file please');
    }

    const targetPath = `${photo.filename}`;
    return this.photosService.create(targetPath, createTripPhotoDTO);
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.photosService.getById(id)))
      throw new NotFoundException('Photo not found');
    await this.photosService.deleteById(id);
    return { success: true };
  }
}
