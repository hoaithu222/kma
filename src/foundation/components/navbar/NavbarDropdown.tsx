import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavbarItems } from "./items";

interface NavbarDropdownProps {
  item: (typeof NavbarItems)[number];
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navClass = () => {
    const isExactMatch = location.pathname === item.path;
    return isExactMatch
      ? "text-primary font-semibold"
      : "text-navbar-text font-medium hover:text-navbar-text-hover transition-colors duration-200";
  };

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer">
        <NavLink to={item.path} className={navClass}>
          <span className="md:text-sm xl:text-base">{t(item.label)}</span>
        </NavLink>
        {item.children && (
          <ChevronDown
            className={`ml-1 h-4 w-4 text-navbar-text transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {item.children && isOpen && (
        <div
          className="absolute left-0 z-50 w-56 mt-2 overflow-hidden border rounded-lg shadow-sm shadow-text-secondary bg-dropdown-bg border-dropdown-border top-full animate-fade-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.children.map((child) => (
            <NavLink
              key={child.label}
              to={child.path}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm transition-colors duration-200 ${
                  isActive
                    ? "bg-dropdown-item-active text-primary font-medium"
                    : "text-dropdown-text hover:bg-dropdown-item-hover hover:text-navbar-text-hover"
                }`
              }
            >
              <div className="flex items-center">
                <span className="md:text-sm xl:text-base">
                  {t(child.label)}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
