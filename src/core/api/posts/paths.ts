export const BASE_PATH: string = "/api/v1/article";

// Định nghĩa các đường dẫn API bài viết
export const POST_PATH = {
  // lấy danh sách bài viết
  getPostsPublic: `${BASE_PATH}/public`,
  homeArticle: `${BASE_PATH}/home`, // Bài viết hiển thị ở trang chủ
  incrementViewArticle: `${BASE_PATH}/increment/:id`, // Tăng lượt xem,
  getPostDetail: `${BASE_PATH}/:id`, // Lấy chi tiết bài viết
};
