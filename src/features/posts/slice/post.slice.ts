import { ReduxStateType } from "@/app/store/types";

import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { IPostState } from "./post.type";

const initialState: IPostState = {
  post: {
    data: [],
    totalPages: 0,
    totalItems: 0,
  },
  statusGetPost: ReduxStateType.INIT,
  statusGetPostDetail: ReduxStateType.INIT,
  postDetail: null as any,
};

const { slice, reducer } = createResettableSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, _action) => {
      state.statusGetPost = ReduxStateType.LOADING;
    },
    getPostSuccess: (state, action) => {
      state.post = action.payload;
      state.statusGetPost = ReduxStateType.SUCCESS;
    },
    getPostFailure: (state, _action) => {
      state.statusGetPost = ReduxStateType.ERROR;
    },
    getPostDetail: (state, _action) => {
      state.statusGetPostDetail = ReduxStateType.LOADING;
    },
    getPostDetailSuccess: (state, action) => {
      state.postDetail = action.payload;
      state.statusGetPostDetail = ReduxStateType.SUCCESS;
    },
    getPostDetailFailure: (state, _action) => {
      state.statusGetPostDetail = ReduxStateType.ERROR;
    },
    resetPost: (state) => {
      state.post = initialState.post;
      state.statusGetPost = ReduxStateType.INIT;
      state.statusGetPostDetail = ReduxStateType.INIT;
      state.postDetail = initialState.postDetail;
    },
  },
});

export const {
  getPost,
  getPostSuccess,
  getPostFailure,
  getPostDetail,
  getPostDetailSuccess,
  getPostDetailFailure,
  resetPost,
} = slice.actions;
export default reducer;
