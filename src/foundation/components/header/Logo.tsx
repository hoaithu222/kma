import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation("home");
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-20">
        <img src={logo} alt="logo" className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold text-primary hover:text-primary-6">
          {t("header.title")}
        </h1>
        <p className="text-sm text-text-on-primary hover:text-secondary-5">
          {t("header.description")}
        </p>
      </div>
    </div>
  );
};

export default Logo;
