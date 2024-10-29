-- CreateTable
CREATE TABLE "UserBudgetAttestation" (
    "user_id" INTEGER NOT NULL,
    "attestation_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserBudgetAttestation_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserBudgetAttestation_attestation_id_key" ON "UserBudgetAttestation"("attestation_id");

-- AddForeignKey
ALTER TABLE "UserBudgetAttestation" ADD CONSTRAINT "UserBudgetAttestation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
