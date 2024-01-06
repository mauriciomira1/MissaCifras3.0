"use server";
import { prismaClient } from "@/lib/prisma";

const postNovoArtista = async (artista: string) => {
  // Remove acentos, substitui espaço por traço e coloca tudo em minúsculo
  const slug = artista
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ /g, "-");

  const novoArtista = await prismaClient.artista.create({
    data: {
      nome: artista,
      slug,
      qtdDeCliques: 0,
    },
  });
  return novoArtista;
};

export default postNovoArtista;
