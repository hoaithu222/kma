import { homeSaga } from "@/features/home/slice/home.saga.ts";
import { all } from "redux-saga/effects";
import { studentSaga } from "@/features/student/slice/student.saga";

import { eventSaga } from "@/features/event/slice/event.saga";
import { detailPostSaga } from "@/features/detail-post/slice/detail-post.saga";
import { lecturerSaga } from "@/features/lecturer/slice/lecturer.saga";
import { postSaga } from "@/features/posts/slice/post.saga";
import { admissionSaga } from "@/features/admission/slice/admission.saga";
import { researchSaga } from "@/features/research/slice/research.saga";

export const rootSage = function* () {
  try {
    yield all([
      homeSaga(),
      studentSaga(),
      eventSaga(),
      detailPostSaga(),
      lecturerSaga(),
      postSaga(),
      admissionSaga(),
      researchSaga(),
    ]);
  } catch (error) {
    console.error(error);
  }
};
