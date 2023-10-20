/*
  Warnings:

  - You are about to drop the column `collection_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CollectionVote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectVote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Result` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubProjectVote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCompositeProjectFinish` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `poll_id` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('collection', 'composite_project', 'project');

-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_parent_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_poll_id_fkey";

-- DropForeignKey
ALTER TABLE "CollectionVote" DROP CONSTRAINT "CollectionVote_collection1_id_fkey";

-- DropForeignKey
ALTER TABLE "CollectionVote" DROP CONSTRAINT "CollectionVote_collection2_id_fkey";

-- DropForeignKey
ALTER TABLE "CollectionVote" DROP CONSTRAINT "CollectionVote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "CollectionVote" DROP CONSTRAINT "CollectionVote_user_id_fkey";

-- DropForeignKey
ALTER TABLE "EditedRanking" DROP CONSTRAINT "EditedRanking_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection1_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_collection2_id_fkey";

-- DropForeignKey
ALTER TABLE "ExpertiseVote" DROP CONSTRAINT "ExpertiseVote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectVote" DROP CONSTRAINT "ProjectVote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectVote" DROP CONSTRAINT "ProjectVote_project1_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectVote" DROP CONSTRAINT "ProjectVote_project2_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectVote" DROP CONSTRAINT "ProjectVote_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "Result_project_id_fkey";

-- DropForeignKey
ALTER TABLE "Result" DROP CONSTRAINT "Result_user_id_fkey";

-- DropForeignKey
ALTER TABLE "SubProject" DROP CONSTRAINT "SubProject_project_id_fkey";

-- DropForeignKey
ALTER TABLE "SubProjectVote" DROP CONSTRAINT "SubProjectVote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "SubProjectVote" DROP CONSTRAINT "SubProjectVote_subProject1Id_fkey";

-- DropForeignKey
ALTER TABLE "SubProjectVote" DROP CONSTRAINT "SubProjectVote_subProject2Id_fkey";

-- DropForeignKey
ALTER TABLE "SubProjectVote" DROP CONSTRAINT "SubProjectVote_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCollectionFinish" DROP CONSTRAINT "UserCollectionFinish_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCompositeProjectFinish" DROP CONSTRAINT "UserCompositeProjectFinish_project_id_fkey";

-- DropForeignKey
ALTER TABLE "UserCompositeProjectFinish" DROP CONSTRAINT "UserCompositeProjectFinish_user_id_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "collection_id",
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "poll_id" INTEGER NOT NULL,
ADD COLUMN     "type" "ProjectType" NOT NULL;

-- DropTable
DROP TABLE "Collection";

-- DropTable
DROP TABLE "CollectionVote";

-- DropTable
DROP TABLE "ProjectVote";

-- DropTable
DROP TABLE "Result";

-- DropTable
DROP TABLE "SubProject";

-- DropTable
DROP TABLE "SubProjectVote";

-- DropTable
DROP TABLE "UserCompositeProjectFinish";

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project1_id" INTEGER NOT NULL,
    "project2_id" INTEGER NOT NULL,
    "picked_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vote_project1_id_project2_id_user_id_key" ON "Vote"("project1_id", "project2_id", "user_id");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection1_id_fkey" FOREIGN KEY ("collection1_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection2_id_fkey" FOREIGN KEY ("collection2_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditedRanking" ADD CONSTRAINT "EditedRanking_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
