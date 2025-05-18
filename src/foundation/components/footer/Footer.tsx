import { useTranslation } from "react-i18next";

import {
  // FacebookIcon,
  // InstagramIcon,
  Phone,
  Mail,

  MapPin,
  Instagram,
  Twitter,
  Facebook,
  // ChevronRight,
} from "lucide-react";

import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";
import { FaRegHandPointRight } from 'react-icons/fa6';

const Footer = () => {
  const { t } = useTranslation("home");
  return (
    <footer className="p-2 overflow-x-hidden bg-gradient-to-br from-primary-2 via-primary-3 to-primary-6 text-text-on-primary">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-secondary to-transparent"></div>
      <div className="absolute w-32 h-32 bg-white rounded-full top-10 left-10 opacity-5 blur-3xl"></div>
      <div className="absolute w-40 h-40 rounded-full bottom-20 right-10 bg-secondary opacity-5 blur-3xl"></div>

      <div className="container px-6 py-8 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div className="space-y-6">
            <h3 className="relative inline-block text-xl font-bold tracking-wide">
              {t("footer.units.title")}
              <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink text={t("footer.units.unit1")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.units.unit2")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.units.unit3")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.units.unit4")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.units.unit5")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.units.unit6")} icon={<FaRegHandPointRight />} />
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h3 className="relative inline-block text-xl font-bold tracking-wide">
              {t("footer.training.title")}
              <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink text={t("footer.training.training1")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.training.training2")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.training.training3")}  icon={<FaRegHandPointRight />}/>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h3 className="relative inline-block text-xl font-bold tracking-wide">
              {t("footer.system.title")}
              <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink text={t("footer.system.system1")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.system.system2")} icon={<FaRegHandPointRight />} />
              <FooterLink text={t("footer.system.system3")} icon={<FaRegHandPointRight />} />
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h3 className="relative inline-block text-xl font-bold tracking-wide">
              {t("footer.contact.title")}
              <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-secondary"></span>
            </h3>

            {/* Contact Information */}
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <span className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full bg-primary-5 text-secondary group-hover:bg-secondary group-hover:text-white">
                  <Mail size={16} />
                </span>
                <span className="text-sm transition-all duration-300 group-hover:text-secondary">
                  {t("footer.contact.contact1")}
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <span className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full bg-primary-5 text-secondary group-hover:bg-secondary group-hover:text-white">
                  <Phone size={16} />
                </span>
                <span className="text-sm transition-all duration-300 group-hover:text-secondary">
                  {t("footer.contact.contact2")}
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <span className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full bg-primary-5 text-secondary group-hover:bg-secondary group-hover:text-white">
                  <MapPin size={16} />
                </span>
                <span className="text-sm transition-all duration-300 group-hover:text-secondary">
                  {t("footer.contact.contact3")}
                </span>
              </li>
            </ul>

            {/* Social Media Section */}
            <div className="">
              <div className="flex space-x-3">
                <SocialIcon icon={<Facebook />} label="Facebook" />
                <SocialIcon icon={<Instagram />} label="Instagram" />
                <SocialIcon icon={<Twitter />} label="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="py-4 mt-6 border-t border-white border-opacity-20">
        <div className="container px-4 mx-auto">
          <div className="text-sm text-center text-white">
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
