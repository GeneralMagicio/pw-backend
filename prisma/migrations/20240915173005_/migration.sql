/*
  Warnings:

  - The primary key for the `ProjectStar` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ProjectStar" DROP CONSTRAINT "ProjectStar_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProjectStar_pkey" PRIMARY KEY ("id");
