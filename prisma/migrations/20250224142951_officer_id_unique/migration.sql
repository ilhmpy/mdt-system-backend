/*
  Warnings:

  - A unique constraint covering the columns `[officerId]` on the table `Panic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Panic_officerId_key` ON `Panic`(`officerId`);
