import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import cn from "./cn";

type TInput = {
  icon?: ReactNode;
  title?: string;
} & VariantProps<typeof inputVariants> &
  InputHTMLAttributes<HTMLInputElement>;

const inputVariants = cva("w-full outline-none p-2 bg-slate-200 dark:bg-slate-600 dark:text-white rounded-md", {
  variants: {
    variant: {
      default: "",
      form: "mb-2",
    },
  },
  defaultVariants: { variant: "default" },
});

const Input = forwardRef<HTMLInputElement, PropsWithChildren<TInput>>(
  ({ name, type, placeholder, value, title, className, variant, onChange, onBlur, ...rest }, ref) => {
    // { name, type, placeholder, value, title, className, variant, onChange, ...rest }
    return (
      <div className="flex flex-col gap-2 w-full">
        {variant == "form" && title && (
          <label className="text-sm font-medium dark:text-white" htmlFor={name}>
            {title}
          </label>
        )}
        <input
          {...rest}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          className={cn(inputVariants({ variant, className }))}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
);
// const Input = forwardRef(({ name, type, placeholder, value, title, className, variant, onChange, ...rest }: TInput) => {
//   return (
//     <div className="flex flex-col gap-2 w-full">
//       {variant == "form" && title && (
//         <label className="text-sm font-medium dark:text-white" htmlFor={name}>
//           {title}
//         </label>
//       )}
//       <input
//         {...rest}
//         onChange={onChange}
//         type={type}
//         className={cn(inputVariants({ variant, className }))}
//         id={name}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//       />
//     </div>
//   );
// });

export default Input;
