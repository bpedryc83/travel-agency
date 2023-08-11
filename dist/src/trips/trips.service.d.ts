import { Trip } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class TripsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Trip[]>;
    getAllExtended(): Promise<Trip[]>;
    getById(id: Trip['id']): Promise<Trip | null>;
    getExtendedById(id: Trip['id']): Promise<Trip | null>;
    create(photo: string, tripData: Omit<Trip, 'id' | 'mainPhoto'>): Promise<Trip>;
    updateById(id: Trip['id'], photo: string, tripData: Omit<Trip, 'id' | 'mainPhoto'>): Promise<Trip>;
    deleteById(id: Trip['id']): Promise<Trip>;
}
