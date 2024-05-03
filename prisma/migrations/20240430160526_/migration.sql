/*
  Warnings:

  - You are about to drop the `ProjectExclusion` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "InclusionState" AS ENUM ('included', 'excluded');

-- DropForeignKey
ALTER TABLE "ProjectExclusion" DROP CONSTRAINT "ProjectExclusion_project_id_fkey";

-- DropForeignKey
ALTER TABLE "ProjectExclusion" DROP CONSTRAINT "ProjectExclusion_user_id_fkey";

-- DropTable
DROP TABLE "ProjectExclusion";

-- CreateTable
CREATE TABLE "ProjectInclusion" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "state" "InclusionState" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectInclusion_pkey" PRIMARY KEY ("user_id","project_id")
);

-- AddForeignKey
ALTER TABLE "ProjectInclusion" ADD CONSTRAINT "ProjectInclusion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectInclusion" ADD CONSTRAINT "ProjectInclusion_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
