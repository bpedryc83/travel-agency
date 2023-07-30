/*
  Warnings:

  - Made the column `mainPhoto` on table `trip` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `trip` MODIFY `mainPhoto` VARCHAR(191) NOT NULL;
