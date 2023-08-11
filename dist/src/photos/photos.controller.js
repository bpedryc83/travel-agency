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
exports.PhotosController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const photos_service_1 = require("./photos.service");
const create_tripPhoto_dto_1 = require("./dtos/create-tripPhoto.dto");
const checkImageFormat_1 = require("../../utils/checkImageFormat");
const editFileName_1 = require("../../utils/editFileName");
let PhotosController = exports.PhotosController = class PhotosController {
    constructor(photosService) {
        this.photosService = photosService;
    }
    getAll() {
        return this.photosService.getAll();
    }
    async getById(id) {
        const singlePhoto = await this.photosService.getById(id);
        if (!singlePhoto)
            throw new common_1.NotFoundException('Photo not found');
        return singlePhoto;
    }
    async create(photo, createTripPhotoDTO) {
        if (!photo) {
            throw new common_1.BadRequestException('Attach the file please');
        }
        const targetPath = `${photo.filename}`;
        return this.photosService.create(targetPath, createTripPhotoDTO);
    }
    async deleteById(id) {
        if (!(await this.photosService.getById(id)))
            throw new common_1.NotFoundException('Photo not found');
        await this.photosService.deleteById(id);
        return { success: true };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PhotosController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo', {
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
    __metadata("design:paramtypes", [Object, create_tripPhoto_dto_1.CreateTripPhotoDTO]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "deleteById", null);
exports.PhotosController = PhotosController = __decorate([
    (0, common_2.Controller)('photos'),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosController);
//# sourceMappingURL=photos.controller.js.map