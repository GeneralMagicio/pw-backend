/*
  Warnings:

  - A unique constraint covering the columns `[attestation_id]` on the table `UserAttestation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `attestation_id` to the `UserAttestation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAttestation" ADD COLUMN     "attestation_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserAttestation_attestation_id_key" ON "UserAttestation"("attestation_id");
