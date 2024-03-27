import { useEffect, useState } from "react";
import PostItem from "../../../common/post/PostItem";
import { TPost } from "../../../types/types";

const PostContainer = () => {
  const [data, setData] = useState<TPost[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + "/posts/records?expand=category,author");

      const resJson = await res.json();
      setData(resJson.items);
    };

    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {data.map((item, index) => (
        // <span key={index}>{item.title}</span>
        <PostItem key={index} {...item} />
      ))}
    </div>
  );
};

export default PostContainer;
