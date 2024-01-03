"use server";
import { prismaClient } from "@/lib/prisma";

const obterUmArtista = async (nomeDoArtista: string) => {
  const lista = await prismaClient.artista.findFirst({
    where: {
      nome: nomeDoArtista,
    },
  });
  return lista;
};

export default obterUmArtista;
