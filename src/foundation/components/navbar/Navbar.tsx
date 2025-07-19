import { NavLink } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { useTranslation } from "react-i18next";
import { ContactItems, NavbarItems } from "./items";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

import { useHome } from "@/features/home/hooks/useHook";
import { useEffect } from "react";
import { selectMenuSelector } from "@/features/menu/slice/menu.selector";
import { dataMenu } from "@/features/menu/slice/menu.types";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const { getCategoryDispatch } = useHome();
  useEffect(() => {
    getCategoryDispatch();
  }, []);

  // Helper function to safely get translation or fallback to label
  const getTranslation = (key: string) => {
    const translation = t(key);
    // If the translation returns the same key, it means the key doesn't exist
    // In that case, return the key itself as the text
    return translation === key ? key : translation;
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-text-primary font-medium hover:text-primary text-md transition-colors duration-200";

  // const studentSubCategory = category.find(
  //   (item: IResponseCategory) => item.slug === "sinh-vien"
  // );
  // console.log(studentSubCategory?.subCategories);
  // const postSubCategory = category.find(
  //   (item: IResponseCategory) => item.slug === "tin-tuc"
  // );
  // console.log(postSubCategory?.subCategories);
  // const eventSubCategory = category.find(
  //   (item: IResponseCategory) => item.slug === "su-kien"
  // );

  // const studentSubCategoryItems =
  //   studentSubCategory?.subCategories.map((item: any) => ({
  //     label: item.name,
  //     path: `/student/${item.id}`,
  //   })) || [];

  // const postSubCategoryItems =
  //   postSubCategory?.subCategories.map((item: any) => ({
  //     label: item.name,
  //     path: `/post/${item.id}`,
  //   })) || [];

  // const eventSubCategoryItems =
  //   eventSubCategory?.subCategories.map((item: any) => ({
  //     label: item.name,
  //     path: `/events/${item.id}`,
  //   })) || [];
  // const researchSubCategory = category.find(
  //   (item: IResponseCategory) => item.slug === "nghien-cuu"
  // );

  // const researchSubCategoryItems =
  //   researchSubCategory?.subCategories.map((item: any) => ({
  //     label: item.name,
  //     path: `/research/${item.id}`,
  //   })) || [];
  // // tuyển sinh
  // const admissionSubCategory = category.find(
  //   (item: IResponseCategory) => item.slug === "tuyen-sinh"
  // );
  // const admissionSubCategoryItems =
  //   admissionSubCategory?.subCategories.map((item: any) => ({
  //     label: item.name,
  //     path: `/admission/${item.id}`,
  //   })) || [];
  const menu = useSelector(selectMenuSelector);

  const items = menu?.map((item: dataMenu) => {
    return {
      label: item.name,
      path: `/base-post/${item.id}`,

      children: item.children.map((child: any) => {
        return {
          label: child.name,
          path: `/base-post/${child.id}`,
        };
      }),
    };
  });

  const navbarItems = [...NavbarItems, ...items, ...ContactItems];

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
                <NavbarDropdown item={item as any} />
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
