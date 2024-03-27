import Skeleton from "react-loading-skeleton";

type TPostItemSkeleton = {
  count: number;
};

const PostItemSkeleton = ({ count }: TPostItemSkeleton) => {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <div className="flex flex-col gap-2 p-2 border rounded-md " key={index}>
        <Skeleton height={200} />
        <span className="h-7 w-fit rounded-md text-sm">
          <Skeleton width={40} />
        </span>
        <span className="text-2xl font-bold">
          <Skeleton />
        </span>
        <p className="text-sm text-gray-500 line-clamp-2 min-h-12 ">
          <Skeleton count={2} />
        </p>
        <div className="flex-start-center gap-4">
          <Skeleton circle width={36} height={36} />
          <span className="text-sm ">
            <Skeleton width={50} />
          </span>
          <span className="text-sm ">
            <Skeleton width={60} />
          </span>
        </div>
      </div>
    ));
};

export default PostItemSkeleton;
