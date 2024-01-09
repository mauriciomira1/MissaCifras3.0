import { useNewMusic } from "@/contexts/useNewMusicContext";

import "./etapa03.css";

import { prismaClient } from "@/lib/prisma";
import { UserProps } from "@/dtos/userProps";

const Etapa03 = async () => {
  const { songData } = useNewMusic();

  const criarNovaCifra = await prismaClient.cifra.create({
    data: {
      musica: songData.musica,
      userId: "",
      versao: songData.versao,
      compositor: songData.compositor,
      slug: "",
      qtdDeCliques: 0,
      artistaId: "",
      participacao: songData.participacao,
      liturgica: songData.liturgica,
      acordes: songData.acordes,
      classificacao: songData.classificacao,
      hashtags: songData.hashtags,
      tom: songData.tom,
      bpm: songData.bpm,
      video: songData.video,
      letra: songData.letra,
      cifra: songData.cifra,
    },
  });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="py-1 font-text font-bold text-primaryColor">
        ETAPA 03 - REVISÃO
      </h1>
      <section className="mb-6 mt-2 flex w-4/5 flex-col justify-start rounded border border-gray-300">
        <h2 className="rounded bg-primaryColor px-1 py-1 text-center font-text font-bold text-white">
          Dados da música
        </h2>
        <hr />
        <div className="flex flex-col gap-2 py-2 pl-2 font-text text-sm">
          <p>
            Nome da música: <strong>{songData.musica}</strong>
          </p>
          <p>
            Versão: <strong>{songData.versao}</strong>
          </p>
          <p>
            Cantor/Banda: <strong>{songData.artistaId}</strong>
          </p>
          <p>
            Participação: <strong>{songData.participacao}</strong>
          </p>
          <p>
            Compositor: <strong>{songData.compositor}</strong>
          </p>
          <p>
            Tom original: <strong>{songData.tom}</strong>
          </p>
          <p>
            BPM: <strong>{songData.bpm}</strong>
          </p>
          <p>
            Vídeo do Youtube: <strong>{songData.video}</strong>
          </p>
          <p>
            Palavras-chave: <strong>{songData.hashtags}</strong>
          </p>
          <p>
            Momento da Missa: <strong>{songData.classificacao}</strong>
          </p>
        </div>
      </section>
      <section className="my-4 w-4/5 whitespace-pre-wrap font-cifra">
        {songData.cifra}
      </section>
    </div>
  );
};

export default Etapa03;
