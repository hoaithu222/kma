import { getDetailLecturer, getLecturerRequest } from "../slice/lecturer.slice";
import {
  selectDetailLecturerData,
  selectLecturerData,
  selectLecturerPageNumber,
  selectLecturerPageSize,
  selectLecturerStatus,
  selectLecturerTotalElements,
  selectLecturerTotalPages,
} from "../slice/lecturer.selector";
import { selectDetailLecturerStatus } from "../slice/lecturer.selector";
import { useDispatch, useSelector } from "react-redux";
import { IRequestSearchLecturer } from "@/core/api/lecturer/types";
import { useState } from "react";

export const useLecturer = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState<IRequestSearchLecturer>({
    name: "",
    majorId: "",
    subMajorId: "",
    title: "",
    email: "",
    position: "",
    page: 0,
    size: 9,
  });
  const detailLecturer = useSelector(selectDetailLecturerData);
  const statusGetDetailLecturer = useSelector(selectDetailLecturerStatus);
  const lecturerList = useSelector(selectLecturerData);
  const statusGetLecturer = useSelector(selectLecturerStatus);
  const totalElements = useSelector(selectLecturerTotalElements);
  const totalPages = useSelector(selectLecturerTotalPages);
  const pageNumber = useSelector(selectLecturerPageNumber);
  const pageSize = useSelector(selectLecturerPageSize);

  const getDetailLecturerDispatch = (id: number) => {
    dispatch(getDetailLecturer(id));
  };

  const getLecturerDispatch = () => {
    dispatch(getLecturerRequest(filter));
  };

  return {
    filter,
    setFilter,
    detailLecturer,
    statusGetDetailLecturer,
    lecturerList,
    statusGetLecturer,
    totalElements,
    totalPages,
    pageNumber,
    pageSize,
    getDetailLecturerDispatch,
    getLecturerDispatch,
  };
};
