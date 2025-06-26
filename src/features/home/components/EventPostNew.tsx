import { useEffect } from "react";
import { useHome } from "../hooks/useHook";
import clsx from "clsx";
import Button from "@/foundation/components/buttons/Button";
import { formatDate } from "@/shared/utils/formatDate";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";
import { useNavigate } from "react-router-dom";
import { sortByPublishedDate } from "@/shared/utils/sort";

const EventPostNew = () => {
  const { eventPostNew, getEventPostNewDispatch } = useHome();
  const post = sortByPublishedDate(eventPostNew?.content);

  useEffect(() => {
    getEventPostNewDispatch();
  }, []);
  const navigate = useNavigate();
  const getEventTypeColor = (index: number) => {
    const colors = [
      "primary",
      "secondary",
      "accent",
      "success",
      "warning",
      "info",
    ];
    return colors[index % colors.length];
  };

  const getEventTypeStyle = (colorType: string) => {
    const styles = {
      primary: "bg-primary hover:bg-primary-dark text-primary-foreground",
      secondary:
        "bg-secondary hover:bg-secondary-dark text-secondary-foreground",
      accent: "bg-accent hover:bg-accent-dark text-accent-foreground",
      success: "bg-success hover:bg-success/90 text-white",
      warning: "bg-warning hover:bg-warning/90 text-white",
      info: "bg-info hover:bg-info/90 text-white",
    };
    return styles[colorType as keyof typeof styles] || styles.primary;
  };

  return (
    <div className="overflow-hidden relative my-2 rounded-lg shadow-md md:my-3 lg:my-4 shadow-card-shadow">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute inset-0 bg-background-base"></div>
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full blur-2xl bg-primary/10"></div>
        <div className="absolute right-0 bottom-0 w-56 h-56 rounded-full blur-2xl bg-secondary/10"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 p-2 text-center sm:px-3 sm:py-4 lg:px-4 lg:py-6">
        <div className="mx-auto max-w-2xl">
          <div className="inline-flex justify-center items-center mb-4 w-10 h-10 rounded-xl backdrop-blur-sm bg-primary/10">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
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
          </div>
          <h2 className="mb-2 text-lg font-bold text-text-primary sm:text-xl md:text-2xl lg:text-3xl">
            SỰ KIỆN MỚI NHẤT
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-xs text-text-secondary sm:text-sm">
            Khám phá những sự kiện thú vị và cập nhật mới nhất từ cộng đồng của
            chúng tôi
          </p>
          <div className="flex justify-center items-center">
            <div className="w-16 h-1 bg-gradient-to-r rounded-full from-primary to-secondary"></div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="relative z-10 px-2 pb-3 sm:px-3 md:pb-4 lg:pb-6 lg:px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {post?.map((item: any, index: number) => {
              const eventDate = formatDate(item.publishedAt || item.createdAt);
              const colorType = getEventTypeColor(index);
              const colorStyle = getEventTypeStyle(colorType);
              return (
                <div
                  key={item.id}
                  className="overflow-hidden relative text-sm rounded-xl border transition-all duration-500 group bg-card-bg border-card-border shadow-card-shadow hover:shadow-card-hover-shadow hover:-translate-y-1"
                >
                  {/* Date Header */}
                  <div
                    className={clsx(
                      "absolute z-50 p-5 text-center border-b border-divider-subtle",
                      "top-0 right-8 group-hover:border-b-primary"
                    )}
                  >
                    <div className="inline-flex absolute flex-col justify-center items-center p-2 rounded-xl border bg-background-elevated border-border-muted">
                      <div className="text-lg font-bold text-text-primary">
                        {eventDate.day}
                      </div>
                      <div className="text-xs font-medium text-text-secondary mt-0.5">
                        TH {eventDate.month.toString().padStart(2, "0")}
                      </div>
                      <div className="text-[10px] text-text-muted mt-0.5">
                        {eventDate.year}
                      </div>
                    </div>
                  </div>
                  {/* Event Image */}
                  <div className="overflow-hidden relative h-40 bg-background-muted">
                    {item.thumbnailUrl ? (
                      <img
                        src={`${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex justify-center items-center h-full">
                        <svg
                          className="w-10 h-10 opacity-50 text-text-muted"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/20 group-hover:opacity-100"></div>
                  </div>
                  {/* Event Content */}
                  <div className="p-1 md:p-2 lg:p-3">
                    {/* Category Badge */}
                    <div className="mb-1 md:mb-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colorStyle} shadow-sm`}
                      >
                        <div className="w-1.5 h-1.5 mr-1.5 bg-current rounded-full animate-pulse"></div>
                        {item.categoryName || "Sự kiện"}
                      </span>
                    </div>
                    {/* Title */}
                    <h3 className=" font-bold text-text-primary mb-1 text-sm sm:text-base sm:mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
                      {item.title}
                    </h3>
                    {/* Event Details */}
                    <div className="mb-1 space-y-2 sm:mb-2">
                      {item.startTime && (
                        <div className="flex items-center text-xs text-text-secondary">
                          <div className="flex justify-center items-center mr-2 w-6 h-6 rounded bg-background-muted">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <span>{item.startTime}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="flex items-center text-xs text-text-secondary">
                          <div className="flex justify-center items-center mr-2 w-6 h-6 rounded bg-background-muted">
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <span className="line-clamp-1">{item.location}</span>
                        </div>
                      )}
                      {item.content && (
                        <div className="p-2 text-xs leading-relaxed rounded text-text-muted line-clamp-2 bg-background-subtle">
                          {truncateText(stripHtml(item.content), 50)}
                        </div>
                      )}
                    </div>
                    {/* Action Button */}
                    <div className="h-8 md:h-3 lg:h-5">
                      <div className="absolute bottom-0 left-0 p-2 w-full">
                        <button
                          className={`flex justify-center items-center px-3 py-2 w-full text-xs font-semibold rounded-lg shadow transition-all duration-300 transform ${colorStyle} hover:scale-105 group/btn`}
                          onClick={() => navigate(`/detail-post/${item.id}`)}
                        >
                          <span>Chi tiết</span>
                          <svg
                            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                  </div>

                  <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-success rounded-full shadow animate-pulse"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {!post && (
        <div className="relative z-10 px-6 pb-12 rounded-lg shadow-md">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] animate-pulse"
                >
                  <div className="p-6 text-center border-b border-[var(--color-divider-subtle)]">
                    <div className="w-20 h-20 mx-auto bg-[var(--color-background-muted)] rounded-2xl"></div>
                  </div>
                  <div className="h-48 bg-[var(--color-background-muted)]"></div>
                  <div className="p-6 space-y-4">
                    <div className="w-20 h-6 bg-[var(--color-background-muted)] rounded-full"></div>
                    <div className="h-6 bg-[var(--color-background-muted)] rounded"></div>
                    <div className="w-3/4 h-4 bg-[var(--color-background-muted)] rounded"></div>
                    <div className="w-1/2 h-4 bg-[var(--color-background-muted)] rounded"></div>
                    <div className="h-12 bg-[var(--color-background-muted)] rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 py-2 text-center lg:py-4">
        <div className="px-2 mx-auto max-w-4xl md:px-4 lg:px-6">
          <Button
            className="group inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[var(--color-button-primary-bg)] hover:bg-[var(--color-button-primary-hover)] text-[var(--color-button-primary-text)] rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => navigate("/events/49")}
          >
            <span>Xem thêm sự kiện</span>
            <svg
              className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventPostNew;
