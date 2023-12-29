"use server";

import { prismaClient } from "@/lib/prisma";

import EnviarCifraComponent from "@/components/Dashboard/EnviarCifra/EnviarCifraComponent";

const EnviarCifra = async () => {
  const obterArtistas = await prismaClient.artista.findMany({
    orderBy: {
      nome: "asc",
    },
  });

  const lidarComNovoArtista = async (artista: string) => {
    const novoArtista = await prismaClient.artista.create({
      data: {
        nome: artista,
        qtdDeCliques: 0,
      },
    });
    return novoArtista;
  };

  let artistaAtual = "";

  const novoArtista = await lidarComNovoArtista(artistaAtual);

  return (
    <EnviarCifraComponent
      listaDeArtistas={obterArtistas}
      criarNovoArtista={novoArtista}
    />
  );
};

export default EnviarCifra;
