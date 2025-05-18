// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Mail,
//   Phone,
//   MapPin,
//   ChevronRight,
//   ExternalLink
// } from "lucide-react";

import { ChevronRight } from "lucide-react";

// Enhanced FooterLink Component
const FooterLink = ({ text, icon, href = "#" }: { text: string; icon?: React.ReactNode; href?: string }) => {
  return (
    <li className="group">
      <a
        href={href}
        className="flex items-center py-1 text-sm text-gray-200 transition-all duration-300 hover:text-white"
      >
        <span className="flex items-center justify-center mr-2 transition-all duration-300 opacity-75 text-secondary group-hover:opacity-100 group-hover:translate-x-1">
          {icon || <ChevronRight size={14} />}
        </span>
        <span className="relative overflow-hidden">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
        </span>
      </a>
    </li>
  );
};

export default FooterLink;
