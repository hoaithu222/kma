import React from "react";

const SocialIcon = ({
  icon,
  href = "#",
  label,
  color = "blue",
}: {
  icon: React.ReactNode;
  href?: string;
  label: string;
  color?: string;
}) => {
  const colorClasses = {
    blue: "hover:bg-blue-500 hover:shadow-blue-500/50",
    pink: "hover:bg-pink-500 hover:shadow-pink-500/50",
    sky: "hover:bg-sky-400 hover:shadow-sky-400/50",
  };

  return (
    <a
      href={href}
      aria-label={label}
      className={`relative group flex items-center justify-center w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 transition-all duration-500 hover:scale-110 hover:shadow-lg ${colorClasses[color as keyof typeof colorClasses]} hover:border-transparent overflow-hidden`}
    >
      {/* Background animation */}
      <span className="absolute inset-0 transition-all duration-500 scale-0 rounded-full opacity-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 group-hover:opacity-100 group-hover:scale-100"></span>

      {/* Rotating border effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow p-[1px]">
        <span className="w-full h-full bg-gray-900 rounded-full"></span>
      </span>

      {React.cloneElement(icon as React.ReactElement, {
        size: 20,
        className:
          "relative z-10 transition-all duration-500 text-gray-300 group-hover:text-white group-hover:scale-110",
      })}
    </a>
  );
};

export default SocialIcon;
