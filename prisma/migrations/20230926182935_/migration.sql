-- CreateTable
CREATE TABLE "EditedRanking" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "ranking" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EditedRanking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EditedRanking_user_id_key" ON "EditedRanking"("user_id");

-- AddForeignKey
ALTER TABLE "EditedRanking" ADD CONSTRAINT "EditedRanking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
