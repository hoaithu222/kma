import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  ExternalLink,
} from "lucide-react";
import { formatDate } from "@/shared/utils/formatDate";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";

import { useHome } from "../hooks/useHook";
import Button from "@/foundation/components/buttons/Button";

const StudentPost = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { studentPost, getStudentPostDispatch } = useHome();
  const posts = studentPost?.content;
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
      const cardWidth = 380; // width + gap
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

  return (
    <div className="w-full bg-background-surface py-8 md:py-16 rounded-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 md:mb-6">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-text-on-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-2 md:mb-4">
            Cựu Sinh Viên Xuất Sắc
          </h2>
          <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
            Những câu chuyện truyền cảm hứng từ các cựu sinh viên học viện kĩ
            thuật mật mã tin
          </p>
        </div>
        {/* Posts Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            variant="secondary"
            shape="round"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow-lg transition-all duration-300 hidden md:flex`}
          >
            <ChevronLeft className="w-6 h-6 mx-auto" />
          </Button>

          <Button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            variant="secondary"
            shape="round"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 shadow-lg transition-all duration-300 hidden md:flex`}
          >
            <ChevronRight className="w-6 h-6 mx-auto" />
          </Button>

          {/* Scrollable Posts */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide justify-between px-4 md:px-16 py-4 hidden-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {posts?.map((post: any) => (
              <div
                key={post.id}
                className="flex-none w-[280px] md:w-80 bg-card-bg rounded-2xl shadow-card-shadow hover:shadow-card-hover-shadow transition-all duration-500 group overflow-hidden border border-card-border"
              >
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_API_URL_FILE}/${post.thumbnailUrl}`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-text-on-primary px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                    {post.subCategoryName}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-text-primary mb-2 md:mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-text-secondary text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
                    {truncateText(stripHtml(post.content), 100)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-divider-subtle">
                    <div className="flex items-center gap-2 text-text-secondary text-xs">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                      {formatDate(post.publishedAt).day +
                        "/" +
                        formatDate(post.publishedAt).month +
                        "/" +
                        formatDate(post.publishedAt).year +
                        " " +
                        formatDate(post.publishedAt).time}
                    </div>

                    <Button
                      variant="text"
                      className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-xs transition-colors duration-300 "
                    >
                      Đọc thêm
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPost;
