import { useForm } from "react-hook-form";
import { LogoIcon } from "../../../assets/icons";
import Input from "../../../common/utils/Input";

const LogIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="centering h-screen w-full">
      <div className="w-[90%] md:w-1/6 p-3 bg-slate-300 dark:bg-slate-500 rounded-md">
        <div className="centering my-4">
          <LogoIcon />
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input
            variant={"form"}
            {...(register("email"), { required: true })}
            title="Email"
            name="email"
          />
          <Input
            variant={"form"}
            {...(register("password"), { required: true })}
            title="Password"
            name="password"
            type="password"
          />

          <button className="w-full p-2 mt-3 rounded-md bg-green-600 hover:bg-green-700 transition-colors text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
