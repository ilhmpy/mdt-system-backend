/*
  Warnings:

  - Added the required column `marking` to the `Officer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `Officer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `officer` ADD COLUMN `marking` INTEGER NOT NULL,
    ADD COLUMN `rank` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Marking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marking` VARCHAR(191) NOT NULL,
    `markingNumber` INTEGER NOT NULL,
    `pairedPatrolCrew` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rank` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
