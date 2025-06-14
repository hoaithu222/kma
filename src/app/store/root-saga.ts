import { homeSaga } from "@/features/home/slice/home.saga.ts";
import { all } from "redux-saga/effects";
import { studentSaga } from "@/features/student/slice/student.saga";

import { eventSaga } from "@/features/event/slice/event.saga";
import { detailPostSaga } from "@/features/detail-post/slice/detail-post.saga";
import { lecturerSaga } from "@/features/lecturer/slice/lecturer.saga";

export const rootSage = function* () {
  try {
    yield all([
      homeSaga(),
      studentSaga(),
      eventSaga(),
      detailPostSaga(),
      lecturerSaga(),
    ]);
  } catch (error) {
    console.error(error);
  }
};
