-- CreateEnum
CREATE TYPE "DelegationPlatform" AS ENUM ('FARCASTER', 'TWITTER');

-- CreateTable
CREATE TABLE "CollectionDelegation" (
    "user_id" INTEGER NOT NULL,
    "collection_id" INTEGER NOT NULL,
    "platform" "DelegationPlatform" NOT NULL,
    "target" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CollectionDelegation_pkey" PRIMARY KEY ("user_id","collection_id")
);

-- CreateTable
CREATE TABLE "BudgetDelegation" (
    "user_id" INTEGER NOT NULL,
    "platform" "DelegationPlatform" NOT NULL,
    "target" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BudgetDelegation_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "CollectionDelegation" ADD CONSTRAINT "CollectionDelegation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionDelegation" ADD CONSTRAINT "CollectionDelegation_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetDelegation" ADD CONSTRAINT "BudgetDelegation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
