import { ReduxStateType } from "@/app/store/types";
import { dataLecturer } from "@/core/api/lecturer/types";

export interface initialStateLecturer {
  lecturerList: dataLecturer[];
  statusGetLecturer: ReduxStateType;
  detailLecturer: dataLecturer | null;
  statusGetDetailLecturer: ReduxStateType;
}
