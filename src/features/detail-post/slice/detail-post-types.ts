import { ReduxStateType } from "@/app/store/types";
import { ResponseArticle } from "@/core/api/posts/types";

export interface initialStateType {
  post: ResponseArticle | null;
  statusGetPost: ReduxStateType;
  error: string | null;
  listRelatedPost: {
    data: ResponseArticle[];
    totalPages: number;
    totalItems: number;
  };
  statusGetListRelatedPost: ReduxStateType;
}
