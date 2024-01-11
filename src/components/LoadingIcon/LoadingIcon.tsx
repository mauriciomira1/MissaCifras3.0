import "./styles.css";

import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

type Props = {
  color?: string;
  size: number;
};

const LoadingIcon = ({ color, size }: Props) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <UseAnimations animation={loading} strokeColor={color} size={size} />
    </div>
  );
};

export default LoadingIcon;
