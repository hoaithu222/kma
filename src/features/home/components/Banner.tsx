import { useMediaQuery } from "react-responsive";
import { imagesDesktop } from "../utils/image";
import { imagesMobile } from "../utils/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/foundation/components/buttons/Button";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const animations = [
  {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  },
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  {
    initial: { opacity: 0, rotate: -45, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 45, scale: 1.2 },
  },
];

const textAnimations = [
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 },
  },
  {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 10 },
  },
];

const Banner = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const images = isDesktop ? imagesDesktop : imagesMobile;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useTranslation("home");

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

  const currentAnimation = animations[currentIndex % animations.length];
  const currentTextAnimation =
    textAnimations[currentIndex % textAnimations.length];

  return (
    <div className="relative w-full overflow-hidden h-96">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          {...currentAnimation}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          <img
            src={images[currentIndex].image}
            alt={`Banner ${images[currentIndex].id}`}
            className="object-cover w-full h-full"
          />
          <motion.div
            {...currentTextAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute w-[26%] h-[60%] p-5 rounded-md shadow-lg bg-secondary-light opacity-90 left-20 top-10"
          >
            <h1 className="text-2xl font-bold text-primary">
              {t(`banner.title${images[currentIndex].id}`)}
            </h1>
            <p className="text-sm text-muted">
              {t(`banner.description${images[currentIndex].id}`)}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

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
            className={`h-2 w-2 rounded-full flex ${
              currentIndex === index ? "bg-white " : "bg-gray-400 h-2 w-2"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
