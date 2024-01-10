"use server";
import { Session } from "next-auth";

import ObterUsuario from "@/functions/usuario/obterUsuario";
import { prismaClient } from "@/lib/prisma";
import { SongDataProps } from "@/dtos/songDataProps";
import { SongProps } from "@/dtos/songProps";

type Props = {
  data: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
  songData: SongProps;
};

const CriarNovaMusica = async ({ data, status, songData }: Props) => {
  if (status === "authenticated") {
    const usuario = await ObterUsuario(data!.user!.email!);

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
        usuarioQueEnviou: usuario,
        artistaId: songData.artistaId,
        participacao: songData.participacao,
      },
    });
  }
};

export default CriarNovaMusica;
