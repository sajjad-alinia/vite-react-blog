import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const HomePageLayout = () => {
  return (
    <div className="flex flex-col gap-4 layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
