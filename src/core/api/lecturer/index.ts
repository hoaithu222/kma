import Axios from "@/core/base/Axios";
import { LECTURER_PATH } from "./paths";
import { IRequestGetLecturer, IRequestSearchLecturer } from "./types";

export const getLecturersAllApi = (params: IRequestGetLecturer) => {
  return Axios.get(LECTURER_PATH.GET_LECTURERS_ALL, { params });
};

export const searchLecturersApi = (params: IRequestSearchLecturer) => {
  return Axios.get(LECTURER_PATH.SEARCH_LECTURERS, { params });
};

export const getLecturerByIdApi = (id: number) => {
  return Axios.get(
    LECTURER_PATH.GET_LECTURER_BY_ID.replace(":id", id.toString())
  );
};
