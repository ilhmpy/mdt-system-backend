-- AlterTable
ALTER TABLE `car` ADD COLUMN `wanted` BOOLEAN NULL DEFAULT false,
    MODIFY `color` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `civil` ADD COLUMN `wanted` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `officer` ADD COLUMN `onDuty` BOOLEAN NULL DEFAULT true;

-- AlterTable
ALTER TABLE `permission` ADD COLUMN `getInfoAboutOfficers` BOOLEAN NULL,
    MODIFY `canActivateName` ENUM('panic', 'profile', 'officers', 'ncinc', 'calls', 'reports', 'forum', 'control', 'cases') NOT NULL;

-- AlterTable
ALTER TABLE `weapon` ADD COLUMN `wanted` BOOLEAN NULL DEFAULT false;

-- AlterTable
ALTER TABLE `weaponhistoryitem` MODIFY `type` ENUM('confiscated', 'bought', 'used', 'wanted') NOT NULL;

-- CreateTable
CREATE TABLE `OfficerHistoryItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `happened` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `freed` DATETIME(3) NULL,
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('award', 'dismissal', 'bonus', 'promoted', 'demoted', 'reinstated') NOT NULL,
    `officerId` INTEGER NOT NULL,

    UNIQUE INDEX `OfficerHistoryItem_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OfficerHistoryItem` ADD CONSTRAINT `OfficerHistoryItem_officerId_fkey` FOREIGN KEY (`officerId`) REFERENCES `Officer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
