import {
  getListRelatedPost,
  getListRelatedPostError,
  getListRelatedPostSuccess,
  getPostDetail,
  increaseViewCountRequest,
  increaseViewCountRequestError,
  increaseViewCountRequestSuccess,
} from "@/features/detail-post/slice/detail-post.slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getPostDetailError, getPostDetailSuccess } from "./detail-post.slice";
import {
  getPostDetailApi,
  getPublicArticle,
  increaseViewCount,
} from "@/core/api/posts";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";

function* getPostDetailSaga(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    const response = yield call(getPostDetailApi, { id: action.payload });
    yield put(getPostDetailSuccess(response.data.data));
  } catch (error) {
    yield put(getPostDetailError(error as string));
  }
}
//getListRelatedPost
export function* getListRelatedPostSaga(
  action: PayloadAction<IRequestSearchArticlePublic>
): Generator<any, void, any> {
  try {
    const response = yield call(getPublicArticle, action.payload);
    yield put(
      getListRelatedPostSuccess({
        data: response.data.data.content,
        totalPages: response.data.data.totalPages,
        totalItems: response.data.data.totalElements,
      })
    );
  } catch (error) {
    yield put(getListRelatedPostError(error));
  }
}
//increaseViewCount
function* increaseViewCountSaga(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    yield call(increaseViewCount, { id: Number(action.payload) });
    yield put(increaseViewCountRequestSuccess());
  } catch (error) {
    yield put(increaseViewCountRequestError(error as string));
  }
}
function* watchGetListRelatedPostSaga() {
  yield takeLatest(getListRelatedPost.type, getListRelatedPostSaga);
}
function* watchGetPostDetailSaga() {
  yield takeEvery(getPostDetail.type, getPostDetailSaga);
}
function* watchIncreaseViewCountSaga() {
  yield takeEvery(increaseViewCountRequest.type, increaseViewCountSaga);
}

export function* detailPostSaga() {
  yield all([
    watchGetPostDetailSaga(),
    watchGetListRelatedPostSaga(),
    watchIncreaseViewCountSaga(),
    watchGetPostDetailSaga(),
  ]);
}
