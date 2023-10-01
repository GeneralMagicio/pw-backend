/*
  Warnings:

  - A unique constraint covering the columns `[user_id,collection_id]` on the table `EditedRanking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "EditedRanking_user_id_key";

-- AlterTable
ALTER TABLE "EditedRanking" ADD COLUMN     "collection_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "EditedRanking_user_id_collection_id_key" ON "EditedRanking"("user_id", "collection_id");

-- AddForeignKey
ALTER TABLE "EditedRanking" ADD CONSTRAINT "EditedRanking_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
