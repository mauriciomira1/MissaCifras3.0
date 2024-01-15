"use server";
import { prismaClient } from "@/lib/prisma";

type Props = {
  textoDePesquisa: string;
};

// Obter todas as músicas do banco que iniciam pela letra passada na chamada da função
const ObterTodasAsMusicasContenha = async ({ textoDePesquisa }: Props) => {
  try {
    const musicas = await prismaClient.cifra.findMany({
      where: {
        musica: {
          contains: textoDePesquisa.toUpperCase(),
        },
      },
    });
    console.log(musicas);
    return musicas;
  } catch (error) {
    console.log("Erro no ObterTodasAsMusicasContenha ========>", error);
  }
};

export default ObterTodasAsMusicasContenha;
