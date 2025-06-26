import { useEffect } from "react";
import { useHome } from "../hooks/useHook";
import clsx from "clsx";
import Button from "@/foundation/components/buttons/Button";
import { formatDate } from "@/shared/utils/formatDate";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";
import { useNavigate } from "react-router-dom";
import { sortByPublishedDate } from "@/shared/utils/sort";

const EventPostAdmission = () => {
  const { eventPostAdmission, getEventPostAdmissionDispatch } = useHome();
  const post = sortByPublishedDate(eventPostAdmission?.content);
  const navigate = useNavigate();
  useEffect(() => {
    getEventPostAdmissionDispatch();
  }, []);

  return (
    <div className="overflow-hidden w-full min-h-screen bg-gradient-to-br rounded-lg from-background-subtle via-background-base to-background-muted">
      {/* Header Section */}
      <div className="py-4 bg-gradient-to-r from-primary to-primary-dark text-text-on-primary md:py-8">
        <div className="container px-2 mx-auto text-center sm:px-4">
          <h2 className="mb-4 text-lg font-bold tracking-wide sm:text-xl md:text-2xl lg:text-3xl">
            ĐÀO TẠO - TUYỂN SINH
          </h2>
          <p className="mx-auto max-w-4xl text-xs leading-relaxed opacity-90 sm:text-sm md:text-base lg:text-lg">
            Học Viện Kỹ Thuật Mật Mã chuyên đào tạo các chuyên gia tinh nhuệ,
            sẵn sàng đối mặt với những thách thức của thế giới số. Chúng tôi
            cung cấp các chương trình đào tạo chuyên sâu về An toàn thông tin,
            Mật mã và các ngành Công nghệ cao, nơi kiến thức, kỹ năng và bản
            lĩnh được rèn giũa.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-2 py-4 mx-auto sm:px-3 md:py-6 lg:px-4 lg:py-8">
        <div className="grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 sm:grid-cols-2 md:gap-8">
          {post?.map((item: any, _index: number) => (
            <div
              key={item.id}
              className={clsx(
                "overflow-hidden relative rounded-2xl shadow-lg transition-all duration-500 group bg-card-bg hover:shadow-2xl",
                "border transform hover:-translate-y-2 border-border-primary"
              )}
            >
              {/* Image Container */}
              <div className="overflow-hidden relative h-48 md:h-56">
                <img
                  src={`${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/30 group-hover:opacity-100" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary text-text-on-primary">
                    {item.subCategoryName}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 md:p-3 lg:p-4">
                <div className="flex gap-2 items-center mb-3 text-sm text-text-muted">
                  <svg
                    className="w-4 h-4"
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

                <h3 className="mb-1 text-base font-bold transition-colors duration-300 md:text-lg lg:text-xl text-text-primary line-clamp-2 group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="mb-2 text-xs leading-relaxed text-text-secondary line-clamp-3 sm:text-sm">
                  {truncateText(stripHtml(item.content), 80)}
                </p>

                <Button
                  onClick={() => navigate(`/detail-post/${item.id}`)}
                  className="py-2 w-full font-semibold bg-gradient-to-r rounded-xl transition-all duration-300 transform from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-text-on-primary md:py-3 hover:shadow-lg"
                >
                  Xem chi tiết
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br rounded-full opacity-10 transition-opacity duration-300 from-primary-light to-primary group-hover:opacity-20" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(!post || post.length === 0) && (
          <div className="py-8 text-center md:py-16">
            <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full md:w-24 md:h-24 md:mb-6 bg-background-muted">
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl text-text-primary">
              Chưa có bài viết nào
            </h3>
            <p className="text-text-secondary">
              Các bài viết về đào tạo và tuyển sinh sẽ được hiển thị tại đây.
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA Section */}
      <div className="py-4 bg-gradient-to-r md:py-8 from-background-subtle to-background-muted lg:py-10">
        <div className="container flex flex-col justify-center items-center px-2 mx-auto text-center sm:px-4">
          <h2 className="mb-2 text-lg font-bold md:mb-3 lg:mb-4 md:text-xl lg:text-2xl text-text-primary">
            Tìm hiểu thêm về chương trình đào tạo
          </h2>
          <p className="mx-auto mb-2 max-w-2xl text-xs sm:mb-4 md:mb-6 md:text-sm lg:text-base text-text-secondary lg:mb-8">
            Khám phá các chương trình đào tạo chất lượng cao và cơ hội nghề
            nghiệp rộng mở tại trường của chúng tôi.
          </p>
          <Button className="px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform bg-primary hover:bg-primary-dark text-text-on-primary md:px-8 md:py-4 md:text-lg hover:scale-105">
            Tìm hiểu ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventPostAdmission;
