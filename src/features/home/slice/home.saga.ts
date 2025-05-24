import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getCategoryError,
  getCategorySuccess,
  getCategory,
  getPosts,
  getPostsError,
  getPostsSuccess,
} from "./home.slice";

// import { IRequestBanner } from "@/core/api/home/types";
import { fetchPostsApi, getCategory as getCategoryApi } from "@/core/api/home";

function* fetchPosts(
  action: ReturnType<typeof getPosts>
): Generator<any, void, any> {
  try {
    const response = yield call(fetchPostsApi, action.payload);
    if (response.ok) {
      yield put(getPostsSuccess(response.data));
    } else {
      yield put(getPostsError(response.error));
    }
  } catch (error) {
    yield put(getPostsError(error));
  }
}
function* fetchCategory(): Generator<any, void, any> {
  try {
    const response = yield call(getCategoryApi);
    if (response.ok) {
      yield put(getCategorySuccess(response.data));
    } else {
      yield put(getCategoryError(response.error));
    }
  } catch (error) {
    yield put(getCategoryError(error));
  }
}
function* watchGetCategory() {
  yield takeLatest(getCategory.type, fetchCategory);
}

function* watchGetPosts() {
  yield takeLatest(getPosts.type, fetchPosts);
}

export function* homeSaga() {
  yield all([watchGetPosts(), watchGetCategory()]);
}
