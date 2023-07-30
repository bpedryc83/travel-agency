import { Injectable } from '@nestjs/common';
import { tripPhoto } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<tripPhoto[]> {
    return this.prismaService.tripPhoto.findMany();
  }

  public getById(id: tripPhoto['id']): Promise<tripPhoto | null> {
    return this.prismaService.tripPhoto.findUnique({
      where: { id },
    });
  }

  async create(
    photo: string,
    photoData: Omit<tripPhoto, 'id' | 'photo'>,
  ): Promise<tripPhoto> {
    return this.prismaService.tripPhoto.create({
      data: { ...photoData, photo: photo },
    });
  }

  public deleteById(id: tripPhoto['id']): Promise<tripPhoto> {
    return this.prismaService.tripPhoto.delete({
      where: { id },
    });
  }
}
