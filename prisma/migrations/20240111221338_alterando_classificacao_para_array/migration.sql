/*
  Warnings:

  - The `classificacao` column on the `Cifra` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cifra" DROP COLUMN "classificacao",
ADD COLUMN     "classificacao" TEXT[];
