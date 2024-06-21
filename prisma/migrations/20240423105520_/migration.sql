/*
  Warnings:

  - The values [composite_project] on the enum `ProjectType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `collection1_id` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `collection2_id` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `picked_id` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Nonce` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `Nonce` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Nonce` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `ends_at` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `space_id` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `poll_id` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Share` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserAttestation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collection_id` on the `UserAttestation` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `UserAttestation` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `UserAttestation` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserAttestation` table. All the data in the column will be lost.
  - The primary key for the `UserCollectionFinish` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collection_id` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `picked_id` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `project1_id` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `project2_id` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collection1Id,collection2Id,userId]` on the table `ExpertiseVote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Nonce` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[project1Id,project2Id,userId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collection1Id` to the `ExpertiseVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection2Id` to the `ExpertiseVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ExpertiseVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `Nonce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endsAt` to the `Poll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spaceId` to the `Poll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pollId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Share` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Share` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collectionId` to the `UserAttestation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserAttestation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collectionId` to the `UserCollectionFinish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserCollectionFinish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project1Id` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project2Id` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectType_new" AS ENUM ('collection', 'compositeProject', 'project');
ALTER TABLE "Project" ALTER COLUMN "type" TYPE "ProjectType_new" USING ("type"::text::"ProjectType_new");
ALTER TYPE "ProjectType" RENAME TO "ProjectType_old";
ALTER TYPE "ProjectType_new" RENAME TO "ProjectType";
DROP TYPE "ProjectType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection1_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection2_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Nonce" DROP CONSTRAINT "Nonce_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Poll" DROP CONSTRAINT "Poll_space_id_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_poll_id_fkey";

-- DropForeignKey
ALTER TABLE "Share" DROP CONSTRAINT "Share_project_id_fkey";

-- DropForeignKey
ALTER TABLE "Share" DROP CONSTRAINT "Share_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_project1_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_project2_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_user_id_fkey";

-- DropIndex
DROP INDEX "ExpertiseVote_collection1_id_collection2_id_user_id_key";

-- DropIndex
DROP INDEX "Nonce_user_id_key";

-- DropIndex
DROP INDEX "Vote_project1_id_project2_id_user_id_key";

-- AlterTable
ALTER TABLE "ExpertiseVote" DROP COLUMN "collection1_id",
DROP COLUMN "collection2_id",
DROP COLUMN "created_at",
DROP COLUMN "picked_id",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "collection1Id" INTEGER NOT NULL,
ADD COLUMN     "collection2Id" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pickedId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Nonce" DROP COLUMN "created_at",
DROP COLUMN "expires_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "created_at",
DROP COLUMN "ends_at",
DROP COLUMN "space_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "spaceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "created_at",
DROP COLUMN "poll_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pollId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Share" DROP CONSTRAINT "Share_pkey",
DROP COLUMN "created_at",
DROP COLUMN "project_id",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Share_pkey" PRIMARY KEY ("userId", "projectId");

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_pkey",
DROP COLUMN "collection_id",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "collectionId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserAttestation_pkey" PRIMARY KEY ("userId", "collectionId");

-- AlterTable
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_pkey",
DROP COLUMN "collection_id",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "collectionId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserCollectionFinish_pkey" PRIMARY KEY ("userId", "collectionId");

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "created_at",
DROP COLUMN "picked_id",
DROP COLUMN "project1_id",
DROP COLUMN "project2_id",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pickedId" INTEGER,
ADD COLUMN     "project1Id" INTEGER NOT NULL,
ADD COLUMN     "project2Id" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExpertiseVote_collection1Id_collection2Id_userId_key" ON "ExpertiseVote"("collection1Id", "collection2Id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Nonce_userId_key" ON "Nonce"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_project1Id_project2Id_userId_key" ON "Vote"("project1Id", "project2Id", "userId");

-- AddForeignKey
ALTER TABLE "Poll" ADD CONSTRAINT "Poll_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_project1Id_fkey" FOREIGN KEY ("project1Id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_project2Id_fkey" FOREIGN KEY ("project2Id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_pickedId_fkey" FOREIGN KEY ("pickedId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection1Id_fkey" FOREIGN KEY ("collection1Id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection2Id_fkey" FOREIGN KEY ("collection2Id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_pickedId_fkey" FOREIGN KEY ("pickedId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nonce" ADD CONSTRAINT "Nonce_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
