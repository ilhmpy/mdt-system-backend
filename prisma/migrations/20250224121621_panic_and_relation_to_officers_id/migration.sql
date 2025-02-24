-- CreateTable
CREATE TABLE `Panic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `officerId` INTEGER NOT NULL,
    `lastUpdate` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `badgeNumber` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Panic` ADD CONSTRAINT `Panic_officerId_fkey` FOREIGN KEY (`officerId`) REFERENCES `Officer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
