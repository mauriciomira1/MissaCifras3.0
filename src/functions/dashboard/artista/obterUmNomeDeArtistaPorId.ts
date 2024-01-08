"use server";
import { prismaClient } from "@/lib/prisma";

const obterUmNomeDeArtistaPorId = async (id: string) => {
  const artista = await prismaClient.artista.findFirst({
    where: {
      id,
    },
  });
  return artista?.nome;
};

export default obterUmNomeDeArtistaPorId;
