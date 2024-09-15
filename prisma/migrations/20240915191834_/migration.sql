-- CreateTable
CREATE TABLE "ProjectCoI" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectCoI_pkey" PRIMARY KEY ("user_id","project_id")
);

-- AddForeignKey
ALTER TABLE "ProjectCoI" ADD CONSTRAINT "ProjectCoI_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectCoI" ADD CONSTRAINT "ProjectCoI_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
