import { createSelector } from "reselect";

import { RootState } from "@/app/store";
import { IStudentState } from "./student.types";

const selectStudent = (state: RootState) => state.student as IStudentState;

export const selectStudentPost = createSelector(
  [selectStudent],
  (state) => state.studentPost.data
);
export const selectStudentPostDetail = createSelector(
  [selectStudent],
  (state) => state.studentPostDetail
);
export const selectStatusGetStudentPost = createSelector(
  [selectStudent],
  (state) => state.statusGetStudentPost
);
export const selectStatusGetStudentPostDetail = createSelector(
  [selectStudent],
  (state) => state.statusGetStudentPostDetail
);
export const selectTotalPages = createSelector(
  [selectStudent],
  (state) => state.studentPost.totalPages
);
export const selectTotalItems = createSelector(
  [selectStudent],
  (state) => state.studentPost.totalItems
);
