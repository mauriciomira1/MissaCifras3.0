"use server";

import { prismaClient } from "@/lib/prisma";

const ObterUsuario = async (emailDoUsuario: string) => {
  const usuario = await prismaClient.user.findFirst({
    where: {
      email: emailDoUsuario,
    },
  });

  return usuario;
};

export default ObterUsuario;
