import { useTranslation } from "react-i18next";
import FooterLink from "./FooterLink";
import logo from "@/assets/logo.png";

import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
} from "lucide-react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="overflow-hidden relative text-gray-100 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="overflow-hidden absolute inset-0">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-r rounded-full animate-pulse from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-gradient-to-r rounded-full delay-1000 animate-pulse from-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r rounded-full delay-500 animate-pulse transform -translate-x-1/2 -translate-y-1/2 from-cyan-500/10 to-blue-500/10"></div>
      </div>

      {/* Top gradient border with animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-80">
        <div className="h-full bg-gradient-to-r from-transparent to-transparent via-white/30 animate-shimmer"></div>
      </div>

      {/* Header section */}
      <div className="container relative px-6 pt-12 mx-auto">
        <div className="flex flex-col justify-between items-center mb-12 md:flex-row">
          <div className="flex items-center mb-6 space-x-4 md:mb-0">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full  p-0.5 group-hover:scale-110 transition-all duration-500">
                <div className="flex justify-center items-center w-full h-full rounded-full">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-secondary-light">
                    <img src={logo} alt="logo" className="w-full h-full" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30"></div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-200">
                {t("header.description")}
              </h2>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid relative z-10 grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Units */}
          <div className="space-y-6">
            <h3 className="inline-block relative text-xl font-bold tracking-wide text-white cursor-pointer group">
              {t("footer.units.title")}
              <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-t-2 border-l-2 border-blue-400 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
              <span className="absolute -right-1 -bottom-1 w-0 h-0 border-r-2 border-b-2 border-purple-500 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
            </h3>
            <ul className="space-y-2">
              <FooterLink
                text={t("footer.units.unit1")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.units.unit2")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.units.unit3")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.units.unit4")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.units.unit5")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.units.unit6")}
                icon={<ChevronRight />}
              />
            </ul>
          </div>

          {/* Column 2 - Training */}
          <div className="space-y-6">
            <h3 className="inline-block relative text-xl font-bold tracking-wide text-white cursor-pointer group">
              {t("footer.training.title")}
              <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-t-2 border-l-2 border-blue-400 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
              <span className="absolute -right-1 -bottom-1 w-0 h-0 border-r-2 border-b-2 border-purple-500 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
            </h3>
            <ul className="space-y-2">
              <FooterLink
                text={t("footer.training.training1")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.training.training2")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.training.training3")}
                icon={<ChevronRight />}
              />
            </ul>
          </div>

          {/* Column 3 - System */}
          <div className="space-y-6">
            <h3 className="inline-block relative text-xl font-bold tracking-wide text-white cursor-pointer group">
              {t("footer.system.title")}
              <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-t-2 border-l-2 border-blue-400 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
              <span className="absolute -right-1 -bottom-1 w-0 h-0 border-r-2 border-b-2 border-purple-500 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
            </h3>
            <ul className="space-y-2">
              <FooterLink
                text={t("footer.system.system1")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.system.system2")}
                icon={<ChevronRight />}
              />
              <FooterLink
                text={t("footer.system.system3")}
                icon={<ChevronRight />}
              />
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h3 className="inline-block relative text-xl font-bold tracking-wide text-white cursor-pointer group">
              {t("footer.contact.title")}
              <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              <span className="absolute -top-1 -left-1 w-0 h-0 border-t-2 border-l-2 border-blue-400 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
              <span className="absolute -right-1 -bottom-1 w-0 h-0 border-r-2 border-b-2 border-purple-500 transition-all duration-500 group-hover:w-6 group-hover:h-6"></span>
            </h3>

            {/* Contact Information */}
            <ul className="space-y-4">
              <li className="cursor-pointer group">
                <div className="flex items-center p-3 space-x-4 rounded-lg border backdrop-blur-sm transition-all duration-500 bg-gray-800/30 border-gray-700/30 hover:bg-gray-700/50 hover:border-blue-400/50 hover:transform hover:translate-x-2">
                  <span className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Mail size={18} />
                  </span>
                  <span className="text-sm text-gray-200 transition-all duration-300 group-hover:text-white">
                    {t("footer.contact.contact1")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </div>
              </li>
              <li className="cursor-pointer group">
                <div className="flex items-center p-3 space-x-4 rounded-lg border backdrop-blur-sm transition-all duration-500 bg-gray-800/30 border-gray-700/30 hover:bg-gray-700/50 hover:border-blue-400/50 hover:transform hover:translate-x-2">
                  <span className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-br from-green-400 to-blue-500 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <Phone size={18} />
                  </span>
                  <span className="text-sm text-gray-200 transition-all duration-300 group-hover:text-white">
                    {t("footer.contact.contact2")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-green-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </div>
              </li>
              <li className="cursor-pointer group">
                <div className="flex items-center p-3 space-x-4 rounded-lg border backdrop-blur-sm transition-all duration-500 bg-gray-800/30 border-gray-700/30 hover:bg-gray-700/50 hover:border-blue-400/50 hover:transform hover:translate-x-2">
                  <span className="flex justify-center items-center w-10 h-10 text-white bg-gradient-to-br from-purple-400 to-pink-500 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <MapPin size={18} />
                  </span>
                  <span className="text-sm text-gray-200 transition-all duration-300 group-hover:text-white">
                    {t("footer.contact.contact3")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="text-purple-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </div>
              </li>
            </ul>

            {/* Social Media Section */}
            <div className="pt-6">
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-gray-400">
                FOLLOW US
              </h4>
              <div className="flex space-x-4">
                <SocialIcon icon={<Facebook />} label="Facebook" color="blue" />
                <SocialIcon
                  icon={<Instagram />}
                  label="Instagram"
                  color="pink"
                />
                <SocialIcon icon={<Twitter />} label="Twitter" color="sky" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="relative py-8 mt-16 border-t backdrop-blur-sm border-gray-700/50 bg-gray-900/50">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-4 text-sm text-gray-400 md:mb-0">
              {t("footer.copyright")}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
