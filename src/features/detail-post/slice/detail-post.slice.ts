import { createResettableSlice } from "@/app/store/create-resettabable-slice";
import { initialStateType } from "./detail-post-types";
import { AppReducerType, ReduxStateType } from "@/app/store/types";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

const initialState: initialStateType = {
  post: {
    id: 0,
    categoryId: 0,
    categoryName: "",
    subCategoryName: "",
    folderUrl: "",
    title: "",
    slug: "",
    summary: "",
    description: "",
    content: "",
    files: [],
    thumbnail: [],
    tag: [],
    thumbnailUrl: "",
    dimensions: "",
    viewCount: 0,
    status: "draft",
    publishedAt: "",
    updatedAt: "",
    isPrivate: false,
  },
  statusGetPost: ReduxStateType.INIT,
  error: null,
  listRelatedPost: {
    data: [],
    totalPages: 0,
    totalItems: 0,
  },
  statusGetListRelatedPost: ReduxStateType.INIT,
};

const { slice, reducer } = createResettableSlice({
  name: AppReducerType.DETAIL_POST,
  initialState,
  reducers: {
    getPostDetail: (state, _action: PayloadAction<string>) => {
      state.statusGetPost = ReduxStateType.LOADING;
    },
    getPostDetailSuccess: (state, action) => {
      state.post = action.payload;
      state.statusGetPost = ReduxStateType.SUCCESS;
    },
    getPostDetailError: (state, action) => {
      state.error = action.payload;
      state.statusGetPost = ReduxStateType.ERROR;
    },
    getListRelatedPost: (
      state,
      _action: PayloadAction<IRequestSearchArticlePublic>
    ) => {
      state.statusGetListRelatedPost = ReduxStateType.LOADING;
    },
    getListRelatedPostSuccess: (state, action) => {
      state.listRelatedPost = action.payload;
      state.statusGetListRelatedPost = ReduxStateType.SUCCESS;
    },
    getListRelatedPostError: (state, action) => {
      state.error = action.payload;
      state.statusGetListRelatedPost = ReduxStateType.ERROR;
    },
    // xem bai  viet thi call api xem
    increaseViewCountRequest: (state, _action: PayloadAction<string>) => {
      state.statusGetPost = ReduxStateType.LOADING;
    },
    increaseViewCountRequestSuccess: (state) => {
      if (state.post) {
        state.post.viewCount = state.post.viewCount + 1;
      }
      state.statusGetPost = ReduxStateType.SUCCESS;
    },
    increaseViewCountRequestError: (state, action) => {
      state.error = action.payload;
      state.statusGetPost = ReduxStateType.ERROR;
    },
  },
});

export const {
  getPostDetail,
  getPostDetailSuccess,
  getPostDetailError,
  getListRelatedPost,
  getListRelatedPostSuccess,
  getListRelatedPostError,
  increaseViewCountRequest,
  increaseViewCountRequestSuccess,
  increaseViewCountRequestError,
} = slice.actions;

export default reducer;
