/*
  Warnings:

  - You are about to drop the `photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `Photos_tripId_fkey`;

-- DropTable
DROP TABLE `photos`;

-- CreateTable
CREATE TABLE `tripPhoto` (
    `id` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `tripId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tripPhoto` ADD CONSTRAINT `tripPhoto_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
