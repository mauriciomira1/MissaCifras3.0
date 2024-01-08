"use server";
import { prismaClient } from "@/lib/prisma";

const obterUmArtista = async (nomeDoArtista: string) => {
  const artista = await prismaClient.artista.findFirst({
    where: {
      nome: nomeDoArtista,
    },
  });
  return artista;
};

export default obterUmArtista;
