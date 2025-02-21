/*
  Warnings:

  - Added the required column `label` to the `Marking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `marking` ADD COLUMN `label` VARCHAR(191) NOT NULL;
