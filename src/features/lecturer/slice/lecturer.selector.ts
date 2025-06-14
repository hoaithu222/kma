import { initialStateLecturer } from "./lecturer.types";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

const selectLecturer = (state: RootState) =>
  state.lecturer as initialStateLecturer;

export const selectLecturerData = createSelector(
  [selectLecturer],
  (lecturer) => lecturer.lecturerList
);
export const selectLecturerStatus = createSelector(
  [selectLecturer],
  (lecturer) => lecturer.statusGetLecturer
);
export const selectDetailLecturerData = createSelector(
  [selectLecturer],
  (lecturer) => lecturer.detailLecturer
);
export const selectDetailLecturerStatus = createSelector(
  [selectLecturer],
  (lecturer) => lecturer.statusGetDetailLecturer
);
