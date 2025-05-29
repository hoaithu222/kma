import { NavLink } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { useTranslation } from "react-i18next";
import { NavbarItems } from "./items";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { t } = useTranslation("navbar");

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-text-primary font-medium hover:text-primary text-md transition-colors duration-200";

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between h-16">
        <NavLink to="/" className="mr-3">
          <FaHome className="hidden w-6 h-6 text-primary sm:block" />
        </NavLink>
        <div className="items-center hidden space-x-4 md:flex">
          {NavbarItems.map((item) => (
            <div key={item.label}>
              {item.children && item.children.length > 0 ? (
                <NavbarDropdown item={item} />
              ) : (
                <NavLink to={item.path} className={navClass}>
                  <span className="md:text-sm xl:text-base">
                    {t(item.label)}
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
