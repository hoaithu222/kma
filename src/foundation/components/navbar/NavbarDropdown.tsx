import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavbarItems } from "./items";

interface NavbarDropdownProps {
  item: (typeof NavbarItems)[number];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  item,
  isMobile = false,
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = () => {
    if (isMobile) {
      setIsOpen(false);
      onItemClick?.();
    }
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

    if (isMobile) {
      return `flex items-center justify-between w-full px-4 py-3 text-left font-medium rounded-lg transition-all duration-200 ${
        isExactMatch
          ? "bg-primary text-text-on-primary shadow-lg"
          : "text-text-primary hover:bg-background-surface hover:text-primary"
      }`;
    }

    return isExactMatch
      ? "text-primary font-semibold"
      : "text-text-primary font-medium hover:text-primary transition-colors duration-200";
  };

  const childNavClass = ({ isActive }: { isActive: boolean }) => {
    if (isMobile) {
      return `block w-full px-4 py-2 text-sm rounded-md transition-all duration-200 ${
        isActive
          ? "bg-button-outline-hover text-primary font-medium shadow-sm"
          : "text-text-secondary hover:bg-background-surface hover:text-primary"
      }`;
    }

    return `block px-4 py-3 text-sm transition-colors duration-200 ${
      isActive
        ? "bg-button-outline-hover text-primary font-medium"
        : "text-text-primary hover:bg-background-surface hover:text-primary"
    }`;
  };

  if (isMobile) {
    return (
      <div className="w-full">
        {/* Mobile Dropdown Trigger */}
        <div onClick={toggleDropdown} className="cursor-pointer">
          <div className={navClass()}>
            <NavLink
              to={item.path}
              className="flex-1"
              onClick={handleItemClick}
            >
              <span className="text-base">{t(item.label)}</span>
            </NavLink>
            {item.children && (
              <div className="p-1 ml-2">
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-text-secondary" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-text-secondary" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Content */}
        {item.children && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-2 pl-4 space-y-1 rounded-lg bg-background-surface">
              {item.children.map((child) => (
                <NavLink
                  key={child.label}
                  to={child.path}
                  onClick={handleItemClick}
                  className={childNavClass}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 mr-3 rounded-full bg-border-primary"></span>
                    {t(child.label)}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop version
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
            className={`ml-1 h-4 w-4 text-text-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {item.children && isOpen && (
        <div
          className="absolute left-0 z-[9999] w-64 mt-2 overflow-hidden border rounded-lg shadow-lg bg-background-elevated border-border-primary top-full animate-fade-in backdrop-blur-sm"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-2">
            {item.children.map((child, _index) => (
              <NavLink
                key={child.label}
                to={child.path}
                className={childNavClass}
              >
                <div className="flex items-center group">
                  <div className="w-1 h-6 mr-3 transition-colors duration-200 bg-transparent rounded-r group-hover:bg-primary"></div>
                  <span className="flex-1 md:text-sm xl:text-base">
                    {t(child.label)}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
