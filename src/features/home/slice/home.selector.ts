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
export const selectBannerPost = createSelector(
  [selectHome],
  (state) => state.bannerPost
);
export const selectNewsPost = createSelector(
  [selectHome],
  (state) => state.newsPost
);
export const selectEventPostNew = createSelector(
  [selectHome],
  (state) => state.eventPostNew
);
export const selectEventPostAdmission = createSelector(
  [selectHome],
  (state) => state.eventPostAdmission
);
export const selectStudentPost = createSelector(
  [selectHome],
  (state) => state.studentPost
);
export const selectCooperationPost = createSelector(
  [selectHome],
  (state) => state.cooperationPost
);
export const selectPage = createSelector([selectHome], (state) => state.page);
export const selectStatusPage = createSelector(
  [selectHome],
  (state) => state.statusPage
);
