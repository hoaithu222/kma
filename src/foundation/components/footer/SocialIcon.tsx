import React from "react";

const SocialIcon = ({
  icon,
  href = "#",
  label,
}: {
  icon: React.ReactNode;
  href?: string;
  label: string;
}) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="relative flex items-center justify-center w-10 h-10 overflow-hidden transition-all duration-300 rounded-full bg-background-muted hover:bg-white group hover:rotate-180"
    >
      <span className="absolute inset-0 transition-transform duration-500 rounded-full opacity-0 bg-secondary group-hover:opacity-10 group-hover:scale-110"></span>
      {React?.cloneElement(icon as React.ReactElement, {
        size: 18,
        className:
          "transition-all duration-300 text-footer-text group-hover:text-primary",
      })}
    </a>
  );
};

export default SocialIcon;
