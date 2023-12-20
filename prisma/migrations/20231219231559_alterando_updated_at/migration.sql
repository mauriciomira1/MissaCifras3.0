/*
  Warnings:

  - You are about to drop the column `foto` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Artista" ALTER COLUMN "capa" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Cifra" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Playlist" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "foto",
DROP COLUMN "nome",
ALTER COLUMN "createdAt" DROP NOT NULL;
