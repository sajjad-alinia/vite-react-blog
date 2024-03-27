import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/icons";
import SearchBar from "./components/SearchBar";

const Navbar = () => {
  return (
    <nav className="flex-between-center py-5 border-b">
      <div className="centering gap-2">
        <LogoIcon />
        <div className="hidden md:block">
          <span>meta</span>
          <span className="font-bold">blog</span>
        </div>
      </div>

      <div className="centering gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/postlist"}>Posts</Link>
      </div>

      <SearchBar />
    </nav>
  );
};

export default Navbar;
