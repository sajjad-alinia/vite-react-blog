import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TPost } from "../../types/types";
import PostInfoContainer from "./components/PostInfoContainer";

const PostInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState<TPost>({} as TPost);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://blog-react.liara.run/api/collections/posts/records/" + id + "?expand=category");

      const resJson = await res.json();
      setData(resJson);
      console.log(resJson);
    };

    getData();
  }, []);

  return (
    <div>
      <PostInfoContainer {...data} />
    </div>
  );
};

export default PostInfo;
