import { MoonIcon, SearchIcon, SunIcon } from "lucide-react";
import InputSearch from "../inputs/InputSearch";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { toggleTheme } from "@/app/store/slices/theme";
import Button from "../buttons/Button";
import { setLanguage } from "@/app/store/slices/language";

const HeaderRight = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { theme } = useSelector((state: RootState) => state.theme);
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <div className="flex items-center justify-end flex-1 gap-2">
      <InputSearch
        placeholder="Tìm kiếm"
        name="search"
        onChange={handleSearch}
        value={search}
        icon={<SearchIcon className="w-6 h-6 text-white" />}
        size={"lg"}
      />
      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <SunIcon
            className="w-8 h-8 text-white"
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <MoonIcon
            className="w-8 h-8 text-white"
            onClick={() => dispatch(toggleTheme())}
          />
        )}
        {language === "vi" ? (
          <Button
            variant="outlined"
            onClick={() => dispatch(setLanguage("en"))}
            shape="round"
            size="large"
          >
            en
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => dispatch(setLanguage("vi"))}
            shape="round"
            size="large"
          >
            vi
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderRight;
