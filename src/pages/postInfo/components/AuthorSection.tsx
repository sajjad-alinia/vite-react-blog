import Skeleton from "react-loading-skeleton";
import { TAuthor } from "../../../types/types";

const AuthorSection = ({ id, name, created, avatar }: TAuthor) => {
  return (
    <div className="flex-start-center relative gap-4 p-5 pt-9 bg-slate-300 dark:bg-slate-600 dark:text-white rounded-xl w-full shadow-sm">
      <img
        className="object-cover object-center rounded-full w-32 h-32"
        src={import.meta.env.VITE_IMAGE_URL + "/users/" + id + "/" + avatar}
        alt={name}
      />
      <div className="flex flex-col gap-4">
        <span className="font-semibold">{name || <Skeleton />}</span>
        <span>Registered in: {new Date(created).toLocaleDateString()}</span>
      </div>
      <span className="absolute -top-4 left-5 bg-blue-300 p-2 rounded-xl">Author Information</span>
    </div>
  );
};

export default AuthorSection;
