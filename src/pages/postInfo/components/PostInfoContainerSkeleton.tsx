import Skeleton from "react-loading-skeleton";

const PostInfoContainerSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <span className=" w-fit rounded-md text-sm">
        <Skeleton height={20} width={60} />
      </span>
      <h1 className="text-2xl font-bold">
        <Skeleton width={500} />
      </h1>
      <div>
        <Skeleton height={400} />
      </div>
      <p>
        <Skeleton count={20} />
      </p>
    </div>
  );
};

export default PostInfoContainerSkeleton;
