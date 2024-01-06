"use server";
import { prismaClient } from "@/lib/prisma";

const GetObterArtistas = async () => {
  const lista = await prismaClient.artista.findMany({
    orderBy: {
      nome: "asc",
    },
  });
  return lista;
};

export default GetObterArtistas;
