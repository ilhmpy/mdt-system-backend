-- DropIndex
DROP INDEX `Civil_name_key` ON `civil`;

-- DropIndex
DROP INDEX `Marking_label_key` ON `marking`;

-- DropIndex
DROP INDEX `Marking_marking_key` ON `marking`;

-- AlterTable
ALTER TABLE `civil` ADD COLUMN `isOfficer` BOOLEAN NULL DEFAULT false;
