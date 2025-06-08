import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import { initialStateType } from "./home.types";

const selectHome = (state: RootState) => state.home as initialStateType;

export const selectPosts = createSelector([selectHome], (state) => state.posts);
export const selectStatus = createSelector(
  [selectHome],
  (state) => state.status
);
export const selectFilter = createSelector(
  [selectHome],
  (state) => state.filter
);
export const selectCategory = createSelector(
  [selectHome],
  (state) => state.category
);
export const selectLecturer = createSelector(
  [selectHome],
  (state) => state.lecturer
);
export const selectSubCategory = createSelector(
  [selectHome],
  (state) => state.subCategory
);
export const selectMajor = createSelector([selectHome], (state) => state.major);
export const selectSubMajor = createSelector(
  [selectHome],
  (state) => state.subMajor
);
export const selectStatusLecturer = createSelector(
  [selectHome],
  (state) => state.statusLecturer
);
export const selectStatusCategory = createSelector(
  [selectHome],
  (state) => state.statusCategory
);
export const selectStatusSubCategory = createSelector(
  [selectHome],
  (state) => state.statusSubCategory
);
export const selectStatusMajor = createSelector(
  [selectHome],
  (state) => state.statusMajor
);
export const selectStatusSubMajor = createSelector(
  [selectHome],
  (state) => state.statusSubMajor
);
