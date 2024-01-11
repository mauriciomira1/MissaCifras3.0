import { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: "PRÓXIMO" | "ANTERIOR" | "ENVIAR";
  onClick?: MouseEventHandler;
  id: string;
}

const Btn = ({ name, onClick, id, ...props }: BtnProps) => {
  let Colors = "";
  if (name === "PRÓXIMO") {
    Colors =
      "bg-primaryColor text-white hover:opacity-90 hover:bg-primaryColor";
  } else if (name === "ENVIAR") {
    Colors = "bg-green-700 text-white hover:bg-green-600 hover:text-white";
  } else {
    Colors = "bg-gray-300 text-black";
  }

  return (
    <button
      className={`${Colors} w-28 rounded py-1.5 font-text font-bold duration-100 disabled:cursor-not-allowed disabled:opacity-60`}
      onClick={onClick}
      {...props}
    >
      {name}
    </button>
  );
};

export default Btn;
