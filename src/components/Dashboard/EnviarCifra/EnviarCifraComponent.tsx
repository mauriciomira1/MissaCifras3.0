"use client";
import Btn from "@/components/Dashboard/EnviarCifra/Btn";
import Etapa01 from "@/components/Dashboard/EnviarCifra/Etapa01";
import Etapa02 from "@/components/Dashboard/EnviarCifra/Etapa02";
import Etapa03 from "@/components/Dashboard/EnviarCifra/Etapa03";
import { useNewMusic } from "@/contexts/useNewMusicContext";
import { prismaClient } from "@/lib/prisma";
import { useState } from "react";

const EnviarCifraComponent = () => {
  const { songData } = useNewMusic();

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [btnState, setBtnState] = useState(true);

  const selectedBtn =
    "font-text text-green-400 text-xl align-middle font-bold border-2 border-green-400 rounded-md h-8 w-8";

  const inactiveBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-gray-300 rounded-md h-8 w-8";

  const btnProximo = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual + 1);
    if (etapaAtual === 2) {
      setBtnState(false);
    }
  };

  const btnAnterior = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual - 1);
    if (etapaAtual < 4) {
      setBtnState(true);
    }
  };

  const handleSend = async () => {
    // Juntando todos os dados para enviar a nova música para o servidor
    if (
      !songData.cifra ||
      !songData ||
      !songData.letra ||
      !songData.chordsList
    ) {
      console.log("Falta dados para o envio ao servidor.");
      return;
    }
    const completeSong = await prismaClient.cifra.create({
      musica: songData.musica,
      versao: songData.versao,
      artistas: songData.artistas,
      compositor: songData.compositor,
      tom: songData.tom,
      bpm: songData.bpm,
      video: songData.video,
      letra: songData.letra,
      cifra: songData.cifra,
      hashtags: songData.hashtags,
      classificacao: songData.classificacao,
      liturgica: songData.liturgica,
      /*       chordsList: chordsList, */
      qtdDeCliques: 0,
      /* usuarioQueEnviou, */
    });

    /*     fetch("http://localhost:3000/api/cifras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completeSong),
    }).then((res) => alert(res)); */
    console.log(completeSong);
  };

  const renderDaEtapaAtual = () => {
    switch (etapaAtual) {
      case 0:
        return <Etapa01 />;

      case 1:
        return <Etapa02 />;

      case 2:
        return <Etapa03 />;

      default:
        return null;
    }
  };

  return (
    <form className="flex flex-col w-full gap-2 items-center my-6">
      <h1 className="font-text text-2xl md:text-4xl font-black text-primaryColor">
        DASHBOARD
      </h1>
      <div className="flex justify-center gap-1 mt-2 mb-5 w-full">
        <button
          className={etapaAtual === 0 ? selectedBtn : inactiveBtn}
          id="btn01"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(0);
          }}
        >
          1
        </button>
        <button
          className={etapaAtual === 1 ? selectedBtn : inactiveBtn}
          id="btn02"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(1);
          }}
        >
          2
        </button>

        <button
          className={etapaAtual === 2 ? selectedBtn : inactiveBtn}
          id="btn03"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(2);
          }}
        >
          3
        </button>

        <button
          className={etapaAtual === 3 ? selectedBtn : inactiveBtn}
          id="btn04"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(3);
          }}
        >
          4
        </button>
      </div>
      <div className="w-full">{renderDaEtapaAtual()}</div>
      <div className="flex justify-between w-full">
        {etapaAtual === 0 ? (
          <div></div>
        ) : (
          <Btn name="ANTERIOR" id="btnAnterior" onClick={btnAnterior} />
        )}

        {btnState === true ? (
          <Btn name="PRÓXIMO" id="btnProximo" onClick={btnProximo} />
        ) : (
          <Btn
            name="ENVIAR"
            id="Enviar"
            onClick={(ev) => {
              ev.preventDefault();
              handleSend();
            }}
          />
        )}
      </div>
    </form>
  );
};

export default EnviarCifraComponent;
