-- DropForeignKey
ALTER TABLE `photos` DROP FOREIGN KEY `Photos_tripId_fkey`;

-- AddForeignKey
ALTER TABLE `Photos` ADD CONSTRAINT `Photos_tripId_fkey` FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
