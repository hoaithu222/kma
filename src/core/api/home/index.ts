import Axios from "@/core/base/Axios";
import { HOME_PATH } from "./paths";
import { IRequestBanner } from "./types";

export const getBanner = async (param?: IRequestBanner) => {
  const response = await Axios.get(HOME_PATH.getBanner, { params: param });
  return response.data;
};
export const fetchPostsApi = async (params: IRequestBanner) => {
  try {
    const response = await Axios.get(HOME_PATH.getAllPost, { params });
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
