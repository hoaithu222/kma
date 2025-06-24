import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { initialStateLecturer } from "./lecturer.types";
import { ReduxStateType } from "@/app/store/types";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  IRequestSearchLecturer,
  responseLecturer,
} from "@/core/api/lecturer/types";

const initialState: initialStateLecturer = {
  lecturer: {
    dataLecturer: [],
    totalElements: 0,
    totalPages: 0,
    pageNumber: 0,
    pageSize: 0,
  },
  statusGetLecturer: ReduxStateType.INIT,
  detailLecturer: null,
  statusGetDetailLecturer: ReduxStateType.INIT,
};

const { slice, reducer } = createResettableSlice({
  name: "lecturer",
  initialState,
  reducers: {
    // lấy danh sách giảng viên
    getLecturerRequest: (
      state,
      _action: PayloadAction<IRequestSearchLecturer>
    ) => {
      state.statusGetLecturer = ReduxStateType.LOADING;
    },
    getLecturerSuccess: (state, action: PayloadAction<responseLecturer>) => {
      state.lecturer.dataLecturer = action.payload.content;
      state.lecturer.totalElements = action.payload.totalElements;
      state.lecturer.totalPages = action.payload.totalPages;
      state.lecturer.pageNumber = action.payload.pageNumber;
      state.lecturer.pageSize = action.payload.pageSize;
      state.statusGetLecturer = ReduxStateType.SUCCESS;
    },
    getLecturerFailure: (state, _action: PayloadAction<string>) => {
      state.statusGetLecturer = ReduxStateType.ERROR;
    },
    getDetailLecturer: (state, _action) => {
      state.statusGetDetailLecturer = ReduxStateType.LOADING;
    },
    getDetailLecturerSuccess: (state, action) => {
      state.statusGetDetailLecturer = ReduxStateType.SUCCESS;
      state.detailLecturer = action.payload;
    },
    getDetailLecturerFailed: (state, _action) => {
      state.statusGetDetailLecturer = ReduxStateType.ERROR;
    },
  },
});

export const {
  getLecturerRequest,
  getLecturerSuccess,
  getLecturerFailure,
  getDetailLecturer,
  getDetailLecturerSuccess,
  getDetailLecturerFailed,
} = slice.actions;

export default reducer;
