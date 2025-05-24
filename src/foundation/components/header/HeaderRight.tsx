import { MoonIcon, SearchIcon, SunIcon } from "lucide-react";
import InputSearch from "../inputs/InputSearch";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { toggleTheme } from "@/app/store/slices/theme";

import { setLanguage } from "@/app/store/slices/language";
import Vi from "@/assets/vi.png";
import En from "@/assets/en.png";

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
        icon={<SearchIcon className="w-6 h-6 text-text-link-hover" />}
      />
      <div className="flex items-center gap-2">
        {theme === "light" ? (
          <SunIcon
            className="w-8 h-8 text-text-secondary"
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <MoonIcon
            className="w-8 h-8 text-text-secondary"
            onClick={() => dispatch(toggleTheme())}
          />
        )}
        {language === "vi" ? (
          <div
            className="w-8 h-6 transition-all duration-300 cursor-pointer hover:scale-110"
            onClick={() => dispatch(setLanguage("en"))}
          >
            <img src={En} alt="en" className="object-cover w-full h-full" />
          </div>
        ) : (
          <div
            className="w-8 h-6 transition-all duration-300 cursor-pointer hover:scale-110"
            onClick={() => dispatch(setLanguage("vi"))}
          >
            <img src={Vi} alt="vi" className="object-cover w-full h-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderRight;
