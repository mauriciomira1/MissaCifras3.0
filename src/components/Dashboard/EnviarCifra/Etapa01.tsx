"use client";
import { ReactNode, useEffect, useState } from "react";
import InputData from "./InputData";

// Contextos
import { useNewMusic } from "@/contexts/useNewMusicContext";

// Tipagem
import { SongDataProps } from "@/dtos/songDataProps";
import { ArtistaBancodeDadosProps } from "@/dtos/artistaProps";

// Subcomponentes
import InputTonalidade from "./InputTonalidade";
import InputClassificacao from "./InputClassificacao";

// ----------------------------------------------------------------

const Etapa01 = ({ children }: { children: ReactNode }) => {
  const { EtapaSong01, songData } = useNewMusic();

  const [data, setData] = useState<SongDataProps>(songData || {});
  const [liturgicaChecked, setLiturgicaChecked] = useState(false);

  const [cantorPrincipal, setCantorPrincipal] = useState("");
  const [listaDeArtistas, setListaDeArtistas] =
    useState<ArtistaBancodeDadosProps[]>();

  const handleLiturgicaChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLiturgicaChecked(ev.target.checked);
    data.liturgica = !liturgicaChecked;
  };

  const handleChange = (ev: any) => {
    /*     const { name, value } = ev.target;
    setData((prevData) => ({ ...prevData, [name]: value })); */
  };

  const handleHashtags = (ev: any) => {
    const { name, value } = ev.target;
    const arrayDeHashtags: string[] = value.split(/[.,; ]/);
    setData((prevData) => ({ ...prevData, [name]: arrayDeHashtags }));
  };

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
        {/*         <input
          className="h-8 w-full items-center rounded bg-gray-200 px-2 placeholder:text-sm focus:bg-white"
          placeholder="Nome do cantor/banda principal"
          name="artista"
          onChange={(ev) => setCantorPrincipal(ev.target.value)}
          value={cantorPrincipal}
        /> */}
        {children}
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

      <InputTonalidade />

      <div className="flex w-full items-center">
        <span className="mr-2 w-28 font-text text-sm font-bold">
          BPM <span className="text-[.7em]">(opcional)</span>:
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

      <InputClassificacao />

      <div className="flex items-center gap-2">
        <label htmlFor="liturgica" className="font-text">
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
