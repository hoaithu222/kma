import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { initialStateLecturer } from "./lecturer.types";
import { ReduxStateType } from "@/app/store/types";

const initialState: initialStateLecturer = {
  lecturerList: [],
  statusGetLecturer: ReduxStateType.INIT,
  detailLecturer: null,
  statusGetDetailLecturer: ReduxStateType.INIT,
};

const { slice, reducer } = createResettableSlice({
  name: "lecturer",
  initialState,
  reducers: {
    getLecturer: (state, _action) => {
      state.statusGetLecturer = ReduxStateType.LOADING;
    },
    getLecturerSuccess: (state, action) => {
      state.statusGetLecturer = ReduxStateType.SUCCESS;
      state.lecturerList = action.payload;
    },
    getLecturerFailed: (state, _action) => {
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
  getLecturer,
  getLecturerSuccess,
  getLecturerFailed,
  getDetailLecturer,
  getDetailLecturerSuccess,
  getDetailLecturerFailed,
} = slice.actions;

export default reducer;
