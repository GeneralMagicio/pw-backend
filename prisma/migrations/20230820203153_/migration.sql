-- CreateTable
CREATE TABLE "ExpertiseVote" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "collection1_id" INTEGER NOT NULL,
    "collection2_id" INTEGER NOT NULL,
    "picked_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExpertiseVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExpertiseVote_collection1_id_collection2_id_user_id_key" ON "ExpertiseVote"("collection1_id", "collection2_id", "user_id");

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection1_id_fkey" FOREIGN KEY ("collection1_id") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_collection2_id_fkey" FOREIGN KEY ("collection2_id") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertiseVote" ADD CONSTRAINT "ExpertiseVote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
