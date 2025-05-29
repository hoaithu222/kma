import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Logo = () => {
  const { t } = useTranslation("home");
  return (
    <Link to="/" className="flex items-center gap-1 lg:gap-2">
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
        <img src={logo} alt="logo" className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h1 className="hidden text-xs font-bold lg:text-xl text-primary hover:text-primary-dark md:block ">
          {t("header.title")}
        </h1>
        <p className="hidden text-xs lg:text-sm text-text-secondary hover:text-accent md:block">
          {t("header.description")}
        </p>
      </div>
    </Link>
  );
};

export default Logo;
