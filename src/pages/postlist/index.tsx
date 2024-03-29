import CategorySection from "./components/CategorySection";
import PostListCategory from "./components/PostListCategory";

const PostList = () => {
  return (
    <div className="flex flex-col gap-6">
      <CategorySection />
      <PostListCategory />
    </div>
  );
};

export default PostList;
