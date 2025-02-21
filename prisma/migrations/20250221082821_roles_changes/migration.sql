/*
  Warnings:

  - Added the required column `canActivateName` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `permission` ADD COLUMN `canActivateName` ENUM('PROFILE', 'OFFICERS', 'NCINC', 'CALLS', 'REPORTS', 'FORUM', 'CONTROL') NOT NULL,
    ADD COLUMN `update` BOOLEAN NULL;
