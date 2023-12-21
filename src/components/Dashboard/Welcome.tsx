"use client";

import { useSession } from "next-auth/react";

const Welcome = () => {
  const { data } = useSession();

  return (
    <div className="flex flex-col w-full items-center p-4">
      <h1 className="font-highlight font-semibold text-4xl sm:text-5xl my-8 text-secondaryColor">
        Bem-vindo, {data?.user?.name}
      </h1>
      <div className="flex flex-col items-center font-text font-bold">
        <p className="text-primaryColor text-center">
          Essa é a sua Dashboard. Confira as suas playlists, veja as suas
          colaborações ou envie uma cifra.
        </p>
        <p className="text-secondaryColor text-center">
          Venha evangelizar com a gente, e vamos levar uma música católica de
          qualidade para os nossos músicos!
        </p>
        <p className="text-gray-400 text-center font-normal pt-10 text-2xl">
          Escolha uma opção do menu.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
