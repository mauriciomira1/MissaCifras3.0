"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Welcome = () => {
  const { data } = useSession();

  return (
    <div>
      <h1>Bem-vindo, {data?.user?.name}</h1>
    </div>
  );
};

export default Welcome;
