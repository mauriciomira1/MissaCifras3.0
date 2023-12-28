"use client";

import { ChangeEventHandler, useState } from "react";

interface InputDataProps {
  placeholder: string;
  type?: string | "text";
  name: string;
  onChange: ChangeEventHandler;
  value?: string | number;
}

const InputData = ({
  placeholder,
  type,
  name,
  onChange,
  value,
}: InputDataProps) => {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (ev: any) => {
    onChange(ev.target.value);
    ev.target.value ? setHasValue(true) : setHasValue(false);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      className={`${
        hasValue ? "border-gray-300 bg-white" : "border-gray-200 bg-gray-200"
      } h-9 w-full items-center rounded border-[1px]   px-2 outline-none placeholder:text-sm focus:border-[#2684FF] focus:bg-white`}
      value={value}
    />
  );
};

export default InputData;
