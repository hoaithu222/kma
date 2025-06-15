import { ReduxStateType } from "@/app/store/types";
import { ResponseArticle } from "@/core/api/posts/types";

export interface IPostState {
  post: {
    data: ResponseArticle[];
    totalPages: number;
    totalItems: number;
  };
  statusGetPost: ReduxStateType;
  statusGetPostDetail: ReduxStateType;
  postDetail: ResponseArticle;
}
