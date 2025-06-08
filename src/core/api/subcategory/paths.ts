const BASE_PATH = "/api/v1/sub_category";

export const SUBCATEGORY_PATH = {
  GET_ALL_SUBCATEGORIES: `${BASE_PATH}/all`,
  GET_SUBCATEGORIES: `${BASE_PATH}/filter?categoryId=:categoryId`,
  SEARCH_SUBCATEGORIES: `${BASE_PATH}/search`,
};
