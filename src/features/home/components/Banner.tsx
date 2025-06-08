import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/foundation/components/buttons/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useHome } from "../hooks/useHook";
import clsx from "clsx";

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
  const { bannerPost, getBannerPostDispatch } = useHome();
  useEffect(() => {
    getBannerPostDispatch();
  }, []);

  const images = bannerPost?.content?.map((item: any) => ({
    id: item.id,
    image: `${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`,
    title: item.title,
    summary: item.summary,
  }));

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

  if (!images || images.length === 0) {
    return <div>Loading...</div>;
  }

  const currentAnimation = animations[currentIndex % animations.length];
  const currentTextAnimation =
    textAnimations[currentIndex % textAnimations.length];

  return (
    <div className="relative w-full h-48 overflow-hidden lg:h-96 sm:h-60 md:h-72">
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
            className="object-cover w-full h-full rounded-lg"
          />
          <motion.div
            {...currentTextAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={clsx(
              "absolute w-[20%] sm:w-[25%] lg:w-[30%] h-[85%] sm:h-[80%]",
              "p-3 md:p-4 lg:p-6 rounded-xl shadow-2xl bg-transparent backdrop-blur-sm left-2 sm:left-5 lg:left-18 top-2 sm:top-5 lg:top-8 overflow-hidden",
              "left-2 sm:left-5 lg:left-20 top-2 sm:top-5 lg:top-10"
            )}
          >
            <div
              className="relative flex flex-col h-full p-4 text-white"
              // style={{
              //   backgroundImage: `url(${images[currentIndex].image})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              {/* Nội dung chữ */}
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="mb-2 text-sm font-bold leading-tight text-shadow sm:text-base md:text-2xl lg:text-3xl line-clamp-2">
                  {images[currentIndex].title}
                </h2>

                {images[currentIndex].summary && (
                  <p className="flex-grow mb-4 text-xs leading-relaxed text-shadow sm:text-sm lg:text-base line-clamp-3">
                    {images[currentIndex].summary}
                  </p>
                )}

                <div className="mt-auto space-y-3">
                  <Button
                    variant="primary"
                    className="flex items-center justify-center w-full gap-2 px-4 py-2 text-xs font-medium transition-all duration-200 transform rounded-lg shadow-md sm:text-sm hover:shadow-lg hover:scale-105"
                  >
                    <span>Xem chi tiết</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Button
          variant="primary"
          shape="round"
          className="absolute transform -translate-y-1/2 left-4 top-1/2 opacity-70 hover:opacity-100"
          onClick={handlePrevious}
        >
          <ArrowLeftIcon className="w-2 h-2 lg:w-4 lg:h-4" />
        </Button>
        <Button
          variant="primary"
          shape="round"
          className="absolute transform -translate-y-1/2 right-4 top-1/2 opacity-70 hover:opacity-100"
          onClick={handleNext}
        >
          <ArrowRightIcon className="w-2 h-2 lg:w-4 lg:h-4" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-200 ${
              currentIndex === index
                ? "bg-blue-600 w-6"
                : "bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
