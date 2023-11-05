/*
  Warnings:

  - The primary key for the `Share` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Share` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Share_user_id_project_id_key";

-- AlterTable
ALTER TABLE "Share" DROP CONSTRAINT "Share_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Share_pkey" PRIMARY KEY ("user_id", "project_id");
