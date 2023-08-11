/// <reference types="multer" />
import { PhotosService } from './photos.service';
import { CreateTripPhotoDTO } from './dtos/create-tripPhoto.dto';
export declare class PhotosController {
    private photosService;
    constructor(photosService: PhotosService);
    getAll(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        photo: string;
        tripId: string;
    }, unknown> & {}>;
    create(photo: Express.Multer.File, createTripPhotoDTO: CreateTripPhotoDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        photo: string;
        tripId: string;
    }, unknown> & {}>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
}
