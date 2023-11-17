"use client";
import "./etapa03e04.css";
import { useNewMusic } from "@/contexts/useNewMusicContext";
import { useEffect, useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";

interface chordsListProps {
  acorde: string;
  index: number;
}

const Etapa03 = () => {
  const { letra, EtapaSong03, chordsList, setChordsList } = useNewMusic();
  const [activeIndex, setActiveIndex] = useState<any>();
  const chordInputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const openCifraWindow = (
    ev: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (activeIndex === null || activeIndex !== index) {
      setActiveIndex(index);
      setTimeout(() => {
        chordInputRefs.current[index]?.focus();
      }, 0);
    }
    ev.preventDefault();
  };

  const closeWindow = () => {
    setActiveIndex(null);
  };

  const handleChordChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setChordsList((prevChords) => {
      const chordIndex = prevChords.findIndex((chord) => chord.index === index);
      if (chordIndex !== -1) {
        // Atualiza o acorde existente
        const updatedChords = [...prevChords];

        updatedChords[chordIndex] = {
          ...updatedChords[chordIndex],
          acorde: ev.target.value,
        };
        return updatedChords;
      } else {
        // Adiciona novo acorde
        return prevChords.concat({ acorde: ev.target.value, index });
      }
    });
    EtapaSong03();
  };

  useEffect(() => {
    const handleClickOutside = (ev: any) => {
      if (
        !ev.target.closest("#caixaDeAcorde") &&
        !ev.target.closest("button")
      ) {
        setActiveIndex(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [chordsList]);

  const buttons = letra.split("").map((char, index) => {
    if (char === "\n") {
      return <br key={index} />;
    } else {
      return (
        <span key={index} className="group relative">
          <div className="chord-container">
            <span
              id="chordItem"
              className="chord font-bold font-cifra text-secondaryColor"
            >
              {chordsList &&
                chordsList.find((chord) => chord.index === index)?.acorde}
            </span>
            <button
              id={`char-${index}`}
              onClick={(ev) => openCifraWindow(ev, index)}
              className="hover:text-secondaryColor active:text-primaryColor"
            >
              <div
                id="caixaDeAcorde"
                className={`px-1 py-2 text-black z-10 bg-white w-24 rounded absolute top-0 -left-8 shadow-md border-2 border-gray-300 shadow-gray-400 transform -translate-y-full ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <GrFormClose
                  className="absolute right-0 top-0"
                  onClick={closeWindow}
                />

                <input
                  ref={(el) => (chordInputRefs.current[index] = el)}
                  type="text"
                  name="acorde"
                  id="acorde"
                  className="w-20 outline-none text-sm"
                  onChange={(ev) => handleChordChange(ev, index)}
                />
              </div>
              {char}
            </button>
          </div>
        </span>
      );
    }
  });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <h1 className="font-text text-primaryColor py-1 font-bold">
        ETAPA 03 - CIFRA
      </h1>
      <section className="whitespace-pre-wrap font-cifra my-4">
        {buttons}
      </section>
    </div>
  );
};

export default Etapa03;
