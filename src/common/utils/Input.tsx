import { InputHTMLAttributes, ReactNode } from "react";

type TInput = {
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
const Input = ({ id, name, placeholder, value }: TInput) => {
  return (
    <input
      type="text"
      className="outline-none p-2 bg-slate-200 rounded-md "
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
