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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const trips_service_1 = require("./trips.service");
const create_trip_dto_1 = require("./dtos/create-trip.dto");
const update_trip_dto_1 = require("./dtos/update-trip.dto");
const multer_1 = require("multer");
const checkImageFormat_1 = require("../../utils/checkImageFormat");
const editFileName_1 = require("../../utils/editFileName");
const fs = require("fs");
const path = require("path");
let TripsController = exports.TripsController = class TripsController {
    constructor(tripsService) {
        this.tripsService = tripsService;
    }
    getAll() {
        return this.tripsService.getAll();
    }
    getAllExtended() {
        return this.tripsService.getAllExtended();
    }
    async getById(id) {
        const singleTrip = await this.tripsService.getById(id);
        if (!singleTrip)
            throw new common_1.NotFoundException('Trip not found');
        return singleTrip;
    }
    async getExtendedById(id) {
        const singleTrip = await this.tripsService.getExtendedById(id);
        if (!singleTrip)
            throw new common_1.NotFoundException('Trip not found');
        return singleTrip;
    }
    async create(photo, tripData) {
        const { title, country, duration, price, maxPeopleAmount, description } = tripData;
        const durationInt = parseInt(duration);
        const priceInt = parseInt(price);
        const maxPeopleAmountInt = parseInt(maxPeopleAmount);
        const parsedTripData = {
            title: title,
            country: country,
            duration: durationInt,
            price: priceInt,
            maxPeopleAmount: maxPeopleAmountInt,
            description: description,
        };
        if (!photo) {
            throw new common_1.BadRequestException('Main photo is obligatory');
        }
        const targetPath = `${photo.filename}`;
        return this.tripsService.create(targetPath, parsedTripData);
    }
    async update(id, photo, tripData) {
        const { title, country, duration, price, maxPeopleAmount, description } = tripData;
        const durationInt = parseInt(duration);
        const priceInt = parseInt(price);
        const maxPeopleAmountInt = parseInt(maxPeopleAmount);
        let targetPath;
        const existingTrip = await this.tripsService.getById(id);
        const parsedTripData = {
            title: title,
            country: country,
            duration: durationInt,
            price: priceInt,
            maxPeopleAmount: maxPeopleAmountInt,
            description: description,
        };
        if (!(await this.tripsService.getById(id)))
            throw new common_1.NotFoundException('Trip not found');
        if (photo) {
            if (existingTrip.mainPhoto) {
                const filePath = path.join(__dirname, '../../../src', existingTrip.mainPhoto);
                try {
                    fs.unlinkSync(filePath);
                }
                catch (err) {
                    console.error('Error while deleting the file:', err);
                }
            }
            targetPath = `${photo.filename}`;
        }
        else {
            targetPath = existingTrip.mainPhoto;
        }
        return this.tripsService.updateById(id, targetPath, parsedTripData);
    }
    async deleteById(id) {
        if (!(await this.tripsService.getById(id)))
            throw new common_1.NotFoundException('Trip not found');
        await this.tripsService.deleteById(id);
        return { success: true };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TripsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/extended'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TripsController.prototype, "getAllExtended", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/extended/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getExtendedById", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('mainPhoto', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/uploads',
            filename: editFileName_1.editFileName,
        }),
        limits: { fileSize: 15728640 },
        fileFilter: checkImageFormat_1.checkImageFormat,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_trip_dto_1.CreateTripDTO]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('mainPhoto', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/uploads',
            filename: editFileName_1.editFileName,
        }),
        limits: { fileSize: 15728640 },
        fileFilter: checkImageFormat_1.checkImageFormat,
    })),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_trip_dto_1.UpdateTripDTO]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "deleteById", null);
exports.TripsController = TripsController = __decorate([
    (0, common_1.Controller)('trips'),
    __metadata("design:paramtypes", [trips_service_1.TripsService])
], TripsController);
//# sourceMappingURL=trips.controller.js.map