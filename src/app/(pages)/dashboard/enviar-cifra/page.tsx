import { prismaClient } from "@/lib/prisma";

import EnviarCifraComponent from "@/components/Dashboard/EnviarCifra/EnviarCifraComponent";

const EnviarCifra = async () => {
  const obterArtistas = await prismaClient.artista.findMany({
    orderBy: {
      nome: "asc",
    },
  });

  return <EnviarCifraComponent listaDeArtistas={obterArtistas} />;
};

export default EnviarCifra;
