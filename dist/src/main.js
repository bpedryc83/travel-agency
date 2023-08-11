"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./shared/services/prisma.service");
const path_1 = require("path");
const express = require("express");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.setGlobalPrefix('api');
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    if (process.env.NODE_ENV !== 'production') {
        app.enableCors({
            origin: ['http://localhost:3000'],
            methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
            credentials: true,
        });
    }
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.use(express.static((0, path_1.join)(__dirname, '../../', '/public')));
    const server = await app.listen(8000);
    server.prependListener('request', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map