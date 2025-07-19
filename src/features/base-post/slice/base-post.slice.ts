import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { initialStateType } from "./base-post.types";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { ReduxStateType } from "@/app/store/types";

const initialState: initialStateType = {
  posts: {
    content: [],
    totalPages: 0,
    totalItems: 0,
    statusGetListPost: ReduxStateType.INIT,
  },

  detailPost: {
    detailPost: null,
    statusGetDetailPost: ReduxStateType.INIT,
  },
};

const { slice, reducer } = createResettableSlice({
  name: "basePost",
  initialState,
  reducers: {
    // lấy danh sách bài viết
    getPosts: (state, _action: PayloadAction<IRequestSearchArticlePublic>) => {
      state.posts.statusGetListPost = ReduxStateType.LOADING;
    },
    getPostsSuccess: (state, action) => {
      state.posts.content = action.payload.content;
      state.posts.totalPages = action.payload.totalPages;
      state.posts.totalItems = action.payload.totalItems;
      state.posts.statusGetListPost = ReduxStateType.SUCCESS;
    },
    getPostsError: (state) => {
      state.posts.statusGetListPost = ReduxStateType.ERROR;
    },
    // lấy thông tin chi tiết bài viết
    getDetailPost: (state, _action: PayloadAction<number>) => {
      state.detailPost.statusGetDetailPost = ReduxStateType.LOADING;
    },
    getDetailPostSuccess: (state, action) => {
      state.detailPost.detailPost = action.payload;
      state.detailPost.statusGetDetailPost = ReduxStateType.SUCCESS;
    },
    getDetailPostError: (state) => {
      state.detailPost.statusGetDetailPost = ReduxStateType.ERROR;
    },

    // lấy bài viết theo id
    getPostById: (state, _action: PayloadAction<number>) => {
      state.detailPost.statusGetDetailPost = ReduxStateType.LOADING;
    },
    getPostByIdSuccess: (state, action) => {
      state.detailPost.detailPost = action.payload;
      state.detailPost.statusGetDetailPost = ReduxStateType.SUCCESS;
    },
    getPostByIdError: (state) => {
      state.detailPost.statusGetDetailPost = ReduxStateType.ERROR;
    },
  },
});

export const {
  // lấy danh sách bài viết
  getPosts,
  getPostsSuccess,
  getPostsError,
  // lấy thông tin chi tiết bài viết
  getDetailPost,
  getDetailPostSuccess,
  getDetailPostError,
} = slice.actions;
export default reducer;
