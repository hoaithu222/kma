import { ReduxStateType } from "@/app/store/types";
import { ResponseArticle } from "@/core/api/posts/types";

export interface IStudentState {
  studentPost: {
    data: ResponseArticle[];
    totalPages: number;
    totalItems: number;
  };
  statusGetStudentPost: ReduxStateType;
  statusGetStudentPostDetail: ReduxStateType;
  studentPostDetail: ResponseArticle;
}
