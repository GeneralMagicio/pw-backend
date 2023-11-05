-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "metadataUrl" TEXT,
ALTER COLUMN "url" DROP NOT NULL;
