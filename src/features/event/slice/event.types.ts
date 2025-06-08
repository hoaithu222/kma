import { ReduxStateType } from "@/app/store/types";
import { ResponseArticle } from "@/core/api/posts/types";

export interface IEventState {
  eventPost: {
    data: ResponseArticle[];
    totalPages: number;
    totalItems: number;
  };
  statusGetEventPost: ReduxStateType;
  statusGetEventPostDetail: ReduxStateType;
  eventPostDetail: ResponseArticle;
}
