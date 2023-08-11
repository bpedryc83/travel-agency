/// <reference types="multer" />
import { TripsService } from './trips.service';
import { CreateTripDTO } from './dtos/create-trip.dto';
import { UpdateTripDTO } from './dtos/update-trip.dto';
export declare class TripsController {
    private tripsService;
    constructor(tripsService: TripsService);
    getAll(): any;
    getAllExtended(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        country: string;
        duration: number;
        price: number;
        maxPeopleAmount: number;
        mainPhoto: string;
        description: string;
    }, unknown> & {}>;
    getExtendedById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        country: string;
        duration: number;
        price: number;
        maxPeopleAmount: number;
        mainPhoto: string;
        description: string;
    }, unknown> & {}>;
    create(photo: Express.Multer.File, tripData: CreateTripDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        country: string;
        duration: number;
        price: number;
        maxPeopleAmount: number;
        mainPhoto: string;
        description: string;
    }, unknown> & {}>;
    update(id: string, photo: Express.Multer.File, tripData: UpdateTripDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        country: string;
        duration: number;
        price: number;
        maxPeopleAmount: number;
        mainPhoto: string;
        description: string;
    }, unknown> & {}>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
}
