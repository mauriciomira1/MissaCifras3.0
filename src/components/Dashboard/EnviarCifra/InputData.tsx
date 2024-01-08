"use client";

import { ChangeEventHandler, InputHTMLAttributes, useState } from "react";

type InputDataProps =
  | InputHTMLAttributes<HTMLInputElement>
  | {
      onChange: ChangeEventHandler;
      value?: string | number;
      required?: boolean;
    };

const InputData = ({
  onChange,
  value,
  required = false,
  ...props
}: InputDataProps) => {
  const [hasValue, setHasValue] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange!(ev);
    ev.target.value ? setHasValue(true) : setHasValue(false);

    if (required) {
      ev.target.value === "" ? setEmptyMessage(true) : setEmptyMessage(false);
    }
  };

  return (
    <>
      <input
        className={`${
          hasValue ? "border-gray-300 bg-white" : "border-gray-200 bg-gray-200"
        } h-9 w-full items-center rounded border-[1px]   px-2 outline-none placeholder:text-sm focus:border-[#2684FF] focus:bg-white`}
        value={value}
        onChange={handleChange}
        required={required}
        {...props}
      />
      {emptyMessage && (
        <div className="-mt-1.5 ml-1 flex w-full">
          <span className="text-xs text-red-600">
            Preenchimento obrigatório.
          </span>
        </div>
      )}
    </>
  );
};

export default InputData;
