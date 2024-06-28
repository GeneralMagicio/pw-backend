/*
  Warnings:

  - You are about to drop the `ExpertiseVote` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[op_address]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection1_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection2_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_user_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "op_address" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ExpertiseVote";

-- CreateIndex
CREATE UNIQUE INDEX "User_op_address_key" ON "User"("op_address");
