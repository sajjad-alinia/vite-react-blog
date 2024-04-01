import PostContainer from "./components/PostContainer";
import Slider from "./components/Slider";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Slider />
      <PostContainer />
    </div>
  );
};

export default HomePage;
