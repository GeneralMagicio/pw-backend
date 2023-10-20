/*
  Warnings:

  - You are about to drop the `EditedRanking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EditedRanking" DROP CONSTRAINT "EditedRanking_collection_id_fkey";

-- DropForeignKey
ALTER TABLE "EditedRanking" DROP CONSTRAINT "EditedRanking_user_id_fkey";

-- DropTable
DROP TABLE "EditedRanking";

-- CreateTable
CREATE TABLE "Share" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "share" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Share_user_id_project_id_key" ON "Share"("user_id", "project_id");

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
