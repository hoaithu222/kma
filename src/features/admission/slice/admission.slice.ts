import { ReduxStateType } from "@/app/store/types";

import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { IAdmissionState } from "./admission.types";

const initialState: IAdmissionState = {
  admission: {
    data: [],
    totalPages: 0,
    totalItems: 0,
  },
  statusGetAdmission: ReduxStateType.INIT,
  statusGetAdmissionDetail: ReduxStateType.INIT,
  admissionDetail: null as any,
};

const { slice, reducer } = createResettableSlice({
  name: "admission",
  initialState,
  reducers: {
    getAdmission: (state, _action) => {
      state.statusGetAdmission = ReduxStateType.LOADING;
    },
    getAdmissionSuccess: (state, action) => {
      state.admission = action.payload;
      state.statusGetAdmission = ReduxStateType.SUCCESS;
    },
    getAdmissionFailure: (state, _action) => {
      state.statusGetAdmission = ReduxStateType.ERROR;
    },
    getAdmissionDetail: (state, _action) => {
      state.statusGetAdmissionDetail = ReduxStateType.LOADING;
    },
    getAdmissionDetailSuccess: (state, action) => {
      state.admissionDetail = action.payload;
      state.statusGetAdmissionDetail = ReduxStateType.SUCCESS;
    },
    getAdmissionDetailFailure: (state, _action) => {
      state.statusGetAdmissionDetail = ReduxStateType.ERROR;
    },
    resetAdmission: (state) => {
      state.admission = initialState.admission;
      state.statusGetAdmission = ReduxStateType.INIT;
      state.statusGetAdmissionDetail = ReduxStateType.INIT;
      state.admissionDetail = initialState.admissionDetail;
    },
  },
});

export const {
  getAdmission,
  getAdmissionSuccess,
  getAdmissionFailure,
  getAdmissionDetail,
  getAdmissionDetailSuccess,
  getAdmissionDetailFailure,
  resetAdmission,
} = slice.actions;
export default reducer;
