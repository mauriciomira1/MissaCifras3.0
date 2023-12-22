import { AiOutlineLoading } from "react-icons/ai";
import "./styles.css";

type Props = {
  color?: string;
  size: number;
};

const LoadingIcon = ({ color, size }: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AiOutlineLoading className="spin" color={color} size={size} />
    </div>
  );
};

export default LoadingIcon;
