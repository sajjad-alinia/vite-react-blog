import { TAuthor, TPost } from "../../../types/types";

type TPostContainer = TPost;
const PostInfoContainer = ({ id, image, title, expand, content }: TPostContainer) => {
  return (
    <div className="flex flex-col gap-8">
      <span className="bg-blue-500 text-white py-1 px-4 w-fit rounded-md text-sm">{expand ? expand.category[0].title : ""}</span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <img
        src={import.meta.env.VITE_IMAGE_URL + "/posts/" + id + "/" + image}
        alt={title}
        className="w-full h-[400px] object-cover object-center rounded-lg"
      />
      <p dangerouslySetInnerHTML={{ __html: content }}>{}</p>
      <AuthorSection {...expand.author} />
    </div>
  );
};

export default PostInfoContainer;

const AuthorSection = ({ id, name, created, avatar }: TAuthor) => {
  return (
    <div className="flex-start-center relative gap-4 p-5 pt-9 bg-slate-300 rounded-xl w-full shadow-sm">
      <img
        className="object-cover object-center rounded-full w-32 h-32"
        src={import.meta.env.VITE_IMAGE_URL + "/users/" + id + "/" + avatar}
        alt={name}
      />
      <div className="flex flex-col gap-4">
        <span className="font-semibold">{name}</span>
        <span>Registered in: {new Date(created).toLocaleDateString()}</span>
      </div>
      <span className="absolute -top-4 left-5 bg-blue-300 p-2 rounded-xl">Author Information</span>
    </div>
  );
};
