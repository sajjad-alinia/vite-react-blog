import { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useLocation, useNavigate } from "react-router-dom";
import { TCategory } from "../../../types/types";
import API from "../../../api/api";

const CategorySection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<TCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currentCategoryId = new URLSearchParams(location.search).get("category") || "all";
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      API.get("/category/records").then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
    };

    getData();
  }, []);

  const changeHandler = (id: string) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("category", id);

    const newSearch = `?${queryParams.toString()}`;
    navigate({ search: newSearch });
  };

  const activeCategory = useCallback(
    (id: string) => {
      const shareClass = "bg-blue-700 transition-all text-white rounded-md p-2 px-4 cursor-pointer shadow-sm opacity-60";
      if (currentCategoryId === id) {
        return shareClass + "opacity-100";
      }

      return shareClass;
    },
    [currentCategoryId]
  );

  return (
    <div className="centering gap-6 ">
      {!isLoading && (
        <div onClick={() => changeHandler("all")} className={activeCategory("all")}>
          All
        </div>
      )}
      {!isLoading &&
        data.map((category) => (
          <div onClick={() => changeHandler(category.id)} className={activeCategory(category.id)} key={category.id}>
            {category.title}
          </div>
        ))}
      {isLoading && (
        <div className="flex gap-6">
          <Skeleton className="inline" width={70} height={40} />
          <Skeleton className="inline" width={70} height={40} />
          <Skeleton className="inline" width={70} height={40} />
          <Skeleton className="inline" width={70} height={40} />
        </div>
      )}
    </div>
  );
};

export default CategorySection;
