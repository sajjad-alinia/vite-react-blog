import { TPost } from "../../../types/types";

type TPostContainer = TPost;
const PostInfoContainer = ({ id, image, title, expand, content }: TPostContainer) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="bg-blue-500 text-white py-1 px-4 w-fit rounded-md text-sm">{expand ? expand.category[0].title : ""}</span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <img
        src={"https://blog-react.liara.run/api/files/posts/" + id + "/" + image}
        alt={title}
        className="w-full h-[400px] object-cover object-center rounded-lg"
      />
      <p dangerouslySetInnerHTML={{ __html: content }}>{}</p>
    </div>
  );
};

export default PostInfoContainer;
