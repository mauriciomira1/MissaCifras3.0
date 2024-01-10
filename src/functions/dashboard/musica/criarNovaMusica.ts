"use server";
import { Session } from "next-auth";

import ObterUsuario from "@/functions/usuario/obterUsuario";
import { prismaClient } from "@/lib/prisma";
import { SongProps } from "@/dtos/songProps";

type Props = {
  data: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
  songData: SongProps;
};

const CriarNovaMusica = async ({ data, status, songData }: Props) => {
  if (status === "authenticated") {
    const email = data!.user!.email!;
    const usuario = await ObterUsuario(email);

    await prismaClient.cifra.create({
      data: {
        musica: songData.musica,
        slug: songData.slug,
        versao: songData.versao,
        compositor: songData.compositor,
        tom: songData.tom,
        bpm: songData.bpm,
        video: songData.video,
        letra: songData.letra,
        cifra: songData.cifra,
        acordes: songData.acordes,
        thumbnail: "",
        hashtags: songData.hashtags,
        classificacao: songData.classificacao,
        liturgica: songData.liturgica,
        qtdDeCliques: 0,
        userId: usuario!.id,
        artistaId: songData.artistaId,
        participacao: songData.participacao,
      },
    });
  } else {
    // criar condição para caso o usuário perca a autenticação, para que seja autenticado novamente.
    console.log("Usuário não autenticado.");
  }
};

export default CriarNovaMusica;
