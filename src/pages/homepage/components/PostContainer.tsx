import { useEffect, useState } from "react";
import PostItem from "../../../common/post/PostItem";
import { TPost } from "../../../types/types";
import PostItemSkeleton from "../../../common/post/PostItemSkeleton";

const PostContainer = () => {
  const [data, setData] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + "/posts/records?expand=author,category");

      const resJson = await res.json();
      setData(resJson.items);
      setIsLoading(false);
    };

    getData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <span className="text-base font-bold">Latest Post</span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {isLoading && <PostItemSkeleton count={4} />}
        {data.map((item, index) => (
          // <span key={index}>{item.title}</span>
          <PostItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
