"use server";

import { prismaClient } from "@/lib/prisma";
const ObterCifraAPartirDeSlug = async (slug: string) => {
  try {
    const fetchCifra = await prismaClient.cifra.findFirst({
      where: {
        slug,
      },
    });

    return fetchCifra;
  } catch (error) {
    console.log("Erro no ObterCifraAPartirDeSlug =====> ", error);
  }
};
export default ObterCifraAPartirDeSlug;
