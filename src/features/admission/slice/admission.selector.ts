import { createSelector } from "reselect";

import { RootState } from "@/app/store";
import { IAdmissionState } from "./admission.types";

const selectAdmission = (state: RootState) =>
  state.admission as IAdmissionState;

export const selectAdmissionData = createSelector(
  [selectAdmission],
  (state) => state.admission.data
);
export const selectAdmissionDetail = createSelector(
  [selectAdmission],
  (state) => state.admissionDetail
);
export const selectStatusGetAdmission = createSelector(
  [selectAdmission],
  (state) => state.statusGetAdmission
);
export const selectStatusGetAdmissionDetail = createSelector(
  [selectAdmission],
  (state) => state.statusGetAdmissionDetail
);
export const selectAdmissionTotalPages = createSelector(
  [selectAdmission],
  (state) => state.admission.totalPages
);
export const selectAdmissionTotalItems = createSelector(
  [selectAdmission],
  (state) => state.admission.totalItems
);
