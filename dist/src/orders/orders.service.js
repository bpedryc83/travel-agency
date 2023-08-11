"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let OrdersService = exports.OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.order.findMany();
    }
    getAllExtended() {
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
    getById(id) {
        return this.prismaService.order.findUnique({
            where: { id },
        });
    }
    getExtendedById(id) {
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
    async create(createOrderDTO) {
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
    async updateById(id, updateOrderDTO) {
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
        const updatedTrips = await Promise.all(trips.map(async (trip) => {
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
            }
            else {
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
        }));
        const tripsToRemoveIds = updatedOrder.trips
            .filter((trip) => !trips.some((updatedTrip) => updatedTrip.tripId === trip.tripId))
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
    deleteById(id) {
        return this.prismaService.order.delete({
            where: { id },
        });
    }
};
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map