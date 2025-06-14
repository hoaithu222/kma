import { getDetailLecturer, getLecturer } from "../slice/lecturer.slice";
import {
  selectDetailLecturerData,
  selectLecturerData,
  selectLecturerStatus,
} from "../slice/lecturer.selector";
import { selectDetailLecturerStatus } from "../slice/lecturer.selector";
import { useDispatch, useSelector } from "react-redux";
import { IRequestGetLecturer } from "@/core/api/lecturer/types";

export const useLecturer = () => {
  const dispatch = useDispatch();
  const detailLecturer = useSelector(selectDetailLecturerData);
  const statusGetDetailLecturer = useSelector(selectDetailLecturerStatus);
  const lecturerList = useSelector(selectLecturerData);
  const statusGetLecturer = useSelector(selectLecturerStatus);

  const getDetailLecturerDispatch = (id: number) => {
    dispatch(getDetailLecturer(id));
  };

  const getLecturerDispatch = (params: IRequestGetLecturer) => {
    dispatch(getLecturer(params));
  };

  return {
    detailLecturer,
    statusGetDetailLecturer,
    lecturerList,
    statusGetLecturer,
    getDetailLecturerDispatch,
    getLecturerDispatch,
  };
};
