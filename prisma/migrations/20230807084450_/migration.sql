/*
  Warnings:

  - You are about to drop the `Vote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_collection1_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_collection2_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_picked_id_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_user_id_fkey";

-- DropTable
DROP TABLE "Vote";

-- CreateTable
CREATE TABLE "CollectionVote" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "collection1_id" INTEGER NOT NULL,
    "collection2_id" INTEGER NOT NULL,
    "picked_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CollectionVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectVote" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project1_id" INTEGER NOT NULL,
    "project2_id" INTEGER NOT NULL,
    "picked_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CollectionVote_collection1_id_collection2_id_user_id_key" ON "CollectionVote"("collection1_id", "collection2_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectVote_project1_id_project2_id_user_id_key" ON "ProjectVote"("project1_id", "project2_id", "user_id");

-- AddForeignKey
ALTER TABLE "CollectionVote" ADD CONSTRAINT "CollectionVote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionVote" ADD CONSTRAINT "CollectionVote_collection1_id_fkey" FOREIGN KEY ("collection1_id") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionVote" ADD CONSTRAINT "CollectionVote_collection2_id_fkey" FOREIGN KEY ("collection2_id") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionVote" ADD CONSTRAINT "CollectionVote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectVote" ADD CONSTRAINT "ProjectVote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectVote" ADD CONSTRAINT "ProjectVote_project1_id_fkey" FOREIGN KEY ("project1_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectVote" ADD CONSTRAINT "ProjectVote_project2_id_fkey" FOREIGN KEY ("project2_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectVote" ADD CONSTRAINT "ProjectVote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
