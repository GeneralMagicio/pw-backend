-- CreateTable
CREATE TABLE "UserAttestation" (
    "user_id" INTEGER NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAttestation_pkey" PRIMARY KEY ("user_id","collection_id")
);

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAttestation" ADD CONSTRAINT "UserAttestation_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
