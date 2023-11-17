import React from "react";

interface btnProps {
  btnTitle: string | "Botão";
  textFont?: string | "font-text";
  texSize?: string | "font-normal";
  icon?: string;
  className: string;
  id?: string;
}

const ButtonStyle01 = (props: btnProps) => {
  return (
    <button
      className={`uppercasefont-semibold ${props.textFont} ${props.texSize} py-1 first-letter:flex flex-wrap items-center justify-center gap-1 px-3 rounded ${props.className}`}
      id={props.id}
    >
      {props.icon}
      {props.btnTitle}
    </button>
  );
};

export default ButtonStyle01;
