import { prismaClient } from "@/lib/prisma";

import EnviarCifraComponent from "@/components/Dashboard/EnviarCifra/EnviarCifraComponent";
import { EnviarCifraContext } from "@/providers/enviarcifra";

const EnviarCifra = async () => {
  const obterArtistas = await prismaClient.artista.findMany({
    orderBy: {
      nome: "asc",
    },
  });

  return (
    <EnviarCifraComponent
    />
  );
};

export default EnviarCifra;
