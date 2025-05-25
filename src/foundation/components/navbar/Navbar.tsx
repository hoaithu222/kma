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
      : "text-navbar-text font-medium hover:text-navbar-text-hover text-md transition-colors duration-200";

  return (
    <nav className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="mr-3">
            <FaHome className="w-6 h-6 text-primary" />
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 transition-colors rounded-md text-navbar-text hover:text-navbar-text-hover hover:bg-navbar-active-bg">
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
