-- CreateTable
CREATE TABLE "ChordsList" (
    "id" TEXT NOT NULL,
    "acorde" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "cifraId" TEXT,

    CONSTRAINT "ChordsList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artista" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "qtdDeCliques" INTEGER NOT NULL,
    "capa" TEXT NOT NULL,

    CONSTRAINT "Artista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cifra" (
    "id" TEXT NOT NULL,
    "musica" TEXT NOT NULL,
    "versao" TEXT,
    "compositor" TEXT,
    "tom" TEXT NOT NULL,
    "bpm" INTEGER,
    "video" TEXT,
    "letra" TEXT NOT NULL,
    "thumbnail" TEXT,
    "hashtags" TEXT[],
    "momentoDaMissa" TEXT[],
    "liturgica" BOOLEAN NOT NULL,
    "qtdDeCliques" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cifra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtistaCifra" (
    "artistaId" TEXT NOT NULL,
    "cifraId" TEXT NOT NULL,

    CONSTRAINT "ArtistaCifra_pkey" PRIMARY KEY ("artistaId","cifraId")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistCifra" (
    "playlistId" TEXT NOT NULL,
    "cifraId" TEXT NOT NULL,

    CONSTRAINT "PlaylistCifra_pkey" PRIMARY KEY ("playlistId","cifraId")
);

-- AddForeignKey
ALTER TABLE "ChordsList" ADD CONSTRAINT "ChordsList_cifraId_fkey" FOREIGN KEY ("cifraId") REFERENCES "Cifra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cifra" ADD CONSTRAINT "Cifra_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistaCifra" ADD CONSTRAINT "ArtistaCifra_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "Artista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistaCifra" ADD CONSTRAINT "ArtistaCifra_cifraId_fkey" FOREIGN KEY ("cifraId") REFERENCES "Cifra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistCifra" ADD CONSTRAINT "PlaylistCifra_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistCifra" ADD CONSTRAINT "PlaylistCifra_cifraId_fkey" FOREIGN KEY ("cifraId") REFERENCES "Cifra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
