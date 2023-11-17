import { MouseEventHandler, ReactNode } from "react";

interface BtnProps {
  name: "PRÓXIMO" | "ANTERIOR" | "ENVIAR";
  onClick?: MouseEventHandler;
  id: string;
  /*   handleSend?: (ev: React.FormEvent) => void; */
}

const Btn = ({ name, onClick, id }: BtnProps) => {
  let Colors = "";
  if (name === "PRÓXIMO") {
    Colors = "bg-primaryColor text-white";
  } else if (name === "ENVIAR") {
    Colors = "bg-green-700 text-white";
  } else {
    Colors = "bg-gray-300 text-black";
  }

  return (
    <button
      className={`${Colors} font-text font-bold w-28 py-1.5 rounded`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Btn;
