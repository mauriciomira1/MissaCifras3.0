/*
  Warnings:

  - You are about to drop the column `artistas` on the `Cifra` table. All the data in the column will be lost.
  - Added the required column `artista` to the `Cifra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cifra" DROP COLUMN "artistas",
ADD COLUMN     "artista" TEXT NOT NULL,
ADD COLUMN     "participacao" TEXT[];
