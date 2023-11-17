/*
  Warnings:

  - You are about to drop the column `index` on the `ChordsList` table. All the data in the column will be lost.
  - You are about to drop the column `momentoDaMissa` on the `Cifra` table. All the data in the column will be lost.
  - You are about to drop the `PlaylistCifra` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cifra` to the `Cifra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Cifra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cifraId` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlaylistCifra" DROP CONSTRAINT "PlaylistCifra_cifraId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistCifra" DROP CONSTRAINT "PlaylistCifra_playlistId_fkey";

-- AlterTable
ALTER TABLE "ChordsList" DROP COLUMN "index";

-- AlterTable
ALTER TABLE "Cifra" DROP COLUMN "momentoDaMissa",
ADD COLUMN     "cifra" TEXT NOT NULL,
ADD COLUMN     "classificacao" TEXT[],
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "cifraId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "foto" TEXT NOT NULL;

-- DropTable
DROP TABLE "PlaylistCifra";

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_cifraId_fkey" FOREIGN KEY ("cifraId") REFERENCES "Cifra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
