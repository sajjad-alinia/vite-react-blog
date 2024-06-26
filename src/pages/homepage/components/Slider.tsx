import { useEffect, useState } from "react";
import { TPost } from "../../../types/types";
import Skeleton from "react-loading-skeleton";
import API from "../../../api/api";

const Slider = () => {
  const [data, setData] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      API.get("/posts/records", { params: { expand: "category", perPage: 1 } }).then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
    };

    getData();
  }, []);

  return (
    <div className="flex relative w-full">
      {isLoading && <SliderSkeleton />}
      {!isLoading &&
        data.map((item, index) => (
          <div className="flex w-full" key={index}>
            <img
              className="w-full h-[200px] md:h-[400px] object-cover object-center rounded-lg"
              src={import.meta.env.VITE_IMAGE_URL + "/posts/" + item.id + "/" + item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-4 absolute ltr:left-14 rtl:right-14 -bottom-14 p-5 w-56 rounded-lg bg-white dark:bg-slate-600 shadow-md">
              <span className="bg-blue-500 text-white py-1 px-4 w-fit rounded-md text-sm">{item.expand.category[0].title}</span>
              <span className="dark:text-white">{item.title}</span>
            </div>
          </div>
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
