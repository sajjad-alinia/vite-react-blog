import { useTranslation } from "react-i18next";
import PostContainer from "./components/PostContainer";
import Slider from "./components/Slider";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-20 text-white">
      {t("hello")}
      <Slider />
      <PostContainer />
    </div>
  );
};

export default HomePage;
