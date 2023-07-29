import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [TripsController],
  providers: [TripsService, PrismaService],
})
export class TripsModule {}
