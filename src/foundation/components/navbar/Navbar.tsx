import { NavLink } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { useTranslation } from "react-i18next";
import { NavbarItems } from "./items";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCategory } from "@/features/home/slice/home.selector";
import { IResponseCategory } from "@/core/api/category/types";
import { useHome } from "@/features/home/hooks/useHook";
import { useEffect } from "react";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const { getCategoryDispatch } = useHome();
  useEffect(() => {
    getCategoryDispatch();
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-text-primary font-medium hover:text-primary text-md transition-colors duration-200";
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
      path: `/posts/${item.id}`,
    })) || [];
  const eventSubCategoryItems =
    eventSubCategory?.subCategories.map((item: any) => ({
      label: item.name,
      path: `/events/${item.id}`,
    })) || [];
  const navbarItems = [
    ...NavbarItems,
    {
      label: "Sinh viên",
      path: "/student",
      icon: "FaUser",
      children: studentSubCategoryItems,
    },
    {
      label: "Bài viết",
      path: "/post",
      icon: "FaUser",
      children: postSubCategoryItems,
    },
    {
      label: "Sự kiện",
      path: "/event",
      icon: "FaUser",
      children: eventSubCategoryItems,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between h-16">
        <NavLink to="/" className="mr-3">
          <FaHome className="hidden w-6 h-6 text-primary sm:block" />
        </NavLink>
        <div className="items-center hidden space-x-4 md:flex">
          {navbarItems.map((item) => (
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
