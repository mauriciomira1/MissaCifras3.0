"use client";

import { ReactNode, createContext } from "react";

const ContextMusicWithChords = createContext({});

export const MusicWithChordsContextProvider = (props: {
  children: ReactNode;
}) => {
  return (
    <ContextMusicWithChords.Provider value={{}}>
      {props.children}
    </ContextMusicWithChords.Provider>
  );
};
