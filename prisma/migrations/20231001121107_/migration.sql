-- CreateTable
CREATE TABLE "SubProject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "project_id" INTEGER NOT NULL,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubProjectVote" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "subProject1Id" INTEGER NOT NULL,
    "subProject2Id" INTEGER NOT NULL,
    "picked_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubProjectVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubProjectVote_subProject1Id_subProject2Id_user_id_key" ON "SubProjectVote"("subProject1Id", "subProject2Id", "user_id");

-- AddForeignKey
ALTER TABLE "SubProject" ADD CONSTRAINT "SubProject_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubProjectVote" ADD CONSTRAINT "SubProjectVote_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubProjectVote" ADD CONSTRAINT "SubProjectVote_subProject1Id_fkey" FOREIGN KEY ("subProject1Id") REFERENCES "SubProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubProjectVote" ADD CONSTRAINT "SubProjectVote_subProject2Id_fkey" FOREIGN KEY ("subProject2Id") REFERENCES "SubProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubProjectVote" ADD CONSTRAINT "SubProjectVote_picked_id_fkey" FOREIGN KEY ("picked_id") REFERENCES "SubProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
