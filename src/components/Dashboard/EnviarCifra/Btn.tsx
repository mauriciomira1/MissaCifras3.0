import { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: "PRÓXIMO" | "ANTERIOR" | "ENVIAR";
  onClick?: MouseEventHandler;
  id: string;
}

const Btn = ({ name, onClick, id, ...props }: BtnProps) => {
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
      className={`${Colors} w-28 rounded py-1.5 font-text font-bold disabled:cursor-not-allowed disabled:opacity-60`}
      onClick={onClick}
      {...props}
    >
      {name}
    </button>
  );
};

export default Btn;
