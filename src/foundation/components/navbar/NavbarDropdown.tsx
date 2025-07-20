import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavbarItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavbarItem[];
  role?: string;
}

interface NavbarDropdownProps {
  item: NavbarItem;
  isMobile?: boolean;
  onItemClick?: () => void;
  level?: number;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  item,
  isMobile = false,
  onItemClick,
  level = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Helper function to safely get translation or fallback to label
  const getTranslation = (key: string) => {
    const translation = t(key);
    return translation === key ? key : translation;
  };

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
      }, 150); // Tăng delay để tránh flicker
    }
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      // For desktop, toggle on click as well
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
        level > 0 ? `ml-${level * 4}` : ""
      } ${
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
        level > 0 ? `ml-${(level + 1) * 2}` : ""
      } ${
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

  // Render nested dropdown for children with children
  const renderNestedDropdown = (child: NavbarItem, childIndex: number) => {
    if (child.children && child.children.length > 0) {
      return (
        <NavbarDropdown
          key={`${child.label}-${childIndex}`}
          item={child}
          isMobile={isMobile}
          onItemClick={onItemClick}
          level={level + 1}
        />
      );
    }

    return (
      <NavLink
        key={child.label}
        to={child.path}
        onClick={handleItemClick}
        className={childNavClass}
      >
        {isMobile ? (
          <span className="flex items-center">
            {getTranslation(child.label)}
          </span>
        ) : (
          <div className="flex items-center group">
            <div className="mr-3 w-1 h-6 bg-transparent rounded-r transition-colors duration-200 group-hover:bg-primary"></div>
            <span className="flex-1 md:text-sm xl:text-base">
              {getTranslation(child.label)}
            </span>
          </div>
        )}
      </NavLink>
    );
  };

  // Render nested dropdown for desktop with proper hover handling
  const renderNestedDropdownDesktop = (
    child: NavbarItem,
    childIndex: number
  ) => {
    if (child.children && child.children.length > 0) {
      return (
        <div
          key={`${child.label}-${childIndex}`}
          className="relative group/nested"
          onMouseEnter={(e) => {
            e.stopPropagation();
            // Keep parent dropdown open when hovering nested items
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            // Don't close parent dropdown when leaving nested items
          }}
        >
          <div className="flex justify-between items-center px-4 py-3 text-sm transition-colors duration-200 cursor-pointer hover:bg-background-surface hover:text-primary">
            <div className="flex items-center group">
              <div className="mr-3 w-1 h-6 bg-transparent rounded-r transition-colors duration-200 group-hover:bg-primary"></div>
              <span className="flex-1 md:text-sm xl:text-base">
                {getTranslation(child.label)}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-text-secondary" />
          </div>

          {/* Nested submenu */}
          <div className="absolute left-full top-0 invisible group-hover/nested:visible opacity-0 group-hover/nested:opacity-100 transition-all duration-200 z-[10000]">
            <div className="overflow-hidden ml-1 w-56 rounded-lg border shadow-lg backdrop-blur-sm bg-background-elevated border-border-primary">
              <div className="py-2">
                {child.children.map((grandChild, grandChildIndex) => (
                  <NavLink
                    key={`${grandChild.label}-${grandChildIndex}`}
                    to={grandChild.path}
                    className={childNavClass}
                  >
                    <div className="flex items-center group">
                      <div className="mr-3 w-1 h-6 bg-transparent rounded-r transition-colors duration-200 group-hover:bg-primary"></div>
                      <span className="flex-1 md:text-sm xl:text-base">
                        {getTranslation(grandChild.label)}
                      </span>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <NavLink
        key={child.label}
        to={child.path}
        onClick={handleItemClick}
        className={childNavClass}
      >
        <div className="flex items-center group">
          <div className="mr-3 w-1 h-6 bg-transparent rounded-r transition-colors duration-200 group-hover:bg-primary"></div>
          <span className="flex-1 md:text-sm xl:text-base">
            {getTranslation(child.label)}
          </span>
        </div>
      </NavLink>
    );
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
              <span className={`text-base ${level > 0 ? "text-sm" : ""}`}>
                {getTranslation(item.label)}
              </span>
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
              isOpen ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`p-1 space-y-1 rounded-lg lg:p-2 bg-background-surface ${
                level > 0
                  ? `ml-${level * 2} border-l border-border-subtle`
                  : "lg:pl-4"
              }`}
            >
              {item.children.map((child, childIndex) =>
                renderNestedDropdown(child, childIndex)
              )}
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
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <NavLink to={item.path} className={navClass}>
          <span className="md:text-sm xl:text-base">
            {getTranslation(item.label)}
          </span>
        </NavLink>
        {item.children && (
          <ChevronDown
            className={`ml-1 h-4 w-4 text-text-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {item.children && (
        <div
          className={`absolute left-0 z-[9999] mt-2 overflow-hidden border rounded-lg shadow-lg bg-background-elevated border-border-primary top-full transition-all duration-200 ease-in-out ${
            level === 0 ? "w-64" : "w-56"
          } ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-2">
            {item.children.map((child, childIndex) => (
              <div
                key={`${child.label}-${childIndex}`}
                className="relative group/nested"
              >
                {child.children && child.children.length > 0
                  ? // Nested dropdown for desktop
                    renderNestedDropdownDesktop(child, childIndex)
                  : renderNestedDropdown(child, childIndex)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
