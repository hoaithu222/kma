import React from "react";
import { ChevronRight } from "lucide-react";

// Enhanced FooterLink Component
const FooterLink = ({
  text,
  icon,
  href = "#",
}: {
  text: string;
  icon?: React.ReactNode;
  href?: string;
}) => {
  return (
    <li className="group">
      <a
        href={href}
        className="flex items-center py-2 text-sm text-gray-200 transition-all duration-500 transform hover:text-white hover:translate-x-2"
      >
        <span className="flex justify-center items-center mr-3 text-blue-400 opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12">
          {icon || <ChevronRight size={14} />}
        </span>
        <span className="overflow-hidden relative">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
          <span className="absolute inset-0 bg-gradient-to-r opacity-0 transition-all duration-500 -skew-x-12 from-blue-400/10 to-purple-500/10 group-hover:opacity-100"></span>
        </span>
      </a>
    </li>
  );
};
export default FooterLink;
