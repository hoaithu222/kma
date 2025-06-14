import { ReduxStateType } from "@/app/store/types";

import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { ResponseArticle } from "@/core/api/posts/types";
import { IResearchState } from "./research.types";

const initialState: IResearchState = {
  researchPost: {
    data: [],
    totalPages: 0,
    totalItems: 0,
  },
  statusGetResearchPost: ReduxStateType.INIT,
  statusGetResearchPostDetail: ReduxStateType.INIT,
  researchPostDetail: {} as ResponseArticle,
};

const { slice, reducer } = createResettableSlice({
  name: "student",
  initialState,
  reducers: {
    // lấy danh sách bài viết liên quan đến nghiên cứu
    getResearchPost: (state, _action) => {
      state.statusGetResearchPost = ReduxStateType.LOADING;
    },
    getResearchPostSuccess: (state, action) => {
      state.statusGetResearchPost = ReduxStateType.SUCCESS;
      state.researchPost = action.payload;
    },
    getResearchPostFailure: (state, _action) => {
      state.statusGetResearchPost = ReduxStateType.ERROR;
    },
    // lấy chi tiết bài viết liên quan đến nghiên cứu
    getResearchPostDetail: (state, _action) => {
      state.statusGetResearchPostDetail = ReduxStateType.LOADING;
    },
    getResearchPostDetailSuccess: (state, action) => {
      state.statusGetResearchPostDetail = ReduxStateType.SUCCESS;
      state.researchPostDetail = action.payload;
    },
    getResearchPostDetailFailure: (state, _action) => {
      state.statusGetResearchPostDetail = ReduxStateType.ERROR;
    },
  },
});
export const {
  getResearchPost,
  getResearchPostSuccess,
  getResearchPostFailure,
  getResearchPostDetail,
  getResearchPostDetailSuccess,
  getResearchPostDetailFailure,
} = slice.actions;
export default reducer;
