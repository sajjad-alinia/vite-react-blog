import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TPost } from "../../types/types";
import PostInfoContainer from "./components/PostInfoContainer";
import PostInfoContainerSkeleton from "./components/PostInfoContainerSkeleton";
import API from "../../api/api";

const PostInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState<TPost>({} as TPost);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      API.get("/posts/records/" + id, { params: { expand: "category,author" } }).then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
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
