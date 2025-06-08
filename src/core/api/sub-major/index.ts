import Axios from "@/core/base/Axios";
import { SUB_MAJOR_PATH } from "./paths";
import { IRequestGetSubMajor, IRequestGetSubMajorWithMajor } from "./types";

export const getSubMajorsApi = (params: IRequestGetSubMajor) => {
  return Axios.get(SUB_MAJOR_PATH.GET_SUB_MAJORS, { params });
};

export const getSubMajorWithMajorApi = (
  params: IRequestGetSubMajorWithMajor
) => {
  return Axios.get(
    SUB_MAJOR_PATH.GET_SUB_MAJOR_WITH_MAJOR.replace(
      ":majorId",
      params.majorId.toString()
    )
  );
};

export const getSubMajorByIdApi = (id: number) => {
  return Axios.get(
    SUB_MAJOR_PATH.GET_SUB_MAJOR_BY_ID.replace(":id", id.toString())
  );
};
