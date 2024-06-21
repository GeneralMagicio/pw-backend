-- CreateTable
CREATE TABLE "ProjectExclusion" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectExclusion_pkey" PRIMARY KEY ("user_id","project_id")
);

-- CreateTable
CREATE TABLE "UserCollectionFiltered" (
    "user_id" INTEGER NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCollectionFiltered_pkey" PRIMARY KEY ("user_id","collection_id")
);

-- AddForeignKey
ALTER TABLE "ProjectExclusion" ADD CONSTRAINT "ProjectExclusion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectExclusion" ADD CONSTRAINT "ProjectExclusion_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFiltered" ADD CONSTRAINT "UserCollectionFiltered_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollectionFiltered" ADD CONSTRAINT "UserCollectionFiltered_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
