/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Officer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `Officer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Officer_name_key` ON `Officer`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Officer_token_key` ON `Officer`(`token`);
