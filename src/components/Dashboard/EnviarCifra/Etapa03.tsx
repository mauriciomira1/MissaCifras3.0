import { useNewMusic } from "@/contexts/useNewMusicContext";

import "./etapa03e04.css";

import { prismaClient } from "@/lib/prisma";

const Etapa03 = async () => {
  const { songData } = useNewMusic();

  const novaCifra = await prismaClient.cifra.create({
    data: {
      musica: songData.musica,
      versao: songData.versao,
      compositor: songData.compositor,
      tom: songData.tom,
      bpm: songData.bpm,
      video: songData.video,
      letra: songData.letra,
      cifra: songData.cifra,
    },
  });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 04 - REVISÃO
      </h1>
      <section className="flex justify-start w-4/5 rounded border border-gray-300 flex-col mt-2 mb-6">
        <h2 className="py-1 rounded px-1 text-center font-text font-bold bg-primaryColor text-white">
          Dados da música
        </h2>
        <hr />
        <div className="pl-2 gap-2 flex flex-col font-text text-sm py-2">
          <p>
            Nome da música: <strong>{songData.musica}</strong>
          </p>
          <p>
            Versão: <strong>{songData.versao}</strong>
          </p>
          <p>
            Cantor/Banda: <strong>{songData.artistas}</strong>
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
      <section className="whitespace-pre-wrap my-4 font-cifra w-4/5">
        {songData.cifra}
      </section>
    </div>
  );
};

export default Etapa03;
