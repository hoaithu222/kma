import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getLecturer,
  getMajor,
  getPosts,
  getSubMajor,
} from "../slice/home.slice";
import { useCallback } from "react";

import {
  selectCategory,
  selectFilter,
  selectLecturer,
  selectMajor,
  selectPosts,
  selectSubCategory,
  selectSubMajor,
} from "../slice/home.selector";

export const useHome = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const posts = useSelector(selectPosts);
  const category = useSelector(selectCategory);
  const lecturer = useSelector(selectLecturer);
  const subCategory = useSelector(selectSubCategory);
  const major = useSelector(selectMajor);
  const subMajor = useSelector(selectSubMajor);

  const getPostsDispatch = useCallback(() => {
    dispatch(getPosts());
    dispatch(getCategory());
  }, []);

  const getCategoryDispatch = useCallback(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const getLecturerDispatch = useCallback(() => {
    dispatch(getLecturer({ page: 1, size: 10, search: "" }));
  }, [dispatch]);

  const getMajorDispatch = useCallback(() => {
    dispatch(getMajor());
  }, [dispatch]);

  const getSubMajorDispatch = useCallback(() => {
    dispatch(getSubMajor());
  }, [dispatch]);

  return {
    getPostsDispatch,
    posts,
    filter,
    getCategoryDispatch,
    category,
    lecturer,
    subCategory,
    major,
    subMajor,
    getLecturerDispatch,
    getMajorDispatch,
    getSubMajorDispatch,
  };
};
