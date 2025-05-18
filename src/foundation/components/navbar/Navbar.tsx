import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { t } = useTranslation("home");

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-primary font-bold"
      : "text-text-navbar font-medium hover:text-primary-4";

  return (
    <div className="container flex justify-center p-4 mx-auto">
      <div className="flex items-center justify-center gap-4 ">
        <NavLink to="/" className={navClass}>
          {t("navigation.home")}
        </NavLink>
        <NavLink to="/about" className={navClass}>
          {t("navigation.about")}
        </NavLink>
        <NavLink to="/blog" className={navClass}>
          {t("navigation.blog")}
        </NavLink>
        <NavLink to="/news" className={navClass}>
          {t("navigation.news")}
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          {t("navigation.contact")}
        </NavLink>
        <NavLink to="/forum" className={navClass}>
          {t("navigation.forum")}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
