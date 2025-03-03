/*
  Warnings:

  - Made the column `thankYouCastSent` on table `FarcasterConnection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FarcasterConnection" ALTER COLUMN "thankYouCastSent" SET NOT NULL;

-- CreateTable
CREATE TABLE "TwitterConnection" (
    "user_id" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thankYouCastSent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TwitterConnection_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "TwitterConnection" ADD CONSTRAINT "TwitterConnection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
