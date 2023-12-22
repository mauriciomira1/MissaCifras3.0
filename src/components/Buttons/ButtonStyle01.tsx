import { IconType } from "react-icons";

interface btnProps {
  btnTitle: string | "Botão";
  textFont?: string | "font-text";
  texSize?: string | "font-normal";
  icon?: IconType;
  className: string;
  id?: string;
}

const ButtonStyle01 = (props: btnProps) => {
  const Icon = props.icon;
  return (
    <button
      className={`uppercasefont-semibold flex ${props.textFont} ${props.texSize} flex-wrap items-center justify-center gap-1 rounded px-3 py-1 first-letter:flex ${props.className}`}
      id={props.id}
    >
      {Icon && <Icon size={20} />}
      {props.btnTitle}
    </button>
  );
};

export default ButtonStyle01;
