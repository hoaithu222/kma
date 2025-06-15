import { NavLink } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { useTranslation } from "react-i18next";
import { ContactItems, NavbarItems } from "./items";
import { FaHome, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobileMenuOpen } from "@/app/store/slices/navbar";
import clsx from "clsx";
import { isMobileMenuOpenSelector } from "@/app/store/slices/navbar/selectors";
import { IResponseCategory } from "@/core/api/category/types";
import { selectCategory } from "@/features/home/slice/home.selector";

const NavbarMobile = () => {
  const { t } = useTranslation("navbar");
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector(isMobileMenuOpenSelector);

  const onClose = () => {
    dispatch(setIsMobileMenuOpen(false));
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full px-3 py-2 md:px-4 md:py-3 rounded-lg text-left transition-all duration-300 ${
      isActive
        ? "bg-primary text-text-on-primary font-semibold shadow-lg transform scale-105"
        : "text-text-primary font-medium hover:bg-background-surface hover:text-primary hover:shadow-md"
    }`;

  const homeClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center w-full px-3 py-2 md:px-4 md:py-3 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-primary text-text-on-primary shadow-lg"
        : "text-text-primary hover:bg-background-surface hover:text-primary"
    }`;
  const category: any = useSelector(selectCategory);
  const studentSubCategory = category.find(
    (item: IResponseCategory) => item.slug === "sinh-vien"
  );
  const postSubCategory = category.find(
    (item: IResponseCategory) => item.slug === "tin-tuc"
  );
  const eventSubCategory = category.find(
    (item: IResponseCategory) => item.slug === "su-kien"
  );

  const studentSubCategoryItems =
    studentSubCategory?.subCategories.map((item: any) => ({
      label: item.name,
      path: `/student/${item.id}`,
    })) || [];
  const postSubCategoryItems =
    postSubCategory?.subCategories.map((item: any) => ({
      label: item.name,
      path: `/post/${item.id}`,
    })) || [];
  const eventSubCategoryItems =
    eventSubCategory?.subCategories.map((item: any) => ({
      label: item.name,
      path: `/events/${item.id}`,
    })) || [];
  const admissionSubCategory = category.find(
    (item: IResponseCategory) => item.slug === "tuyen-sinh"
  );
  const admissionSubCategoryItems =
    admissionSubCategory?.subCategories.map((item: any) => ({
      label: item.name,
      path: `/admission/${item.id}`,
    })) || [];
  const navbarItems = [
    ...NavbarItems,
    {
      label: "Tuyển sinh",
      path: "/admission/57",
      icon: "FaUser",
      children: admissionSubCategoryItems,
    },
    {
      label: "Sinh viên",
      path: "/student/42",
      icon: "FaUser",
      children: studentSubCategoryItems,
    },
    {
      label: "Bài viết",
      path: "/post/40",
      icon: "FaUser",
      children: postSubCategoryItems,
    },
    {
      label: "Sự kiện",
      path: "/events/49",
      icon: "FaUser",
      children: eventSubCategoryItems,
    },

    ...ContactItems,
  ];

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "bg-opacity-50 visible" : "bg-opacity-0 invisible"
        )}
        onClick={onClose}
      />

      {/* Mobile Menu with slide animation */}
      <nav
        className={clsx(
          "fixed top-16 sm:top-24  left-0 z-50 h-full bg-background-elevated shadow-2xl",
          "w-56 sm:w-56 md:w-80", // Responsive width
          "transition-transform duration-300 ease-in-out",
          // Translate animation
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform -translate-x-8"
        )}
      >
        {/* Header with slide-down animation */}
        <div
          className={clsx(
            "flex items-center justify-between p-2 sm:p-3 md:p-6 text-text-on-primary bg-gradient-to-r from-primary to-primary-dark",
            "transition-all duration-500 ease-out",
            isMobileMenuOpen
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-4 opacity-0"
          )}
        >
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 transition-all duration-200 rounded-full hover:bg-white hover:bg-opacity-20 hover:rotate-90"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Content with staggered animation */}
        <div className="flex flex-col h-full bg-background-surface">
          <div className="flex-1 py-3 overflow-y-auto">
            <div className="px-3 space-y-2">
              {/* Home Link with delay */}
              <div
                className={clsx(
                  "transition-all duration-300 ease-out",
                  isMobileMenuOpen
                    ? "transform translate-x-0 opacity-100"
                    : "transform -translate-x-8 opacity-0"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
              >
                <NavLink to="/" className={homeClass} onClick={onClose}>
                  <FaHome className="w-5 h-5 mr-3 text-primary" />
                  <span className="font-medium">Trang chủ</span>
                </NavLink>
              </div>

              {/* Divider with delay */}
              <div
                className={clsx(
                  "my-4 border-t border-border-primary transition-all duration-300",
                  isMobileMenuOpen
                    ? "transform scale-x-100 opacity-100"
                    : "transform scale-x-0 opacity-0"
                )}
                style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
              />

              {/* Navigation Items with staggered delays */}
              {navbarItems.map((item, index) => (
                <div
                  key={item.label}
                  className={clsx(
                    "transition-all duration-300 ease-out",
                    isMobileMenuOpen
                      ? "transform translate-x-0 opacity-100"
                      : "transform -translate-x-8 opacity-0"
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${300 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  {item.children && item.children.length > 0 ? (
                    <div className="mb-2">
                      <NavbarDropdown
                        item={item}
                        isMobile={true}
                        onItemClick={onClose}
                      />
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={navClass}
                      onClick={onClose}
                    >
                      <span className="text-base font-medium">
                        {t(item.label)}
                      </span>
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer with slide-up animation */}
          <div
            className={clsx(
              "p-6 bg-background-elevated border-t border-border-primary",
              "transition-all duration-500 ease-out",
              isMobileMenuOpen
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? "600ms" : "0ms" }}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMobile;
