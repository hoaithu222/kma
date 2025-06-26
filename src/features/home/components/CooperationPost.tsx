import { useEffect } from "react";
import { useHome } from "../hooks/useHook";
import clsx from "clsx";
import Button from "@/foundation/components/buttons/Button";
import { formatDate } from "@/shared/utils/formatDate";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostDetail } from "@/features/detail-post/slice/detail-post.slice";
import { sortByPublishedDate } from "@/shared/utils/sort";

const CooperationPost = () => {
  const { cooperationPost, getCooperationPostDispatch } = useHome();
  const post = sortByPublishedDate(cooperationPost?.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getCooperationPostDispatch();
  }, []);

  const handleViewDetail = (id: string) => {
    dispatch(getPostDetail(id));
    navigate(`/detail-post/${id}`);
  };

  return (
    <div className="w-full min-h-[calc(100vh-2rem)] my-2 rounded-lg overflow-hidden bg-gradient-to-br from-background-subtle via-background-base to-background-muted">
      <div className="overflow-hidden relative">
        <div className="absolute inset-0 bg-secondary-dark"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container relative px-2 py-4 mx-auto text-center drop-shadow-sm sm:px-4 md:py-8 lg:py-12 text-text-on-primary">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r sm:text-xl md:text-2xl lg:text-3xl md:mb-4 lg:mb-6 from-text-on-primary via-secondary-light to-primary-light">
              HỢP TÁC ĐỐI NGOẠI
            </h2>
            <p className="mb-4 text-xs leading-relaxed drop-shadow-sm sm:text-sm md:text-base lg:text-lg md:mb-6 lg:mb-8 text-text-inverse">
              Học Viện Kỹ Thuật Mật Mã luôn tiên phong trong các hoạt động hợp
              tác quốc tế và hợp tác doanh nghiệp để nâng cao chất lượng các
              hoạt động giảng dạy, nghiên cứu và chuyển giao công nghệ.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 mt-4 drop-shadow-sm md:grid-cols-4 md:gap-4 lg:gap-6 md:mt-8 lg:mt-10">
              <div className="text-center">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-primary-light">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-text-on-primary/80">
                  Đối tác quốc tế
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-primary-light">
                  130+
                </div>
                <div className="text-xs sm:text-sm text-text-on-primary/80">
                  Doanh nghiệp
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-primary-light">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-text-on-primary/80">
                  Quốc gia
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-primary-light">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-text-on-primary/80">
                  Sinh viên trao đổi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-5 top-10 w-16 h-16 rounded-full blur-xl animate-pulse md:w-20 md:h-20 bg-primary-light/20"></div>
        <div className="absolute right-5 bottom-10 w-24 h-24 rounded-full blur-xl delay-1000 animate-pulse md:w-32 md:h-32 bg-secondary-light/20"></div>
      </div>

      <div className="container px-2 py-4 mx-auto sm:px-4 md:py-8 lg:py-12">
        {/* Section Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-6 md:gap-4 md:mb-8 lg:mb-10">
          <button className="bg-primary text-text-on-primary px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300">
            Tất cả hợp tác
          </button>
          <button className="bg-card-bg text-text-primary px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-background-muted transition-all duration-300 border border-border-primary">
            Trường đối tác
          </button>
          <button className="bg-card-bg text-text-primary px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-background-muted transition-all duration-300 border border-border-primary">
            Doanh nghiệp
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:gap-6">
          {post?.map((item: any, _index: number) => (
            <article
              key={item.id}
              className={clsx(
                "overflow-hidden relative rounded-xl shadow-lg transition-all duration-500 group bg-card-bg md:rounded-2xl hover:shadow-xl",
                "border transform hover:-translate-y-2 border-border-primary"
              )}
            >
              {/* Image Container */}
              <div className="overflow-hidden relative h-40 sm:h-48 md:h-56 lg:h-64">
                <img
                  src={`${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className="bg-gradient-to-r from-primary to-primary-dark text-text-on-primary px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                    {item.subCategoryName}
                  </span>
                </div>

                {/* Cooperation Type */}
                <div className="absolute top-2 right-2 md:top-3 md:right-3">
                  <div className="px-2 py-1 rounded-lg shadow-lg backdrop-blur-sm bg-card-bg/95 md:px-3 md:py-2">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold md:text-sm text-text-primary">
                        Đang hợp tác
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Content */}
                <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center transition-transform duration-300 transform translate-y-4 text-text-on-primary group-hover:translate-y-0">
                    <div className="p-3 rounded-lg backdrop-blur-sm bg-primary/20 md:p-4">
                      <svg
                        className="mx-auto mb-1 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 md:mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <Link
                        to={`/detail-post/${item.id}`}
                        className="text-xs font-semibold cursor-pointer md:text-sm"
                        style={{ pointerEvents: "auto" }}
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-4 lg:p-6">
                {/* Meta Info */}
                <div className="flex justify-between items-center mb-2 md:mb-3 lg:mb-4">
                  <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-text-muted">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {formatDate(item.publishedAt).day +
                      "/" +
                      formatDate(item.publishedAt).month +
                      "/" +
                      formatDate(item.publishedAt).year +
                      " " +
                      formatDate(item.publishedAt).time}
                  </div>

                  <div className="flex items-center gap-1.5 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-text-muted"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs md:text-sm text-text-muted">
                      {item.viewCount}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold transition-colors duration-300 md:text-lg lg:text-xl text-text-primary md:mb-3 line-clamp-2 group-hover:text-primary">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="mb-3 text-xs leading-relaxed md:text-sm text-text-secondary md:mb-4 line-clamp-3">
                  {item.summary || truncateText(stripHtml(item.content), 120)}
                </p>

                {/* Cooperation Details */}
                <div className="p-2 mb-3 rounded-lg bg-background-muted md:p-3 lg:p-4 md:mb-4">
                  <div className="grid grid-cols-2 gap-2 text-xs md:gap-3 lg:gap-4 md:text-sm">
                    <div>
                      <span className="text-text-muted">Loại hợp tác:</span>
                      <p className="font-semibold text-text-primary">
                        Nghiên cứu & Đào tạo
                      </p>
                    </div>
                    <div>
                      <span className="text-text-muted">Lĩnh vực:</span>
                      <p className="font-semibold text-text-primary">
                        An toàn thông tin
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex justify-between items-center mb-3 md:mb-4 lg:mb-6">
                  <span
                    className={clsx(
                      "px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-bold",
                      item.status === "published"
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    )}
                  >
                    {item.status === "published"
                      ? "✓ Đã công bố"
                      : "⏳ Đang xử lý"}
                  </span>
                </div>

                {/* Action Button */}
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-text-on-primary font-bold py-1.5 md:py-2 lg:py-3 rounded-lg md:rounded-xl transition-all duration-300 transform hover:shadow-lg group-hover:scale-105"
                  onClick={() => handleViewDetail(item.id)}
                >
                  <span className="flex items-center justify-center gap-1.5 md:gap-2">
                    <span className="text-xs md:text-sm">
                      Tìm hiểu chi tiết
                    </span>
                    <svg
                      className="w-3 h-3 transition-transform duration-300 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1"
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
                  </span>
                </Button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br rounded-full opacity-10 blur-sm transition-opacity duration-300 md:w-16 md:h-16 from-primary-light to-primary group-hover:opacity-20"></div>
            </article>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-8 bg-primary-dark text-text-on-primary md:py-12 lg:py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-3 text-lg font-bold md:text-xl lg:text-2xl md:mb-4 lg:mb-6">
            Mở rộng cơ hội hợp tác
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-xs md:text-sm lg:text-base text-text-primary md:mb-6 lg:mb-8">
            Học Viện Kỹ Thuật Mật Mã luôn chào đón các đối tác trong và ngoài
            nước cùng hợp tác phát triển trong lĩnh vực an toàn thông tin và
            công nghệ mật mã.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:gap-4">
            <Button className="px-4 py-2 text-sm font-bold rounded-lg shadow-lg transition-all duration-300 transform bg-primary hover:bg-primary-dark text-text-on-primary md:px-6 lg:px-8 md:py-3 lg:py-4 md:rounded-xl md:text-base lg:text-lg hover:scale-105">
              Liên hệ hợp tác
            </Button>
            <Button className="px-4 py-2 text-sm font-bold bg-transparent rounded-lg border-2 transition-all duration-300 border-text-on-primary text-text-on-primary md:px-6 lg:px-8 md:py-3 lg:py-4 md:rounded-xl md:text-base lg:text-lg">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationPost;
