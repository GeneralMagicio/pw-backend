/*
  Warnings:

  - You are about to drop the column `collection1Id` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `collection2Id` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `pickedId` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ExpertiseVote` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Nonce` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `Nonce` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Nonce` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `endsAt` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `spaceId` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `pollId` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Share` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Share` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Space` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isBadgeHolder` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserAttestation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collectionId` on the `UserAttestation` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserAttestation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserAttestation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserAttestation` table. All the data in the column will be lost.
  - The primary key for the `UserCollectionFinish` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `collectionId` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserCollectionFinish` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `pickedId` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `project1Id` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `project2Id` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collection1_id,collection2_id,user_id]` on the table `ExpertiseVote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Nonce` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[project1_id,project2_id,user_id]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collection1_id` to the `ExpertiseVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection2_id` to the `ExpertiseVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `ExpertiseVote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires_at` to the `Nonce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ends_at` to the `Poll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `space_id` to the `Poll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poll_id` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Share` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Share` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_badgeholder` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection_id` to the `UserAttestation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserAttestation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection_id` to the `UserCollectionFinish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserCollectionFinish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project1_id` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project2_id` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection1Id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection2Id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_pickedId_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_userId_fkey";

-- DropForeignKey
ALTER TABLE "Nonce" DROP CONSTRAINT "Nonce_userId_fkey";

-- DropForeignKey
ALTER TABLE "Poll" DROP CONSTRAINT "Poll_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_pollId_fkey";

-- DropForeignKey
ALTER TABLE "Share" DROP CONSTRAINT "Share_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Share" DROP CONSTRAINT "Share_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_pickedId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_project1Id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_project2Id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userId_fkey";

-- DropIndex
DROP INDEX "ExpertiseVote_collection1Id_collection2Id_userId_key";

-- DropIndex
DROP INDEX "Nonce_userId_key";

-- DropIndex
DROP INDEX "Vote_project1Id_project2Id_userId_key";

-- AlterTable
ALTER TABLE "ExpertiseVote" DROP COLUMN "collection1Id",
DROP COLUMN "collection2Id",
DROP COLUMN "createdAt",
DROP COLUMN "pickedId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "collection1_id" INTEGER NOT NULL,
ADD COLUMN     "collection2_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "picked_id" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Nonce" DROP COLUMN "createdAt",
DROP COLUMN "expiresAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expires_at" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER;

-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "createdAt",
DROP COLUMN "endsAt",
DROP COLUMN "spaceId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ends_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "space_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createdAt",
DROP COLUMN "pollId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "poll_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Share" DROP CONSTRAINT "Share_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "projectId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "project_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "Share_pkey" PRIMARY KEY ("user_id", "project_id");

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "isBadgeHolder",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_badgeholder" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserAttestation" DROP CONSTRAINT "UserAttestation_pkey",
DROP COLUMN "collectionId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "collection_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "UserAttestation_pkey" PRIMARY KEY ("user_id", "collection_id");

-- AlterTable
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_pkey",
DROP COLUMN "collectionId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "collection_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "UserCollectionFinish_pkey" PRIMARY KEY ("user_id", "collection_id");

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "createdAt",
DROP COLUMN "pickedId",
DROP COLUMN "project1Id",
DROP COLUMN "project2Id",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "picked_id" INTEGER,
ADD COLUMN     "project1_id" INTEGER NOT NULL,
ADD COLUMN     "project2_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExpertiseVote_collection1_id_collection2_id_user_id_key" ON "ExpertiseVote"("collection1_id", "collection2_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Nonce_user_id_key" ON "Nonce"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_project1_id_project2_id_user_id_key" ON "Vote"("project1_id", "project2_id", "user_id");

-- AddForeignKey
ALTER TABLE "Poll" ADD CONSTRAINT "Poll_space_id_fkey" FOREIGN KEY ("space_id") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_poll_id_fkey" FOREIGN KEY ("poll_id") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_project1_id_fkey" FOREIGN KEY ("project1_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_project2_id_fkey" FOREIGN KEY ("project2_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection1_id_fkey" FOREIGN KEY ("collection1_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection2_id_fkey" FOREIGN KEY ("collection2_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nonce" ADD CONSTRAINT "Nonce_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
