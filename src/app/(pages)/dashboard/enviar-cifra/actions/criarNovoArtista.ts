import { prismaClient } from "@/lib/prisma";

const criarNovoArtista = async (artista: string) => {
  "use server";
  const novoArtista = await prismaClient.artista.create({
    data: {
      nome: artista,
      qtdDeCliques: 0,
    },
  });
  return novoArtista;
};

export default criarNovoArtista;
