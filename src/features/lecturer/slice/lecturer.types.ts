import { ReduxStateType } from "@/app/store/types";
import { dataLecturer } from "@/core/api/lecturer/types";

export interface initialStateLecturer {
  lecturer: {
    dataLecturer: dataLecturer[];
    totalElements: number;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
  };
  statusGetLecturer: ReduxStateType;
  detailLecturer: dataLecturer | null;
  statusGetDetailLecturer: ReduxStateType;
}
