import { useEffect, useState } from "react";
import { TPost } from "../../../types/types";

const Slider = () => {
  const [data, setData] = useState<TPost[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL + "/posts/records?expand=category&perPage=1");

      const resJson = await res.json();
      setData(resJson.items);
    };

    getData();
  }, []);

  return (
    <div className="flex relative">
      {data.map((item) => (
        <>
          <img
            className="w-full h-[300px] md:h-[600px] object-cover object-center rounded-lg"
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
