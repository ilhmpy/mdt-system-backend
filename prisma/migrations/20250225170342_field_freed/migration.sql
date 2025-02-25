/*
  Warnings:

  - The values [fined,stoped,selled] on the enum `WeaponHistoryItem_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `carhistoryitem` ADD COLUMN `freed` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `weaponhistoryitem` MODIFY `type` ENUM('confiscated', 'used', 'wanted') NOT NULL;
