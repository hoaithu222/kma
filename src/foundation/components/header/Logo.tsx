import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Logo = () => {
  const { t } = useTranslation("home");
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-16 h-16">
        <img src={logo} alt="logo" className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold text-primary hover:text-primary-dark">
          {t("header.title")}
        </h1>
        <p className="text-sm text-text-secondary hover:text-accent">
          {t("header.description")}
        </p>
      </div>
    </Link>
  );
};

export default Logo;
