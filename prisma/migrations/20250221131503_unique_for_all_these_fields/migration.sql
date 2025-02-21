/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Marking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[label]` on the table `Marking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[marking]` on the table `Marking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Rank` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Shift` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Marking_id_key` ON `Marking`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Marking_label_key` ON `Marking`(`label`);

-- CreateIndex
CREATE UNIQUE INDEX `Marking_marking_key` ON `Marking`(`marking`);

-- CreateIndex
CREATE UNIQUE INDEX `Rank_name_key` ON `Rank`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Shift_id_key` ON `Shift`(`id`);
