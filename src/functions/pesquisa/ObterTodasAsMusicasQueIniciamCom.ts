import { prismaClient } from "@/lib/prisma";

type Props = {
  primeiraLetra: string;
};

// Obter todas as músicas do banco que iniciam pela letra passada na chamada da função
const ObterTodasAsMusicasQueIniciamCom = async ({ primeiraLetra }: Props) => {
  const musicas = await prismaClient.cifra.findMany({
    where: {
      musica: {
        startsWith: primeiraLetra.toLowerCase(),
      },
    },
  });
  return musicas;
};

export default ObterTodasAsMusicasQueIniciamCom;
