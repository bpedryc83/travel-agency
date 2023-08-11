import { tripPhoto } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class PhotosService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<tripPhoto[]>;
    getById(id: tripPhoto['id']): Promise<tripPhoto | null>;
    create(photo: string, photoData: Omit<tripPhoto, 'id' | 'photo'>): Promise<tripPhoto>;
    deleteById(id: tripPhoto['id']): Promise<tripPhoto>;
}
