"use server";
import { prismaClient } from "@/lib/prisma";
import { z } from "zod";

const zodSchema = {};

const criarNovoArtista = async (artista: string) => {
  const slugName = artista.toString().toLowerCase().replace(" ", "-");

  const novoArtista = await prismaClient.artista.create({
    data: {
      nome: artista,
      slug: slugName,
      qtdDeCliques: 0,
    },
  });
  return novoArtista;
};

export default criarNovoArtista;
