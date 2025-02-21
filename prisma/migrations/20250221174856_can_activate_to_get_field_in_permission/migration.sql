/*
  Warnings:

  - You are about to drop the column `canActivate` on the `permission` table. All the data in the column will be lost.
  - Added the required column `get` to the `Permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `permission` DROP COLUMN `canActivate`,
    ADD COLUMN `get` BOOLEAN NOT NULL;
