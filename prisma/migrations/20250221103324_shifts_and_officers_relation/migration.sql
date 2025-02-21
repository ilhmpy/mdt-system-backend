/*
  Warnings:

  - You are about to drop the column `headOfShift` on the `shift` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `officer` ADD COLUMN `isHead` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `shift` DROP COLUMN `headOfShift`;

-- AddForeignKey
ALTER TABLE `Officer` ADD CONSTRAINT `Officer_shiftId_fkey` FOREIGN KEY (`shiftId`) REFERENCES `Shift`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Officer` ADD CONSTRAINT `Officer_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
