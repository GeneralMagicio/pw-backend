/*
  Warnings:

  - You are about to drop the column `contribution_description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `impact_description` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `metadata_url` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `metrics_project_id` on the `Project` table. All the data in the column will be lost.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "contribution_description",
DROP COLUMN "impact_description",
DROP COLUMN "metadata_url",
DROP COLUMN "metrics_project_id",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "metadata" TEXT NOT NULL;
