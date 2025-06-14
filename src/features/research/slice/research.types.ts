import { ReduxStateType } from "@/app/store/types";
import { ResponseArticle } from "@/core/api/posts/types";

export interface IResearchState {
  researchPost: {
    data: ResponseArticle[];
    totalPages: number;
    totalItems: number;
  };
  statusGetResearchPost: ReduxStateType;
  statusGetResearchPostDetail: ReduxStateType;
  researchPostDetail: ResponseArticle;
}
