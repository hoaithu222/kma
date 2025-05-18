import { useMediaQuery } from "react-responsive";
import { imagesDesktop } from "../utils/image";
import { imagesMobile } from "../utils/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/foundation/components/buttons/Button";

const Banner = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const images = isDesktop ? imagesDesktop : imagesMobile;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="relative w-full overflow-hidden h-96">
      {/* Slider container */}
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images?.map((image) => (
          <div key={image.id} className="flex-shrink-0 w-full h-full">
            <img
              src={image.image}
              alt={`Banner ${image.id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Button
          variant="gradientCool"
          shape="round"
          className="absolute transform -translate-y-1/2 left-4 top-1/2 opacity-70 hover:opacity-100"
          onClick={handlePrevious}
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="gradientCool"
          shape="round"
          className="absolute transform -translate-y-1/2 right-4 top-1/2 opacity-70 hover:opacity-100"
          onClick={handleNext}
        >
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
