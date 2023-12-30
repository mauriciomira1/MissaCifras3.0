import { prismaClient } from "@/lib/prisma";

import EnviarCifraComponent from "@/components/Dashboard/EnviarCifra/EnviarCifraComponent";

const EnviarCifra = async () => {
  const obterArtistas = await prismaClient.artista.findMany({
    orderBy: {
      nome: "asc",
    },
  });

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

  return (
    <EnviarCifraComponent
      listaDeArtistas={obterArtistas}
      criarNovoArtista={criarNovoArtista}
    />
  );
};

export default EnviarCifra;
