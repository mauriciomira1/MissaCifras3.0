/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Colaboracoes" TEXT[],
ADD COLUMN     "email" TEXT,
ADD COLUMN     "foto" TEXT,
ADD COLUMN     "nome" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
