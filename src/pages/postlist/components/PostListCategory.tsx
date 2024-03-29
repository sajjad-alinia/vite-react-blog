import { useEffect, useState } from "react";
import { TPost } from "../../../types/types";
import PostItem from "../../../common/post/PostItem";
import PostItemSkeleton from "../../../common/post/PostItemSkeleton";
import { useLocation } from "react-router-dom";
import API from "../../../api/api";

const PostListCategory = () => {
  const location = useLocation();
  const categoryId = new URLSearchParams(location.search).get("category");
  const [data, setData] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const params = {
        expand: "category,author",
        filter: "",
      };

      if (categoryId && categoryId != "all") params.filter = "(category.id='" + categoryId + "')";

      API.get("/posts/records", { params }).then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
    };

    getData();
  }, [categoryId]);
  return (
    <div className="flex flex-col gap-6 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {!isLoading && data && data.map((post, index) => <PostItem key={index} {...post} />)}
        {isLoading && <PostItemSkeleton count={4} />}
      </div>
      <div className="w-full centering">
        {!isLoading && data.length === 0 && <span className="p-2 px-7 text-white bg-red-400 rounded-md ">No Result</span>}
      </div>
    </div>
  );
};

export default PostListCategory;
