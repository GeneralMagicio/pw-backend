/*
  Warnings:

  - The values [compositeProject] on the enum `ProjectType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `rpgf4_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `is_badgeholder` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Rank` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[smartaddress]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectType_new" AS ENUM ('collection', 'project');
ALTER TABLE "Project" ALTER COLUMN "type" TYPE "ProjectType_new" USING ("type"::text::"ProjectType_new");
ALTER TYPE "ProjectType" RENAME TO "ProjectType_old";
ALTER TYPE "ProjectType_new" RENAME TO "ProjectType";
DROP TYPE "ProjectType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_project_id_fkey";

-- DropForeignKey
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_user_id_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "rpgf4_id",
ADD COLUMN     "rf6_id" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_badgeholder",
ADD COLUMN     "budget" INTEGER NOT NULL DEFAULT 2000000,
ADD COLUMN     "smartaddress" TEXT;

-- DropTable
DROP TABLE "Rank";

-- CreateTable
CREATE TABLE "Share" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "share" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("user_id","project_id")
);

-- CreateTable
CREATE TABLE "FarcasterConnection" (
    "user_id" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FarcasterConnection_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "WorldIdConnection" (
    "user_id" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WorldIdConnection_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserAttestation" (
    "user_id" INTEGER NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAttestation_pkey" PRIMARY KEY ("user_id","collection_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_smartaddress_key" ON "User"("smartaddress");

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarcasterConnection" ADD CONSTRAINT "FarcasterConnection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorldIdConnection" ADD CONSTRAINT "WorldIdConnection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
