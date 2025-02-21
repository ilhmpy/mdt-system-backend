/*
  Warnings:

  - The values [TRUE,FALSE] on the enum `Officer_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [PROFILE,OFFICERS,NCINC,CALLS,REPORTS,FORUM,CONTROL] on the enum `Permission_canActivateName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `officer` MODIFY `status` ENUM('true', 'false', 'OS') NULL;

-- AlterTable
ALTER TABLE `permission` MODIFY `canActivateName` ENUM('profile', 'officers', 'ncinc', 'calls', 'reports', 'forum', 'control') NOT NULL;
