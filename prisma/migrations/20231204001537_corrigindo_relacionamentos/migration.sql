/*
  Warnings:

  - You are about to drop the column `cifraId` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the `ArtistaCifra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChordsList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ArtistaCifra" DROP CONSTRAINT "ArtistaCifra_artistaId_fkey";

-- DropForeignKey
ALTER TABLE "ArtistaCifra" DROP CONSTRAINT "ArtistaCifra_cifraId_fkey";

-- DropForeignKey
ALTER TABLE "ChordsList" DROP CONSTRAINT "ChordsList_cifraId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_cifraId_fkey";

-- AlterTable
ALTER TABLE "Cifra" ADD COLUMN     "acordes" TEXT[];

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "cifraId";

-- DropTable
DROP TABLE "ArtistaCifra";

-- DropTable
DROP TABLE "ChordsList";

-- CreateTable
CREATE TABLE "_ArtistaToCifra" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CifraToPlaylist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistaToCifra_AB_unique" ON "_ArtistaToCifra"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistaToCifra_B_index" ON "_ArtistaToCifra"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CifraToPlaylist_AB_unique" ON "_CifraToPlaylist"("A", "B");

-- CreateIndex
CREATE INDEX "_CifraToPlaylist_B_index" ON "_CifraToPlaylist"("B");

-- AddForeignKey
ALTER TABLE "_ArtistaToCifra" ADD CONSTRAINT "_ArtistaToCifra_A_fkey" FOREIGN KEY ("A") REFERENCES "Artista"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistaToCifra" ADD CONSTRAINT "_ArtistaToCifra_B_fkey" FOREIGN KEY ("B") REFERENCES "Cifra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CifraToPlaylist" ADD CONSTRAINT "_CifraToPlaylist_A_fkey" FOREIGN KEY ("A") REFERENCES "Cifra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CifraToPlaylist" ADD CONSTRAINT "_CifraToPlaylist_B_fkey" FOREIGN KEY ("B") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
