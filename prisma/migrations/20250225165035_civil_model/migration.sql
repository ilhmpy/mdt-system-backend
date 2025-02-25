-- CreateTable
CREATE TABLE `CivilHistoryItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `happened` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `freed` DATETIME(3) NULL,
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('fine', 'prisonTerm', 'jailTerm', 'deprDrivingLicense', 'deprGunLicense') NOT NULL,
    `civilId` INTEGER NOT NULL,

    UNIQUE INDEX `CivilHistoryItem_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarHistoryItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `happened` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('confiscated', 'fined', 'stoped', 'selled', 'wanted') NOT NULL,
    `carId` INTEGER NOT NULL,

    UNIQUE INDEX `CarHistoryItem_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeaponHistoryItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `happened` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('confiscated', 'fined', 'stoped', 'selled', 'wanted') NOT NULL,
    `civilId` INTEGER NOT NULL,

    UNIQUE INDEX `WeaponHistoryItem_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand` VARCHAR(191) NOT NULL,
    `plate` VARCHAR(191) NOT NULL,
    `civilId` INTEGER NOT NULL,

    UNIQUE INDEX `Car_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Weapon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serial` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `civilId` INTEGER NOT NULL,

    UNIQUE INDEX `Weapon_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Civil` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `idCard` VARCHAR(191) NOT NULL,
    `gunLicense` BOOLEAN NOT NULL,
    `drivingLicense` BOOLEAN NOT NULL,
    `workPlace` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Civil_id_key`(`id`),
    UNIQUE INDEX `Civil_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CivilHistoryItem` ADD CONSTRAINT `CivilHistoryItem_civilId_fkey` FOREIGN KEY (`civilId`) REFERENCES `Civil`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarHistoryItem` ADD CONSTRAINT `CarHistoryItem_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeaponHistoryItem` ADD CONSTRAINT `WeaponHistoryItem_civilId_fkey` FOREIGN KEY (`civilId`) REFERENCES `Weapon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_civilId_fkey` FOREIGN KEY (`civilId`) REFERENCES `Civil`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Weapon` ADD CONSTRAINT `Weapon_civilId_fkey` FOREIGN KEY (`civilId`) REFERENCES `Civil`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
