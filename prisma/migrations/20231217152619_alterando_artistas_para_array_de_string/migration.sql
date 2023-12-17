/*
  Warnings:

  - You are about to drop the `_ArtistaToCifra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ArtistaToCifra" DROP CONSTRAINT "_ArtistaToCifra_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArtistaToCifra" DROP CONSTRAINT "_ArtistaToCifra_B_fkey";

-- AlterTable
ALTER TABLE "Cifra" ADD COLUMN     "artistaId" TEXT,
ADD COLUMN     "artistas" TEXT[];

-- DropTable
DROP TABLE "_ArtistaToCifra";

-- AddForeignKey
ALTER TABLE "Cifra" ADD CONSTRAINT "Cifra_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "Artista"("id") ON DELETE SET NULL ON UPDATE CASCADE;
