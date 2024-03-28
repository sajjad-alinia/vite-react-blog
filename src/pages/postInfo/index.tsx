import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TPost } from "../../types/types";
import PostInfoContainer from "./components/PostInfoContainer";
import PostInfoContainerSkeleton from "./components/PostInfoContainerSkeleton";

const PostInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState<TPost>({} as TPost);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + "/posts/records/" + id + "?expand=category,author");

      const resJson = await res.json();
      setData(resJson);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      {isLoading && <PostInfoContainerSkeleton />}
      {!isLoading && <PostInfoContainer {...data} />}
    </div>
  );
};

export default PostInfo;
