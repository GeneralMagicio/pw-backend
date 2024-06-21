/*
  Warnings:

  - You are about to drop the column `RPGF3Id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `contributionDescription` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `impactDescription` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `metadataUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `impact_description` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_parentId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "RPGF3Id",
DROP COLUMN "contributionDescription",
DROP COLUMN "impactDescription",
DROP COLUMN "metadataUrl",
DROP COLUMN "parentId",
ADD COLUMN     "contribution_description" TEXT,
ADD COLUMN     "impact_description" TEXT NOT NULL,
ADD COLUMN     "metadata_url" TEXT,
ADD COLUMN     "parent_id" INTEGER,
ADD COLUMN     "rpgf4_id" TEXT;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
