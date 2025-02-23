-- AlterTable
ALTER TABLE `permission` MODIFY `canActivateName` ENUM('panic', 'profile', 'officers', 'ncinc', 'calls', 'reports', 'forum', 'control') NOT NULL;
