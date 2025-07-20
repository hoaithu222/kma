import { NavLink } from "react-router-dom";

import NavbarDropdownHover from "./NavbarDropdownHover";
import { useTranslation } from "react-i18next";
import { ContactItems, NavbarItems } from "./items";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useHome } from "@/features/home/hooks/useHook";
import { useEffect } from "react";
import { selectMenuSelector } from "@/features/menu/slice/menu.selector";
import { dataMenu } from "@/features/menu/slice/menu.types";

interface NavbarItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavbarItem[];
  role?: string;
}

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const { getCategoryDispatch } = useHome();

  useEffect(() => {
    getCategoryDispatch();
  }, []);

  // Helper function to safely get translation or fallback to label
  const getTranslation = (key: string) => {
    const translation = t(key);
    return translation === key ? key : translation;
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-text-primary font-medium hover:text-primary text-md transition-colors duration-200";

  const menu = useSelector(selectMenuSelector);

  // Hàm đệ quy để chuyển đổi menu data thành NavbarItem structure
  const convertMenuToNavbarItems = (menuItems: dataMenu[]): NavbarItem[] => {
    return (
      menuItems?.map((item: dataMenu) => {
        const navbarItem: NavbarItem = {
          label: item.name,
          path: `/base-post/${item.id}`,
          icon: "FaFileAlt",
        };

        // Xử lý children đệ quy
        if (item.children && item.children.length > 0) {
          navbarItem.children = convertMenuToNavbarItems(item.children);
        }

        return navbarItem;
      }) || []
    );
  };

  // Chuyển đổi menu data thành NavbarItem structure
  const dynamicItems = convertMenuToNavbarItems(menu);
  const navbarItems = [...NavbarItems, ...dynamicItems, ...ContactItems];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center h-16">
        <NavLink to="/" className="mr-3">
          <FaHome className="hidden w-6 h-6 text-primary sm:block" />
        </NavLink>
        <div className="hidden items-center space-x-4 md:flex">
          {navbarItems.map((item) => (
            <div key={item.label}>
              {item.children && item.children.length > 0 ? (
                <NavbarDropdownHover item={item as NavbarItem} />
              ) : (
                <NavLink to={item.path} className={navClass}>
                  <span className="md:text-sm xl:text-base">
                    {getTranslation(item.label)}
                  </span>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
