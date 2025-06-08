import { useEffect } from "react";
import { useHome } from "../hooks/useHook";

const NewsPost = () => {
  const { newsPost, getNewsPostDispatch } = useHome();
  const post = newsPost?.content;

  useEffect(() => {
    getNewsPostDispatch();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="my-4 overflow-hidden rounded-lg md:my-6 bg-background-base lg:my-8">
      {/* Header Section */}
      <div className="sticky top-0 z-10 border-b rounded-lg bg-background-surface backdrop-blur-sm border-border-primary">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:py-6">
          <div className="text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary sm:text-4xl">
              TIN TỨC MỚI NHẤT
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full bg-primary sm:w-24"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-4 mx-auto max-w-7xl sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {post?.map((item: any, _index: number) => (
            <article
              key={item.id}
              className="relative overflow-hidden transition-all duration-500 transform border shadow-lg bg-card-bg group rounded-2xl hover:shadow-2xl hover:-translate-y-2 border-border-primary"
            >
              {/* Category Badge */}
              <div className="absolute z-10 top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full shadow-lg text-text-on-primary bg-primary">
                  {item.categoryName}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-background-muted">
                {item.thumbnailUrl ? (
                  <img
                    src={`${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
                      <svg
                        className="w-8 h-8 text-text-on-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-background-overlay group-hover:opacity-100"></div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h2 className="mb-3 text-lg font-bold leading-tight transition-colors duration-300 text-text-primary group-hover:text-primary sm:text-xl line-clamp-2">
                  {item.title}
                </h2>

                {/* Summary/Content Preview */}
                {item.content && (
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary line-clamp-3">
                    {truncateText(stripHtml(item.content))}
                  </p>
                )}

                {/* Meta Information */}
                <div className="flex items-center justify-between mb-4 text-xs text-text-muted">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {formatDate(item.publishedAt)}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {item.viewCount || 0}
                    </span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 transform rounded-lg shadow-md text-text-on-primary bg-primary hover:bg-primary-dark hover:scale-105 hover:shadow-lg">
                    Đọc thêm
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
