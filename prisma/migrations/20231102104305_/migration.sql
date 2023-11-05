/*
  Warnings:

  - You are about to drop the column `description` on the `Project` table. All the data in the column will be lost.
  - Added the required column `impactDescription` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "description",
ADD COLUMN     "contributionDescription" TEXT,
ADD COLUMN     "impactDescription" TEXT NOT NULL;
