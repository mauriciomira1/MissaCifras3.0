"use server";
import { prismaClient } from "@/lib/prisma";

type Props = {
  primeiraLetra: string;
};

// Obter todas as músicas do banco que iniciam pela letra passada na chamada da função
const ObterTodasAsMusicasQueIniciamCom = async ({ primeiraLetra }: Props) => {
  try {
    const musicas = await prismaClient.cifra.findMany({
      where: {
        musica: {
          startsWith: primeiraLetra.toUpperCase(),
        },
      },
    });
    console.log(musicas);
    return musicas;
  } catch (error) {
    console.log("Erro no ObterTodasAsMusicasQueIniciamCom ========>", error);
  }
};

export default ObterTodasAsMusicasQueIniciamCom;
