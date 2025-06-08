import { ReduxStateType } from "@/app/store/types";
import { IStudentState } from "./student.types";
import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { ResponseArticle } from "@/core/api/posts/types";

const initialState: IStudentState = {
  studentPost: {
    data: [],
    totalPages: 0,
    totalItems: 0,
  },
  statusGetStudentPost: ReduxStateType.INIT,
  statusGetStudentPostDetail: ReduxStateType.INIT,
  studentPostDetail: {} as ResponseArticle,
};

const { slice, reducer } = createResettableSlice({
  name: "student",
  initialState,
  reducers: {
    // lấy danh sách bài viết liên quan đến sinh viên
    getStudentPost: (state, _action) => {
      state.statusGetStudentPost = ReduxStateType.LOADING;
    },
    getStudentPostSuccess: (state, action) => {
      state.statusGetStudentPost = ReduxStateType.SUCCESS;
      state.studentPost = action.payload;
    },
    getStudentPostFailure: (state, _action) => {
      state.statusGetStudentPost = ReduxStateType.ERROR;
    },
    // lấy chi tiết bài viết liên quan đến sinh viên
    getStudentPostDetail: (state, _action) => {
      state.statusGetStudentPostDetail = ReduxStateType.LOADING;
    },
    getStudentPostDetailSuccess: (state, action) => {
      state.statusGetStudentPostDetail = ReduxStateType.SUCCESS;
      state.studentPostDetail = action.payload;
    },
    getStudentPostDetailFailure: (state, _action) => {
      state.statusGetStudentPostDetail = ReduxStateType.ERROR;
    },
  },
});
export const {
  getStudentPost,
  getStudentPostSuccess,
  getStudentPostFailure,
  getStudentPostDetail,
  getStudentPostDetailSuccess,
  getStudentPostDetailFailure,
} = slice.actions;
export default reducer;
