import { ButtonHTMLAttributes } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconColor?: string;
};

const LoadingButton = ({ iconColor, ...props }: Props) => {
  return (
    <button
      className="flex w-28 cursor-not-allowed items-center justify-center rounded bg-green-600 py-1.5 font-text font-bold opacity-80 duration-100 hover:bg-green-600"
      disabled
      {...props}
    >
      <UseAnimations animation={loading} strokeColor="white" size={20} />
    </button>
  );
};

export default LoadingButton;
