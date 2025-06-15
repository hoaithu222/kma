import { useDispatch, useSelector } from "react-redux";

import { getAdmission } from "../slice/admission.slice";
import { IRequestSearchArticlePublic } from "@/core/api/posts/types";
import { useState } from "react";
import {
  selectAdmissionData,
  selectAdmissionDetail,
  selectAdmissionTotalItems,
  selectAdmissionTotalPages,
  selectStatusGetAdmission,
  selectStatusGetAdmissionDetail,
} from "../slice/admission.selector";

export const useAdmission = () => {
  const dispatch = useDispatch();
  const admission = useSelector(selectAdmissionData);
  const statusGetAdmission = useSelector(selectStatusGetAdmission);
  const statusGetAdmissionDetail = useSelector(selectStatusGetAdmissionDetail);
  const admissionDetail = useSelector(selectAdmissionDetail);
  const totalPages = useSelector(selectAdmissionTotalPages);
  const totalItems = useSelector(selectAdmissionTotalItems);
  const [filter, setFilter] = useState<IRequestSearchArticlePublic>({
    page: 0,
    size: 9,
    categoryId: null,
    subCategoryId: null,
    status: "published",
    isPrivate: false,
    tag: null,
    sort: null,
    order: null,
    keyword: null,
  });
  // lấy bài viết
  const getAdmissionAction = (
    filter: IRequestSearchArticlePublic,
    subCategoryId: number
  ) => {
    dispatch(getAdmission({ ...filter, subCategoryId }));
  };
  return {
    admission,
    statusGetAdmission,
    statusGetAdmissionDetail,
    admissionDetail,
    totalPages,
    totalItems,
    filter,
    setFilter,
    getAdmissionAction,
  };
};
