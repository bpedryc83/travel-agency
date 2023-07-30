import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateOrderDTO } from './dtos/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public getAllExtended(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        trips: {
          include: {
            trip: true,
          },
        },
      },
    });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  public getExtendedById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        trips: {
          include: {
            trip: true,
          },
        },
      },
    });
  }

  async create(createOrderDTO: CreateOrderDTO): Promise<Order> {
    const { userId, remarks, trips } = createOrderDTO;

    const newOrder = await this.prismaService.order.create({
      data: {
        userId,
        remarks,
        trips: {
          create: trips.map((trip) => ({
            trip: { connect: { id: trip.tripId } },
            peopleAmount: trip.peopleAmount,
          })),
        },
      },
      include: {
        trips: {
          include: {
            trip: true,
          },
        },
      },
    });

    return newOrder;
  }

  async updateById(
    id: Order['id'],
    updateOrderDTO: UpdateOrderDTO,
  ): Promise<Order> {
    const { userId, remarks, trips } = updateOrderDTO;

    const updatedOrder = await this.prismaService.order.update({
      where: { id },
      data: {
        userId,
        remarks,
      },
      include: {
        trips: true,
      },
    });

    const updatedTrips = await Promise.all(
      trips.map(async (trip) => {
        if (trip.tripId) {
          return this.prismaService.tripsOnOrders.upsert({
            where: {
              tripId_orderId: {
                orderId: id,
                tripId: trip.tripId,
              },
            },
            update: {
              peopleAmount: trip.peopleAmount,
            },
            create: {
              trip: {
                connect: { id: trip.tripId },
              },
              order: {
                connect: { id },
              },
              peopleAmount: trip.peopleAmount,
            },
          });
        } else {
          return this.prismaService.tripsOnOrders.create({
            data: {
              trip: {
                connect: { id: trip.tripId },
              },
              order: {
                connect: { id },
              },
              peopleAmount: trip.peopleAmount,
            },
          });
        }
      }),
    );
    const tripsToRemoveIds = updatedOrder.trips
      .filter(
        (trip) =>
          !trips.some((updatedTrip) => updatedTrip.tripId === trip.tripId),
      )
      .map((trip) => trip.tripId);

    if (tripsToRemoveIds.length > 0) {
      await this.prismaService.tripsOnOrders.deleteMany({
        where: {
          orderId: id,
          tripId: {
            in: tripsToRemoveIds,
          },
        },
      });
    }
    const updatedOrderWithTrips = {
      ...updatedOrder,
      trips: updatedTrips,
    };

    return updatedOrderWithTrips;
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
}
