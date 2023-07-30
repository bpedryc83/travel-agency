import { Injectable } from '@nestjs/common';
import { Trip } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class TripsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Trip[]> {
    return this.prismaService.trip.findMany();
  }

  public getAllExtended(): Promise<Trip[]> {
    return this.prismaService.trip.findMany({
      include: {
        orders: true,
        photos: true,
      },
    });
  }

  public getById(id: Trip['id']): Promise<Trip | null> {
    return this.prismaService.trip.findUnique({
      where: { id },
    });
  }

  public getExtendedById(id: Trip['id']): Promise<Trip | null> {
    return this.prismaService.trip.findUnique({
      where: { id },
      include: {
        orders: true,
        photos: true,
      },
    });
  }

  async create(
    photo: string,
    tripData: Omit<Trip, 'id' | 'mainPhoto'>,
  ): Promise<Trip> {
    return this.prismaService.trip.create({
      data: { ...tripData, mainPhoto: photo },
    });
  }

  async updateById(
    id: Trip['id'],
    photo: string,
    tripData: Omit<Trip, 'id' | 'mainPhoto'>,
  ): Promise<Trip> {
    return this.prismaService.trip.update({
      where: { id },
      data: { ...tripData, mainPhoto: photo },
    });
  }

  public deleteById(id: Trip['id']): Promise<Trip> {
    return this.prismaService.trip.delete({
      where: { id },
    });
  }
}
