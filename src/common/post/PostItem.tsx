import { Link } from "react-router-dom";
import { TPost } from "../../types/types";

const PostItem = ({ id, title, image, content, expand, created }: TPost) => {
  return (
    <Link to={"/postInfo/" + id} className="flex flex-col gap-2 p-2 border rounded-md ">
      <img
        src={import.meta.env.VITE_IMAGE_URL + "/posts/" + id + "/" + image}
        alt={title}
        className="w-full h-[250px] rounded-lg"
      />
      <span className="bg-blue-500 text-white py-1 px-4 w-fit rounded-md text-sm">{expand.category[0].title}</span>
      <span className="text-2xl font-bold">{title}</span>
      <p className="text-sm text-gray-500 line-clamp-2 min-h-12 " dangerouslySetInnerHTML={{ __html: content }}></p>
      <div className="flex-start-center gap-4">
        <img
          className="w-9 h-9 rounded-full"
          src={import.meta.env.VITE_IMAGE_URL + "/users/" + expand.author.id + "/" + expand.author.avatar}
          alt={expand.author.name}
        />
        <span className="text-sm text-gray-400">{expand.author.name}</span>
        <span className="text-sm text-gray-400">{new Date(created).toLocaleDateString()}</span>
      </div>
    </Link>
  );
};

export default PostItem;
