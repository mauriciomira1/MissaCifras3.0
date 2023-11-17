interface InputStyle01Props {
  inputType: string | "text";
}

const InputStyle01 = ({ inputType }: InputStyle01Props) => {
  return <input type={inputType} className="bg-white w-full" />;
};

export default InputStyle01;
