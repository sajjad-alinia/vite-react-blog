import { NavLink } from "react-router-dom";
import { LogoIcon } from "../../assets/icons";
import SearchBar from "./components/SearchBar";
import ThemeToggler from "./components/ThemeToggler";
import LngToggler from "./components/LngToggler";

const Navbar = () => {
  return (
    <nav className="flex-between-center py-5 border-b ">
      <div className="centering gap-2 dark:text-white">
        <LogoIcon />
        <div className="hidden md:block">
          <span>meta</span>
          <span className="font-bold">blog</span>
        </div>
      </div>

      <div className="centering gap-4 p-1 dark:text-white">
        <NavLink to={"/"} className={({ isActive }) => (isActive ? "p-2 border-b-2 border-blue-700" : "p-2")}>
          Home
        </NavLink>
        <NavLink to={"/postlist"} className={({ isActive }) => (isActive ? "p-2 border-b-2 border-blue-700" : "p-2")}>
          Posts
        </NavLink>
      </div>

      <div className="flex gap-4">
        <SearchBar />
        <LngToggler />
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
