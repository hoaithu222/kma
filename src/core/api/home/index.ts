import Axios from "@/core/base/Axios";
import { HOME_PATH } from "./paths";
import { IRequestArticle } from "./types";

export const getArticlesHome = async (param?: IRequestArticle) => {
  const response = await Axios.get(HOME_PATH.getArticlesHome, {
    params: param,
  });
  return response.data;
};
export const searchArticles = async (param?: IRequestArticle) => {
  try {
    const response = await Axios.get(HOME_PATH.searchArticles, {
      params: param,
    });
    return { ok: true, data: response.data };
  } catch (error) {
    return { ok: false, error };
  }
};

export const getCategory = async () => {
  try {
    const response = await Axios.get(HOME_PATH.getCategory);
    return { ok: true, data: response.data };
  } catch (error) {
    return { ok: false, error };
  }
};
