import { Injectable } from '@nestjs/common';
import { Trip } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class TripsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Trip[]> {
    return this.prismaService.trip.findMany();
  }

  public getById(id: Trip['id']): Promise<Trip | null> {
    return this.prismaService.trip.findUnique({
      where: { id },
    });
  }

  async create(
    photo: string,
    tripData: Omit<Trip, 'id' | 'mainPhoto'>,
  ): Promise<Trip> {
    if (photo) {
      return this.prismaService.trip.create({
        data: { ...tripData, mainPhoto: photo },
      });
    } else {
      return this.prismaService.trip.create({
        data: { ...tripData },
      });
    }
  }

  public updateById(id: Trip['id'], tripData: Omit<Trip, 'id'>): Promise<Trip> {
    return this.prismaService.trip.update({
      where: { id },
      data: tripData,
    });
  }

  public deleteById(id: Trip['id']): Promise<Trip> {
    return this.prismaService.trip.delete({
      where: { id },
    });
  }
}
