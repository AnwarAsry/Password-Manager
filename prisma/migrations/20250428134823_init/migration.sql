/*
  Warnings:

  - Made the column `password` on table `StoredCredential` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "StoredCredential" ALTER COLUMN "password" SET NOT NULL;
