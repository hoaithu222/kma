import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavbarItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavbarItem[];
  role?: string;
}

interface NavbarDropdownHoverProps {
  item: NavbarItem;
  level?: number;
}

const NavbarDropdownHover: React.FC<NavbarDropdownHoverProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openChild, setOpenChild] = useState<string | null>(null); // State cho mục con đang mở
  const { t } = useTranslation("navbar");
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper function to safely get translation or fallback to label
  const getTranslation = (key: string) => {
    const translation = t(key);
    return translation === key ? key : translation;
  };

  // Toggle dropdown on click
  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Toggle child dropdown
  const handleToggleChild = (label: string) => {
    setOpenChild((prev) => (prev === label ? null : label));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navClass = () => {
    const isExactMatch = location.pathname === item.path;
    return isExactMatch
      ? "text-primary font-semibold"
      : "text-text-primary font-medium hover:text-primary transition-colors duration-200";
  };

  const childNavClass = ({ isActive }: { isActive: boolean }) => {
    return `block px-3 py-2 text-sm transition-colors duration-200 ${
      isActive
        ? "bg-button-outline-hover text-primary font-medium"
        : "text-text-primary hover:bg-background-surface hover:text-primary"
    }`;
  };

  // Hàm kiểm tra đệ quy xem có con nào active không
  const isAnyChildActive = (item: NavbarItem): boolean => {
    if (item.path && location.pathname === item.path) return true;
    if (item.children && item.children.length > 0) {
      return item.children.some(isAnyChildActive);
    }
    return false;
  };

  // Render simple menu item (no children) với cải thiện indentation
  const renderSimpleItem = (child: NavbarItem, currentLevel = 0) => (
    <NavLink
      key={`${child.label}-${child.path}`}
      to={child.path}
      className={childNavClass}
    >
      <div className="flex relative items-center group">
        {/* Indentation visual với border kết nối */}
        {currentLevel > 0 && (
          <div className="flex items-center">
            {/* Vertical connector line */}
            <div className="absolute top-0 bottom-0 left-2 w-px opacity-40 bg-border-primary" />

            {/* Horizontal connector */}
            <div
              className="mr-2 w-3 h-px opacity-40 bg-border-primary"
              style={{ marginLeft: `${(currentLevel - 1) * 20 + 8}px` }}
            />

            {/* Connection dot */}
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        )}

        {/* Left accent bar for level 0 items */}
        {currentLevel === 0 && (
          <div className="mr-3 w-1 h-6 bg-transparent rounded-r transition-colors duration-200 group-hover:bg-primary" />
        )}

        <span
          className="flex-1 text-left md:text-sm xl:text-base"
          style={{
            marginLeft: currentLevel > 0 ? `${currentLevel * 20}px` : "0",
            fontWeight: currentLevel === 0 ? "500" : "400",
          }}
        >
          {getTranslation(child.label)}
        </span>
      </div>
    </NavLink>
  );

  // Render parent item với style đặc biệt và click để mở children
  const renderParentItem = (child: NavbarItem, currentLevel = 0) => {
    const isChildOpen = openChild === child.label;
    const isActive = isAnyChildActive(child);
    return (
      <>
        <div
          key={`${child.label}-${child.path}-parent`}
          className={`block px-3 py-2 text-sm font-medium bg-gradient-to-r border-l-4 border-transparent transition-all duration-200 cursor-pointer text-text-primary hover:bg-background-surface hover:text-primary hover:border-primary hover:from-primary/5 hover:to-transparent select-none text-left ${isActive ? "font-semibold text-primary border-primary bg-primary/5" : ""}`}
          onClick={() => handleToggleChild(child.label)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div
                className="mr-3 w-2 h-2 rounded-full opacity-70 bg-primary"
                style={{ marginLeft: `${currentLevel * 20}px` }}
              />
              <span className="flex-1 text-base font-medium text-left">
                {getTranslation(child.label)}
              </span>
            </div>
            <ChevronRight
              className={`ml-2 w-4 h-4 text-text-secondary transition-transform ${isChildOpen ? "rotate-90 text-primary" : ""}`}
            />
          </div>
        </div>
        {/* Render children nếu đang mở */}
        {isChildOpen && child.children && child.children.length > 0 && (
          <div className="pl-4 ml-2 border-l border-border-primary">
            {renderFlatChildren(child.children, currentLevel + 1)}
          </div>
        )}
      </>
    );
  };

  // Render category separator
  const renderCategorySeparator = (label: string) => (
    <div key={`separator-${label}`} className="mx-4 my-2">
      <div className="h-px bg-gradient-to-r from-transparent to-transparent opacity-50 via-border-primary" />
    </div>
  );

  // Render section spacing
  const renderSectionSpacing = (label: string) => (
    <div
      key={`spacing-${label}`}
      className="mx-4 h-3 bg-gradient-to-b to-transparent rounded from-background-surface/30"
    />
  );

  // Render all children recursively with improved styling
  const renderFlatChildren = (
    children: NavbarItem[],
    currentLevel = 0
  ): React.ReactNode[] => {
    const elements: React.ReactNode[] = [];

    children.forEach((child, index) => {
      if (child.children && child.children.length > 0) {
        // Add spacing before parent (except first item)
        if (index > 0 && currentLevel === 0) {
          elements.push(renderSectionSpacing(`before-${child.label}`));
        }

        // Add parent as clickable item with special styling
        elements.push(renderParentItem(child, currentLevel));

        // Add separator after parent
        elements.push(renderCategorySeparator(child.label));

        // Không render children ở đây nữa, đã render trong renderParentItem nếu mở
        // elements.push(...renderFlatChildren(child.children, currentLevel + 1));

        // Add spacing after group (only for top level)
        if (currentLevel === 0) {
          elements.push(renderSectionSpacing(`after-${child.label}`));
        }
      } else {
        // Simple item
        elements.push(renderSimpleItem(child, currentLevel));
      }
    });

    return elements;
  };

  // If no children, render as simple NavLink
  if (!item.children || item.children.length === 0) {
    return (
      <NavLink to={item.path} className={navClass()}>
        <span className="md:text-sm xl:text-base">
          {getTranslation(item.label)}
        </span>
      </NavLink>
    );
  }

  // Render dropdown with click functionality
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        className="flex items-center cursor-pointer select-none"
        onClick={handleToggleDropdown}
      >
        <div className={navClass()}>
          <span className="md:text-sm xl:text-base">
            {getTranslation(item.label)}
          </span>
        </div>
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : "text-text-primary"
          }`}
        />
      </div>

      {/* Dropdown Content với improved styling */}
      {isOpen && item.children && item.children.length > 0 && (
        <div className="absolute left-0 top-full mt-2 min-w-[320px] max-w-[450px] bg-background-elevated rounded-xl shadow-2xl border border-border-primary z-[9999] transition-all duration-300 transform origin-top backdrop-blur-sm visible opacity-100 scale-100 translate-y-0">
          {/* Dropdown header với gradient */}
          <div className="px-3 py-2 bg-gradient-to-r rounded-t-xl border-b from-primary/10 to-primary/5 border-border-primary">
            <h3 className="text-sm font-medium text-left opacity-80 text-text-primary">
              {getTranslation(item.label)}
            </h3>
          </div>

          {/* Dropdown content */}
          <div className="py-1 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-border-primary scrollbar-track-transparent">
            {renderFlatChildren(item.children)}
          </div>

          {/* Dropdown footer gradient */}
          <div className="h-2 bg-gradient-to-b from-transparent rounded-b-xl to-background-surface/50" />
        </div>
      )}
    </div>
  );
};

export default NavbarDropdownHover;
