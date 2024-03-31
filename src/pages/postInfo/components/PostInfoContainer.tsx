import { TPost } from "../../../types/types";
import AuthorSection from "./AuthorSection";

type TPostContainer = TPost;
const PostInfoContainer = ({ id, image, title, expand, content }: TPostContainer) => {
  return (
    <div className="flex flex-col gap-8">
      <span className="bg-blue-500 text-white py-1 px-4 w-fit rounded-md text-sm">{expand ? expand.category[0].title : ""}</span>
      <h1 className="text-2xl font-bold dark:text-white">{title}</h1>
      {image && (
        <img
          src={import.meta.env.VITE_IMAGE_URL + "/posts/" + id + "/" + image}
          alt={title}
          className="w-full h-[400px] object-cover object-center rounded-lg"
        />
      )}
      <p className="dark:text-gray-100" dangerouslySetInnerHTML={{ __html: content }}>
        {}
      </p>
      {expand && <AuthorSection {...expand.author} />}
    </div>
  );
};

export default PostInfoContainer;
