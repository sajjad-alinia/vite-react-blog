import { InputHTMLAttributes, ReactNode } from "react";

type TInput = {
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
const Input = ({ id, name, placeholder, value }: TInput) => {
  return (
    <input
      type="text"
      className="w-full outline-none p-2 bg-slate-200 dark:bg-slate-600 dark:text-white rounded-md "
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
