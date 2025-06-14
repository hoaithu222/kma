import { createSelector } from "reselect";

import { RootState } from "@/app/store";
import { IResearchState } from "./research.types";

const selectResearch = (state: RootState) => state.research as IResearchState;

export const selectResearchPost = createSelector(
  [selectResearch],
  (state) => state.researchPost.data
);
export const selectResearchPostDetail = createSelector(
  [selectResearch],
  (state) => state.researchPostDetail
);
export const selectStatusGetResearchPost = createSelector(
  [selectResearch],
  (state) => state.statusGetResearchPost
);
export const selectStatusGetResearchPostDetail = createSelector(
  [selectResearch],
  (state) => state.statusGetResearchPostDetail
);
export const selectTotalPages = createSelector(
  [selectResearch],
  (state) => state.researchPost.totalPages
);
export const selectTotalItems = createSelector(
  [selectResearch],
  (state) => state.researchPost.totalItems
);
