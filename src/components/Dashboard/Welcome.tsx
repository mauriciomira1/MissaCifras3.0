"use client";

import { useSession } from "next-auth/react";

import Loading from "@/app/(pages)/dashboard/loading";

const Welcome = () => {
  const { data, status } = useSession();

  return !status ? (
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
