/*
  Warnings:

  - You are about to drop the `Otp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectInclusion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserAttestation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCollectionFiltered` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Otp" DROP CONSTRAINT "Otp_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectInclusion" DROP CONSTRAINT "ProjectInclusion_project_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectInclusion" DROP CONSTRAINT "ProjectInclusion_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFiltered" DROP CONSTRAINT "UserCollectionFiltered_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFiltered" DROP CONSTRAINT "UserCollectionFiltered_user_id_fkey";

-- DropTable
DROP TABLE "Otp";

-- DropTable
DROP TABLE "ProjectInclusion";

-- DropTable
DROP TABLE "UserAttestation";

-- DropTable
DROP TABLE "UserCollectionFiltered";

-- DropEnum
DROP TYPE "InclusionState";

-- CreateTable
CREATE TABLE "ProjectStar" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "star" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectStar_pkey" PRIMARY KEY ("user_id","project_id")
);

-- AddForeignKey
ALTER TABLE "ProjectStar" ADD CONSTRAINT "ProjectStar_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectStar" ADD CONSTRAINT "ProjectStar_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
