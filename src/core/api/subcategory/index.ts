import Axios from "@/core/base/Axios";
import { SUBCATEGORY_PATH } from "./paths";
import { IRequestSearchSubcategory } from "./types";

export const getSubcategoriesApi = (categoryId: number) => {
  return Axios.get(
    SUBCATEGORY_PATH.GET_SUBCATEGORIES.replace(
      ":categoryId",
      categoryId.toString()
    )
  );
};

export const getAllSubcategoriesApi = () => {
  return Axios.get(SUBCATEGORY_PATH.GET_ALL_SUBCATEGORIES);
};

export const searchSubcategoriesApi = (data: IRequestSearchSubcategory) => {
  return Axios.get(SUBCATEGORY_PATH.SEARCH_SUBCATEGORIES, { params: data });
};
