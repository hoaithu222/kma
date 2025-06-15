import { ReduxStateType } from "@/app/store/types";
import { ResponseArticle } from "@/core/api/posts/types";

export interface IAdmissionState {
  admission: {
    data: ResponseArticle[];
    totalPages: number;
    totalItems: number;
  };
  statusGetAdmission: ReduxStateType;
  statusGetAdmissionDetail: ReduxStateType;
  admissionDetail: ResponseArticle;
}
