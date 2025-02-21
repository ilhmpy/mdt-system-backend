/*
  Warnings:

  - You are about to drop the column `markingNumber` on the `marking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `marking` DROP COLUMN `markingNumber`;

-- AlterTable
ALTER TABLE `officer` ADD COLUMN `markingNumber` INTEGER NULL;
