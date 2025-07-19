import { PayloadAction } from "@reduxjs/toolkit";
import { getPosts, getPostsError, getPostsSuccess } from "./base-post.slice";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { getPublicArticle } from "@/core/api/posts";

// lấy danh sách bài viết
function* getPostsSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, any, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    console.log("response", response);
    yield put(
      getPostsSuccess({
        content: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error: any) {
    yield put(getPostsError(error.response?.data || error.message));
  }
}

function* watchGetPostsSaga() {
  yield takeLatest(getPosts, getPostsSaga);
}

export default function* basePostSaga() {
  yield all([watchGetPostsSaga()]);
}
