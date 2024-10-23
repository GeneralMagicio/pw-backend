/*
  Warnings:

  - Added the required column `metadata` to the `BudgetDelegation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `CollectionDelegation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BudgetDelegation" ADD COLUMN     "metadata" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "CollectionDelegation" ADD COLUMN     "metadata" JSONB NOT NULL;
