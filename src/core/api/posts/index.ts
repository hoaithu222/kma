import {
  IRequestIncreaseViewCount,
  IRequestSearchArticlePublic,
  IResponseGetHomeArticle,
  IResponseIncreaseViewCount,
  IResponsePublicArticle,
} from "./types";
import { POST_PATH } from "./paths";
import Axios from "@/core/base/Axios";

export const increaseViewCount = (
  data: IRequestIncreaseViewCount
): Promise<IResponseIncreaseViewCount> => {
  return Axios.post(
    POST_PATH.incrementViewArticle.replace(":id", data.id.toString())
  );
};

export const getHomeArticle = (): Promise<IResponseGetHomeArticle> => {
  return Axios.get(POST_PATH.homeArticle);
};

export const getPublicArticle = (
  data?: IRequestSearchArticlePublic
): Promise<IResponsePublicArticle> => {
  return Axios.get(POST_PATH.getPostsPublic, { params: data || {} });
};

export const getPostDetailApi = (data: {
  id: string;
}): Promise<IResponsePublicArticle> => {
  return Axios.get(POST_PATH.getPostDetail.replace(":id", data.id));
};
