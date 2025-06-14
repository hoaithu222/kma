import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  ExternalLink,
  Star,
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { formatDate } from "@/shared/utils/formatDate";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";

import { useHome } from "../hooks/useHook";
import Button from "@/foundation/components/buttons/Button";
import { useNavigate } from "react-router-dom";

const StudentPost = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { studentPost, getStudentPostDispatch } = useHome();
  const posts = studentPost?.content;
  const navigate = useNavigate();

  useEffect(() => {
    getStudentPostDispatch();
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const cardWidth = 380;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      (scrollContainerRef.current as HTMLElement).scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      (container as HTMLElement).addEventListener("scroll", checkScrollButtons);
      return () =>
        (container as HTMLElement).removeEventListener(
          "scroll",
          checkScrollButtons
        );
    }
  }, []);

  const getRandomGradient = (index: number) => {
    const gradients = [
      "from-blue-500 via-purple-500 to-pink-500",
      "from-emerald-500 via-teal-500 to-cyan-500",
      "from-orange-500 via-red-500 to-pink-500",
      "from-violet-500 via-purple-500 to-fuchsia-500",
      "from-amber-500 via-orange-500 to-red-500",
      "from-indigo-500 via-blue-500 to-cyan-500",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="relative w-full py-8 mt-2 overflow-hidden sm:py-10 md:py-12 lg:py-16 rounded-xl sm:mt-3 md:mt-4 lg:mt-6">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full top-20 left-10 animate-pulse opacity-60"></div>
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-40 right-20 animate-ping opacity-40"></div>
        <div className="absolute w-2 h-2 bg-pink-300 rounded-full sm:w-3 sm:h-3 bottom-32 left-1/4 animate-bounce opacity-30"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="relative px-3 mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12 lg:mb-16">
          {/* Icon with multiple effects */}
          <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 blur-xl opacity-30 animate-pulse"></div>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-2xl sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
              <Trophy className="w-6 h-6 text-white sm:w-8 sm:h-8 md:w-10 md:h-10 animate-bounce" />
              <div className="absolute flex items-center justify-center w-4 h-4 rounded-full sm:w-6 sm:h-6 -top-1 -right-1 bg-gradient-to-r from-yellow-300 to-orange-400">
                <Star className="w-2 h-2 text-white sm:w-3 sm:h-3" />
              </div>
            </div>
          </div>

          {/* Title with gradient text */}
          <h2 className="mb-3 text-2xl font-black leading-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text">
            Cựu Sinh Viên Xuất Sắc
          </h2>

          {/* Subtitle with enhanced styling */}
          <div className="relative max-w-3xl mx-auto">
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
              Những câu chuyện truyền cảm hứng từ các cựu sinh viên
              <span className="relative inline-block mx-1 sm:mx-2">
                <span className="relative z-10 font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  học viện kỹ thuật mật mã
                </span>
                <span className="absolute inset-0 transform -skew-x-3 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"></span>
              </span>
            </p>

            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-1 mt-3 sm:gap-2 sm:mt-4">
              <Sparkles className="w-3 h-3 text-yellow-500 sm:w-4 sm:h-4 animate-pulse" />
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <Sparkles className="w-3 h-3 text-purple-500 delay-300 sm:w-4 sm:h-4 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced Posts Container */}
        <div className="relative">
          {/* Enhanced Navigation Buttons */}
          <div className="absolute left-0 z-20 hidden -translate-y-1/2 top-1/2 md:block">
            <Button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              variant="secondary"
              shape="round"
              className={`w-10 h-10 sm:w-12 sm:h-12 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 ${
                !canScrollLeft
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-2xl"
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-300" />
            </Button>
          </div>

          <div className="absolute right-0 z-20 hidden -translate-y-1/2 top-1/2 md:block">
            <Button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              variant="secondary"
              shape="round"
              className={`w-10 h-10 sm:w-12 sm:h-12 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 ${
                !canScrollRight
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-2xl"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-300" />
            </Button>
          </div>

          {/* Enhanced Scrollable Posts */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 px-3 py-2 overflow-x-auto sm:gap-4 md:gap-6 lg:gap-8 scrollbar-hide sm:px-4 md:px-6 lg:px-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {posts?.map((post: any, index: number) => (
              <article
                key={post.id}
                className="group relative flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with glass morphism */}
                <div className="relative h-full overflow-hidden border shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-gray-200/50 dark:shadow-gray-900/50 border-white/20 dark:border-gray-700/50 group-hover:shadow-2xl group-hover:shadow-blue-200/30 dark:group-hover:shadow-blue-900/30">
                  {/* Animated border gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${getRandomGradient(index)} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl sm:rounded-2xl`}
                  ></div>

                  {/* Enhanced Image Container */}
                  <div className="relative h-40 overflow-hidden sm:h-44 md:h-48 lg:h-56">
                    <img
                      src={`${import.meta.env.VITE_API_URL_FILE}/${post.thumbnailUrl}`}
                      alt={post.title}
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />

                    {/* Multiple overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getRandomGradient(index)} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Enhanced Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <div
                        className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r ${getRandomGradient(index)} shadow-lg backdrop-blur-sm border border-white/20 transform transition-all duration-300 group-hover:scale-110`}
                      >
                        {post.subCategoryName}
                      </div>
                    </div>

                    {/* Achievement badge */}
                    <div className="absolute flex items-center justify-center w-8 h-8 transition-all duration-300 transform bg-yellow-500 rounded-full shadow-lg sm:w-9 sm:h-9 md:w-10 md:h-10 top-3 right-3 sm:top-4 sm:right-4 group-hover:rotate-12 group-hover:scale-110">
                      <Award className="w-4 h-4 text-white sm:w-5 sm:h-5" />
                    </div>

                    {/* Floating action indicator */}
                    <div className="absolute flex items-center justify-center w-8 h-8 transition-all duration-500 delay-100 transform translate-y-4 rounded-full opacity-0 sm:w-9 sm:h-9 md:w-10 md:h-10 bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowRight className="w-4 h-4 text-blue-600 sm:w-5 sm:h-5 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-4 space-y-3 sm:p-5 md:p-6 lg:p-8">
                    {/* Title with gradient hover effect */}
                    <h3 className="text-base font-bold leading-tight text-gray-900 transition-all duration-300 sm:text-lg md:text-xl dark:text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text">
                      {post.title}
                    </h3>

                    {/* Enhanced description */}
                    <p className="text-xs leading-relaxed text-gray-600 transition-colors duration-300 sm:text-sm md:text-base dark:text-gray-300 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                      {truncateText(stripHtml(post.content), 120)}
                    </p>

                    {/* Enhanced Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                      {/* Date with enhanced styling */}
                      <div className="flex items-center gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-100/70 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                        <Calendar className="w-3 h-3 text-blue-500 sm:w-4 sm:h-4" />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                          {formatDate(post.publishedAt).day}/
                          {formatDate(post.publishedAt).month}/
                          {formatDate(post.publishedAt).year}
                        </span>
                      </div>

                      {/* Enhanced Read More Button */}
                      <Button
                        variant="text"
                        className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105"
                        onClick={() => navigate(`/detail-post/${post.id}`)}
                      >
                        <span>Đọc thêm</span>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute top-0 w-full h-full transition-all duration-1000 skew-x-12 -left-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full"></div>
                </div>

                {/* Floating particles for each card */}
                {hoveredCard === post.id && (
                  <>
                    <div className="absolute w-2 h-2 bg-yellow-400 rounded-full sm:w-3 sm:h-3 -top-2 -right-2 animate-ping opacity-60"></div>
                    <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full -bottom-2 -left-2 animate-pulse opacity-60"></div>
                  </>
                )}
              </article>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
            {Array.from({ length: Math.ceil((posts?.length || 0) / 3) }).map(
              (_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 transition-all duration-300 bg-gray-300 rounded-full dark:bg-gray-600 hover:bg-blue-500"
                ></div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none sm:h-20 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-900/50"></div>
    </div>
  );
};

export default StudentPost;
