"use client";
import Cifra from "@/components/Cifra/Cifra";
import { SongProps } from "@/dtos/songProps";
import Link from "next/link";
import React from "react";

type Props = {
  cifra: SongProps;
};

const CifraArea = ({ cifra }: Props) => {
  return (
    <div className="font-cifra">
      <h1 className="font-text text-3xl font-bold text-primaryColor">
        {cifra.musica}
      </h1>
      <Link
        href={cifra.artistaId}
        className="font-text text-gray-400 hover:font-bold hover:text-secondaryColor"
      >
        {cifra.artistaId}
      </Link>
      <br />
      <br />
      <p>
        Tom: <span className="font-bold text-secondaryColor">{cifra.tom}</span>
      </p>
      <p>
        Tempo: <span className="font-bold">{cifra.bpm} BPM</span>
      </p>
      <br />

      <Cifra cifraELetra={cifra.cifra} />
    </div>
  );
};

export default CifraArea;
