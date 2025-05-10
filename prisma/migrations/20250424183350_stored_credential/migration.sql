-- CreateTable
CREATE TABLE "StoredCredential" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "image" TEXT,
    "platform" TEXT NOT NULL,
    "linkUrl" TEXT,
    "password" TEXT,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "category" TEXT[],
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoredCredential_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StoredCredential" ADD CONSTRAINT "StoredCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
