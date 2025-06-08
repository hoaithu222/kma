import { homeSaga } from "@/features/home/slice/home.saga.ts";
import { all } from "redux-saga/effects";
import { studentSaga } from "@/features/student/slice/student.saga";
import { postSaga } from "@/features/posts/slice/post.saga";
import { eventSaga } from "@/features/event/slice/event.saga";

export const rootSage = function* () {
  try {
    yield all([homeSaga(), studentSaga(), postSaga(), eventSaga()]);
  } catch (error) {
    console.error(error);
  }
};
