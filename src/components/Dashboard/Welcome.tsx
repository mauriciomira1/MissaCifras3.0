"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

// Ícones
import { FaArrowRight } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import Loading from "@/app/(pages)/dashboard/loading";
import ButtonStyle01 from "../Buttons/ButtonStyle01";

const Welcome = () => {
  const { data } = useSession();

  return !data ? (
    <Loading />
  ) : (
    <div className=" p-4">
      <h1 className="my-8 w-full font-highlight text-3xl font-semibold text-secondaryColor sm:text-5xl">
        Bem-vindo, <br />
        {data?.user?.name}
      </h1>
    </div>
  );
};

export default Welcome;
