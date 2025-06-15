import React, { useState } from "react";
import { safeImage } from "../utils/safeValue";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(safeImage(src, fallbackSrc));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${isLoading ? "opacity-0" : "opacity-100 w-full h-full object-cover"} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

export default SafeImage;
