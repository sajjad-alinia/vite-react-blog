import { useTranslation } from "react-i18next";
import Input from "../../../common/utils/Input";

function SearchBar() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Input placeholder={t("Navbar.search")} />
    </div>
  );
}

export default SearchBar;
