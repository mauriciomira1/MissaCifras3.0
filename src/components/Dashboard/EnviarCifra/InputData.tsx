"use client";

import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";

type InputDataProps =
  | InputHTMLAttributes<HTMLInputElement>
  | {
      onChange: ChangeEventHandler;
      value?: string | number;
    };

const InputData = ({ onChange, value, ...props }: InputDataProps) => {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange!(ev);
    ev.target.value ? setHasValue(true) : setHasValue(false);
  };

  return (
    <input
      onChange={handleChange}
      className={`${
        hasValue ? "border-gray-300 bg-white" : "border-gray-200 bg-gray-200"
      } h-9 w-full items-center rounded border-[1px]   px-2 outline-none placeholder:text-sm focus:border-[#2684FF] focus:bg-white`}
      value={value}
      {...props}
    />
  );
};

export default InputData;
