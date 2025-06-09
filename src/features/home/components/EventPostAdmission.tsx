import { useEffect } from "react";
import { useHome } from "../hooks/useHook";
import clsx from "clsx";
import Button from "@/foundation/components/buttons/Button";
import { formatDate } from "@/shared/utils/formatDate";
import { stripHtml, truncateText } from "@/shared/utils/stripHtml";

const EventPostAdmission = () => {
  const { eventPostAdmission, getEventPostAdmissionDispatch } = useHome();
  const post = eventPostAdmission?.content;

  useEffect(() => {
    getEventPostAdmissionDispatch();
  }, []);

  return (
    <div className="w-full min-h-screen rounded-lg overflow-hidden bg-gradient-to-br from-background-subtle via-background-base to-background-muted">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-text-on-primary py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
            ĐÀO TẠO - TUYỂN SINH
          </h2>
          <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Học viện Kỹ thuật Mật mã chuyên đào tạo các chuyên gia tinh nhuệ,
            sẵn sàng đối mặt với những thách thức của thế giới số. Chúng tôi
            cung cấp các chương trình đào tạo chuyên sâu về An toàn thông tin,
            Mật mã và các ngành Công nghệ cao, nơi kiến thức, kỹ năng và bản
            lĩnh được rèn giũa.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:gap-8">
          {post?.map((item: any, _index: number) => (
            <div
              key={item.id}
              className={clsx(
                "group relative bg-card-bg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden",
                "transform hover:-translate-y-2 border border-border-primary"
              )}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={`${import.meta.env.VITE_API_URL_FILE}/${item.thumbnailUrl}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-text-on-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {item.subCategoryName}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
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

                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {truncateText(stripHtml(item.content), 120)}
                </p>

                <Button className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-text-on-primary font-semibold py-2 md:py-3 rounded-xl transition-all duration-300 transform hover:shadow-lg">
                  Xem chi tiết
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(!post || post.length === 0) && (
          <div className="text-center py-8 md:py-16">
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 bg-background-muted rounded-full flex items-center justify-center">
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
            <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
              Chưa có bài viết nào
            </h3>
            <p className="text-text-secondary">
              Các bài viết về đào tạo và tuyển sinh sẽ được hiển thị tại đây.
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA Section */}
      <div className="bg-gradient-to-r from-background-subtle to-background-muted py-8 md:py-16">
        <div className="container mx-auto px-4 text-center justify-center items-center flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Tìm hiểu thêm về chương trình đào tạo
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
            Khám phá các chương trình đào tạo chất lượng cao và cơ hội nghề
            nghiệp rộng mở tại trường của chúng tôi.
          </p>
          <Button className="bg-primary hover:bg-primary-dark text-text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105">
            Tìm hiểu ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventPostAdmission;
