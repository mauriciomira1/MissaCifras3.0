"use client";
import { useEffect, useState } from "react";
import InputData from "./InputData";

import { useNewMusic } from "@/contexts/useNewMusicContext";

import { SongDataProps } from "@/dtos/songDataProps";
import { prismaClient } from "@/lib/prisma";
import { ArtistaProps } from "@/dtos/artistaProps";
import Link from "next/link";

// ----------------------------------------------------------------

const Etapa01 = () => {
  const { EtapaSong01, songData } = useNewMusic();
  const [data, setData] = useState<SongDataProps>(songData || {});
  const [liturgicaChecked, setLiturgicaChecked] = useState(false);

  const handleLiturgicaChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLiturgicaChecked(ev.target.checked);
    data.liturgica = !liturgicaChecked;
  };

  const handleChange = (ev: any) => {
    const { name, value } = ev.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleHashtags = (ev: any) => {
    const { name, value } = ev.target;
    const arrayDeHashtags: string[] = value.split(/[.,; ]/);
    setData((prevData) => ({ ...prevData, [name]: arrayDeHashtags }));
  };

  const [cantorPrincipal, setCantorPrincipal] = useState("");
  const [todosOsArtistas, setTodosArtistas] = useState<ArtistaProps>();

  /*   const lidandoComParticipacaoEspecialInseridos = (
    participacaoEspecialInseridosPeloUsuario: string,
  ) => {
    if (participacaoEspecialInseridosPeloUsuario) {
      const participacaoEspecial =
        participacaoEspecialInseridosPeloUsuario.split(/[,\.;]+/);
      const participacaoEspecialFormatado = participacaoEspecial.map(
        (artista) => artista.trimStart(),
      );

      participacaoEspecialFormatado.map((artista) => {
        arrayDeParticipacaoEspecial.push({
          nome: artista,
          qtdDeCliques: 0,
        });
      });
    }
  }; */

  // Mapeia artista no banco de dados pra ver se tem.
  // Se já existir, ele pega o artistaId e insere na música
  // Se não, ele cria o artista e procura de novo para pegar o artistaId e insere na música

  const lidarComCantorPrincipal = async () => {
    try {
      const existeUmCantor = await prismaClient.artista.findMany({
        where: {
          nome: cantorPrincipal,
        },
      });

      if (existeUmCantor.length === 0) {
        await prismaClient.artista.create({
          data: {
            nome: cantorPrincipal,
            qtdDeCliques: 0,
          },
        });
      } else {
        const artistasDoDB = await prismaClient.artista.findMany();
        setTodosArtistas(artistasDoDB);
      }
    } catch (error) {
      console.log("Erro na Etapa01, existeUmCantor =======>", error);
    }
  };

  const listaArtistasdoDB = async () => {
    try {
      const listaArtistas = await prismaClient.artista.findMany();
      return listaArtistas;
    } catch (error) {
      console.log("Erro no listaArtistasdoDB =======>", error);
    }
  };

  useEffect(() => {
    EtapaSong01(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="py-1 font-text font-bold text-primaryColor">
        ETAPA 01 - DADOS DA MÚSICA
      </h1>

      <InputData
        placeholder="Nome da música"
        name="musica"
        onChange={handleChange}
        value={data.musica}
      />

      <InputData
        placeholder="Versão (Ao Vivo em Brasília, Acústico, etc)"
        name="versao"
        onChange={handleChange}
        value={data.versao}
      />

      <div className="relative w-full">
        <input
          className="h-8 w-full items-center rounded bg-gray-200 px-2 placeholder:text-sm focus:bg-white"
          placeholder="Nome do cantor/banda principal"
          name="artista"
          onChange={(ev) => setCantorPrincipal(ev.target.value)}
          value={cantorPrincipal}
        />

        {/* ------------------------------------------------------------------- */}

        <div className="absolute top-9 flex w-full flex-col gap-2 rounded-md border border-gray-300 bg-white px-2 py-3 shadow-md">
          <p className="font-text text-xs text-gray-500">Artistas</p>
          <Link href="" className="font-text text-sm font-semibold">
            Rosa de Saron
          </Link>
          <Link href="" className="font-text text-sm font-semibold">
            Eugênio Jorge
          </Link>
          <Link href="" className="font-text text-sm font-semibold">
            Eliana Ribeiro
          </Link>
          <Link href="" className="font-text text-sm font-semibold">
            Adriana Arydes
          </Link>
        </div>
      </div>

      <InputData
        placeholder="Participação especial (se houver mais de um, separe por vírgulas)"
        name="participacao"
        onChange={handleChange}
        value={data.participacao}
      />

      {/* <input
        type="text"
        placeholder="Participação (se houver mais de um, separe por vírgulas)"
        name="participacao"
        onChange={(ev) => setArtistasInseridosPeloUsuario(ev.target.value)}
        className="h-8 w-full items-center rounded bg-gray-200 px-2 placeholder:text-sm focus:bg-white"
        value={artistasInseridosPeloUsuario}
      /> */}

      <InputData
        placeholder="Nome do compositor (opcional)"
        name="compositor"
        onChange={handleChange}
        value={data.compositor}
      />

      <select
        className="h-8 w-full items-center rounded bg-gray-200 px-2 text-sm text-gray-800 placeholder:text-sm focus:bg-white"
        onChange={handleChange}
        value={data.tom}
        name="tom"
      >
        <option value="" disabled>
          Tom da música
        </option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="D">D</option>
        <option value="D#">D#</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F#">F#</option>
        <option value="G">G</option>
        <option value="G#">G#</option>
        <option value="A">A</option>
        <option value="A#">A#</option>
        <option value="B">B</option>
      </select>

      <div className="flex w-full items-center">
        <span className="mr-2 w-28 font-text text-sm font-bold">
          BPM <span className="text-[.8em]">(opcional)</span>:
        </span>

        <InputData
          placeholder="BPM (batimentos por minuto) - opcional"
          type="text"
          name="bpm"
          onChange={handleChange}
          value={data.bpm}
        />
      </div>

      <InputData
        placeholder="Vídeo do Youtube com a versão"
        type="url"
        name="video"
        onChange={handleChange}
        value={data.video}
      />

      <InputData
        placeholder="Palavras-chave (Exemplo: maria, jesus, amor de pai, etc)"
        name="hashtags"
        onChange={handleHashtags}
        value={data.hashtags}
      />

      <select
        className="h-8 w-full items-center rounded bg-gray-200 px-2 text-sm text-gray-800 placeholder:text-sm focus:bg-white"
        onChange={handleChange}
        value={data.classificacao}
        name="classificacao"
      >
        <option value="" disabled>
          Classificação da música
        </option>
        <option value="Grupo de Oração/Outros">Grupo de Oração/Outros</option>
        <option value="Canto de entrada">Canto de entrada</option>
        <option value="Ato Penitencial">Ato Penitencial</option>
        <option value="Glória">Glória</option>
        <option value="Aclamação">Aclamação ao Evangelho</option>
        <option value="Ofertório">Ofertório</option>
        <option value="Santo">Santo</option>
        <option value="Cordeiro">Cordeiro</option>
        <option value="Comunhão">Comunhão</option>
        <option value="Pós Comunhão">Pós Comunhão</option>
        <option value="Final">Final</option>
      </select>

      <div className="flex items-center gap-2">
        <label htmlFor="liturgica" className="font-cifra">
          Essa música é litúrgica:
        </label>
        <input
          type="checkbox"
          name="liturgica"
          id="liturgica"
          checked={liturgicaChecked}
          onChange={handleLiturgicaChecked}
        />
      </div>
    </div>
  );
};
export default Etapa01;
