import { MenuIcon, MoonIcon, SearchIcon, SunIcon } from "lucide-react";
import InputSearch from "../inputs/InputSearch";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { toggleTheme } from "@/app/store/slices/theme";
import { setLanguage } from "@/app/store/slices/language";
import Vi from "@/assets/vi.png";
import En from "@/assets/en.png";
import { isTablet } from "@/shared/utils/deviceType";
import { Language } from "@/app/store/slices/language/types";
import { setIsMobileMenuOpen } from "@/app/store/slices/navbar";
import { isMobileMenuOpenSelector } from "@/app/store/slices/navbar/selectors";

const HeaderRight = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const { theme } = useSelector((state: RootState) => state.theme);
  const { language } = useSelector((state: RootState) => state.language);
  const isMobileMenuOpen = useSelector(isMobileMenuOpenSelector);

  const handleToggleNavbar = () => {
    dispatch(setIsMobileMenuOpen(!isMobileMenuOpen));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang as Language));
  };

  return (
    <div className="flex items-center justify-end flex-1 gap-1 lg:gap-2">
      {/* Search Input - Hidden on tablet */}
      {!isTablet && (
        <InputSearch
          placeholder="Tìm kiếm"
          name="search"
          onChange={handleSearch}
          value={search}
          icon={
            <SearchIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-text-link-hover" />
          }
        />
      )}

      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={handleToggleTheme}
          className="p-1 transition-colors rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <SunIcon className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-text-secondary" />
          ) : (
            <MoonIcon className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-text-secondary" />
          )}
        </button>

        {/* Language Toggle */}
        <button
          onClick={() => handleLanguageChange(language === "vi" ? "en" : "vi")}
          className="transition-all duration-300 hover:scale-110"
          aria-label={`Switch to ${language === "vi" ? "English" : "Vietnamese"}`}
        >
          {language === "vi" ? (
            <div className="w-4 h-3 sm:w-6 sm:h-4 lg:w-8 lg:h-6">
              <img
                src={En}
                alt="Switch to English"
                className="object-cover w-full h-full rounded-sm"
              />
            </div>
          ) : (
            <div className="w-4 h-3 sm:w-6 sm:h-4 lg:w-8 lg:h-6">
              <img
                src={Vi}
                alt="Switch to Vietnamese"
                className="object-cover w-full h-full rounded-sm"
              />
            </div>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleNavbar}
          className="p-1 transition-colors rounded md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="w-6 h-6 text-text-secondary" />
        </button>
      </div>
    </div>
  );
};

export default HeaderRight;
