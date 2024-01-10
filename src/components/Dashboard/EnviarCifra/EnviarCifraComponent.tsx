"use client";

// Hooks
import { useEffect, useState } from "react";

// Contextos
import { useNewMusic } from "@/contexts/useNewMusicContext";

// Componentes
import Btn from "@/components/Dashboard/EnviarCifra/Btn";
import Etapa01 from "@/components/Dashboard/EnviarCifra/Etapa01";
import Etapa02 from "@/components/Dashboard/EnviarCifra/Etapa02";
import Etapa03 from "@/components/Dashboard/EnviarCifra/Etapa03";
import CriarNovaMusica from "@/functions/dashboard/musica/criarNovaMusica";
import { useSession } from "next-auth/react";
import { Toaster } from "@/components/shadcn/ui/toaster";
import { useToast } from "@/components/shadcn/ui/use-toast";

// ----------------------------------------------------------------------------

const EnviarCifraComponent = () => {
  const { songData } = useNewMusic();
  const { data, status } = useSession();
  const { toast } = useToast();

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [btnState, setBtnState] = useState(true);

  const [botaoAtivado, setBotaoAtivado] = useState(false);

  const selectedBtn =
    "font-text text-green-400 text-xl align-middle font-bold border-2 border-green-400 rounded-md h-8 w-8";

  const inactiveBtn =
    "font-text text-gray-900 text-xl align-middle font-bold bg-gray-300 rounded-md h-8 w-8";

  const btnProximo = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual + 1);
    if (etapaAtual === 1) {
      setBtnState(false);
    }
  };

  const btnAnterior = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEtapaAtual((etapaAtual) => etapaAtual - 1);
    if (etapaAtual < 3) {
      setBtnState(true);
    }
  };

  const enviarNovaMusica = async () => {
    try {
      await CriarNovaMusica({ data, status, songData });
      toast({
        title: "Música criada com sucesso!",
        color: "#FFF",
      });
    } catch (error) {
      toast({
        title: "Não foi possível criar a música. Tente mais tarde.",
        color: "#FFF",
      });
    }
  };

  const renderDaEtapaAtual = () => {
    switch (etapaAtual) {
      case 0:
        return <Etapa01 setBotaoAtivado={setBotaoAtivado} />;

      case 1:
        return <Etapa02 setBotaoAtivado={setBotaoAtivado} />;

      case 2:
        return <Etapa03 />;

      default:
        return null;
    }
  };

  /*  const submitEtapa01 = (handleSubmit: any) => {
    handleSubmit();
  }; */
  /*   const submitEtapa01 = ({
    handleSubmit,
  }: UseFormHandleSubmit<FieldValues, undefined>) => {
    handleSubmit();
  }; */

  return (
    <form className="my-6 flex w-full flex-col items-center gap-2">
      <h1 className="font-text text-2xl font-black text-primaryColor md:text-4xl">
        DASHBOARD
      </h1>
      <div className="mb-5 mt-2 flex w-full justify-center gap-1">
        <button
          className={etapaAtual === 0 ? selectedBtn : inactiveBtn}
          id="btn01"
          onClick={(ev) => {
            ev.preventDefault();
            setEtapaAtual(0);
          }}
          /* onSubmit={submitEtapa01} */
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
      </div>
      <div className="w-full">{renderDaEtapaAtual()}</div>
      <div className="flex w-full justify-between">
        {etapaAtual === 0 ? (
          <div></div>
        ) : (
          <Btn name="ANTERIOR" id="btnAnterior" onClick={btnAnterior} />
        )}

        {btnState === true ? (
          <Btn
            name="PRÓXIMO"
            id="btnProximo"
            onClick={btnProximo}
            disabled={!botaoAtivado}
          />
        ) : (
          <Btn
            name="ENVIAR"
            id="Enviar"
            onClick={(ev) => {
              ev.preventDefault();
              enviarNovaMusica();
            }}
          />
        )}
      </div>
      <Toaster />
    </form>
  );
};

export default EnviarCifraComponent;
