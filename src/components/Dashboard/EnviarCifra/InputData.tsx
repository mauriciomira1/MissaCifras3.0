import { ChangeEventHandler, ForwardedRef, MouseEventHandler } from "react";

interface InputDataProps {
  placeholder: string;
  type?: string | "text";
  name: string;
  onChange: ChangeEventHandler;
  value: any;
}

const InputData = ({
  placeholder,
  type,
  name,
  onChange,
  value,
}: InputDataProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="h-8 w-full items-center rounded bg-gray-200 px-2 placeholder:text-sm focus:bg-white"
      value={value}
    />
  );
};

export default InputData;
