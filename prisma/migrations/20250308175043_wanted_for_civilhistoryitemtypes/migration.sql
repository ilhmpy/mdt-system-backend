-- AlterTable
ALTER TABLE `civilhistoryitem` MODIFY `type` ENUM('fine', 'prisonTerm', 'jailTerm', 'deprDrivingLicense', 'deprGunLicense', 'wanted') NOT NULL;
