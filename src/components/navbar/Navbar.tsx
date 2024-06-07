import { NavLink } from "react-router-dom";
import { LogoIcon } from "../../assets/icons";
import SearchBar from "./components/SearchBar";
import ThemeToggler from "./components/ThemeToggler";
import LngToggler from "./components/LngToggler";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex flex-col gap-4 md:flex-row md:flex-between-center py-5 border-b ">
      <div className="flex gap-2 md:gap-6">
        <div className="centering gap-2 dark:text-white">
          <LogoIcon />
          <div className="">
            <span>meta</span>
            <span className="font-bold">blog</span>
          </div>
        </div>

        <div className="centering gap-4 p-1 dark:text-white">
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "p-2 border-b-2 border-blue-700" : "p-2")}>
            {t("Navbar.home")}
          </NavLink>
          <NavLink to={"/postlist"} className={({ isActive }) => (isActive ? "p-2 border-b-2 border-blue-700" : "p-2")}>
            {t("Navbar.posts")}
          </NavLink>
        </div>
      </div>

      <div className="flex-between-center md:flex gap-4">
        <NavLink
          to={"/auth/login"}
          className={`dark:text-white p-2 bg-blue-600 rounded-md px-4 hover:bg-blue-700 transition-all`}
        >
          login
        </NavLink>
        <SearchBar />
        <LngToggler />
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
