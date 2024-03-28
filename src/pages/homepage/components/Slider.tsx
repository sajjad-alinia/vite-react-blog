import { useEffect, useState } from "react";
import { TPost } from "../../../types/types";
import Skeleton from "react-loading-skeleton";

const Slider = () => {
  const [data, setData] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + "/posts/records?expand=category&perPage=1");

      const resJson = await res.json();
      setData(resJson.items);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="flex relative w-full">
      {isLoading && <SliderSkeleton />}
      {!isLoading &&
        data.map((item) => (
          <>
            <img
              className="w-full h-[200px] md:h-[400px] object-cover object-center rounded-lg"
              src={import.meta.env.VITE_IMAGE_URL + "/posts/" + item.id + "/" + item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-4 absolute left-14 -bottom-14 p-5 w-56 rounded-lg bg-white shadow-md">
              <span className="bg-blue-500 text-white py-1 px-4 w-fit rounded-md text-sm">{item.expand.category[0].title}</span>
              {item.title}
            </div>
          </>
        ))}
    </div>
  );
};

export default Slider;

const SliderSkeleton = () => {
  return (
    <div className="flex relative w-full">
      <div className="w-full">
        <Skeleton height={400} />
      </div>

      <div className="flex flex-col gap-4 absolute left-14 -bottom-14 p-5 w-56 rounded-lg bg-white shadow-md">
        <Skeleton width={60} />
        <Skeleton />
      </div>
    </div>
  );
};
