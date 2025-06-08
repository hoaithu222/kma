import Axios from "@/core/base/Axios";
import { MAJOR_PATH } from "./paths";


export const getMajorsApi = () => {
  return Axios.get(MAJOR_PATH.GET_MAJORS);
};

export const getMajorWithSubMajorApiAll = () => {
  return Axios.get(MAJOR_PATH.GET_MAJOR_WITH_SUB_MAJOR_ALL);
};

export const getMajorByIdApi = (id: number) => {
  return Axios.get(MAJOR_PATH.GET_MAJOR_BY_ID.replace(":id", id.toString()));
};

export const getMajorWithSubMajorApi = (id: number) => {
  return Axios.get(
    MAJOR_PATH.GET_MAJOR_WITH_SUB_MAJOR.replace(":id", id.toString())
  );
};
