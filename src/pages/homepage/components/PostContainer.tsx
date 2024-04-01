import { useEffect, useState } from "react";
import PostItem from "../../../common/post/PostItem";
import { TPost } from "../../../types/types";
import PostItemSkeleton from "../../../common/post/PostItemSkeleton";
import API from "../../../api/api";
import { useTranslation } from "react-i18next";

const PostContainer = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      API.get("/posts/records?expand=author,category").then((data) => {
        setData(data.data.items);
        setIsLoading(false);
      });
    };

    getData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <span className="text-base font-bold dark:text-white">{t("HomePage.latestPosts")}</span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {isLoading && <PostItemSkeleton count={4} />}
        {data.map((item, index) => (
          <PostItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
