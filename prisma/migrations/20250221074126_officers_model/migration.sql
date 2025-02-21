/*
  Warnings:

  - You are about to drop the column `marking` on the `officer` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `officer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[badgeNumber]` on the table `Officer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `badgeNumber` to the `Officer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Officer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankId` to the `Officer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Officer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shiftId` to the `Officer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `officer` DROP COLUMN `marking`,
    DROP COLUMN `rank`,
    ADD COLUMN `badgeNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `markingId` INTEGER NULL,
    ADD COLUMN `rankId` INTEGER NOT NULL,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `shiftId` INTEGER NOT NULL,
    ADD COLUMN `status` ENUM('TRUE', 'FALSE', 'OS') NULL;

-- CreateTable
CREATE TABLE `Shift` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `headOfShift` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Officer_badgeNumber_key` ON `Officer`(`badgeNumber`);

-- AddForeignKey
ALTER TABLE `Officer` ADD CONSTRAINT `Officer_rankId_fkey` FOREIGN KEY (`rankId`) REFERENCES `Rank`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Officer` ADD CONSTRAINT `Officer_markingId_fkey` FOREIGN KEY (`markingId`) REFERENCES `Marking`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
