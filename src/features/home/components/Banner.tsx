import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "@/foundation/components/buttons/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useHome } from "../hooks/useHook";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import SafeImage from "@/components/SafeImage";
import { sortByPublishedDate } from "@/shared/utils/sort";

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
  // sắp xếp bannerPost theo createdAt

  const sortBanner = sortByPublishedDate(bannerPost?.content);

  const images = sortBanner?.map((item: any) => ({
    id: item.id,
    image: `${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`,
    title: item.title,
    summary: item.summary,
  }));

  const navigate = useNavigate();
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
    <div className="relative w-full overflow-hidden lg:h-[500px] h-60 md:h-72">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          {...currentAnimation}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          <SafeImage
            src={images[currentIndex]?.image}
            alt={`Banner ${images[currentIndex].id}`}
            className="object-cover w-full h-full rounded-lg"
            fallbackSrc={images[currentIndex]?.image}
          />
          <motion.div
            {...currentTextAnimation}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={clsx(
              "absolute w-[50%] sm:w-[25%] lg:w-[30%] h-[30%] ",
              "p-1 sm:p-3 md:p-4 lg:p-6 rounded-xl shadow-2xl bg-transparent backdrop-blur-sm left-2 sm:left-5 lg:left-18 top-2 sm:top-5 lg:top-8 overflow-hidden",
              "left-2 top-28"
            )}
          >
            <div
              className="flex relative flex-col p-1 h-full text-white md:p-2 lg:p-4"
              // style={{
              //   backgroundImage: `url(${images[currentIndex].image})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              {/* Nội dung chữ */}
              <div className="flex relative z-10 flex-col">
                <h2 className="mb-1 text-xs font-bold leading-tight text-shadow sm:text-sm md:text-base lg:text-xl line-clamp-2">
                  {images[currentIndex].title}
                </h2>

                <Button
                  variant="primary"
                  style={{ pointerEvents: "auto" }}
                  size="small"
                  onClick={() =>
                    navigate(`/detail-post/${images[currentIndex].id}`)
                  }
                >
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button
        variant="primary"
        shape="round"
        className="absolute left-4 top-1/2 z-10 opacity-70 transform -translate-y-1/2 hover:opacity-100"
        onClick={handlePrevious}
      >
        <ArrowLeftIcon className="w-2 h-2 lg:w-4 lg:h-4" />
      </Button>
      <Button
        variant="primary"
        shape="round"
        className="absolute right-4 top-1/2 z-10 opacity-70 transform -translate-y-1/2 hover:opacity-100"
        onClick={handleNext}
      >
        <ArrowRightIcon className="w-2 h-2 lg:w-4 lg:h-4" />
      </Button>

      {/* Dots indicator */}
      <div className="flex absolute bottom-4 left-1/2 space-x-2 transform -translate-x-1/2">
        {images.map((_item: any, index: number) => (
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
