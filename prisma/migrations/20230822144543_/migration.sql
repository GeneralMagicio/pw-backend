-- CreateTable
CREATE TABLE "UserCollectionFinish" (
    "user_id" INTEGER NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCollectionFinish_pkey" PRIMARY KEY ("user_id","collection_id")
);

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFinish" ADD CONSTRAINT "UserCollectionFinish_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
