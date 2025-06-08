import Axios from "@/core/base/Axios";
import { CATEGORY_PATH } from "./paths";

export const getCategoriesApi = () => {
  return Axios.get(CATEGORY_PATH.GET_CATEGORIES);
};

export const getCategoryByIdApi = (id: string) => {
  return Axios.get(CATEGORY_PATH.GET_CATEGORY.replace(":id", id));
};
