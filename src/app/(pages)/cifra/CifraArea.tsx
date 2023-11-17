"use client";
import Cifra from "@/components/Cifra/Cifra";
import Link from "next/link";
import React from "react";
import cifra from "@/api/cifras/manda-teus-anjos-anjos-de-resgate.json";

const CifraArea = () => {
  return (
    <div className="font-cifra">
      <h1 className="font-text font-bold text-primaryColor text-3xl">
        {cifra.musica}
      </h1>
      <Link
        href={cifra.cantor}
        className="font-text text-gray-400 hover:text-secondaryColor hover:font-bold"
      >
        {cifra.cantor}
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
