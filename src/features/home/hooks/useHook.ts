import { useDispatch, useSelector } from "react-redux";
import {
  getBannerPost,
  getCategory,
  getCooperationPost,
  getEventPostAdmission,
  getEventPostNew,
  getLecturer,
  getMajor,
  getNewsPost,
  getPosts,
  getStudentPost,
  getSubMajor,
} from "../slice/home.slice";
import { useCallback } from "react";

import {
  selectBannerPost,
  selectCategory,
  selectCooperationPost,
  selectEventPostAdmission,
  selectEventPostNew,
  selectFilter,
  selectLecturer,
  selectMajor,
  selectNewsPost,
  selectPosts,
  selectStudentPost,
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
  const bannerPost = useSelector(selectBannerPost);
  const newsPost = useSelector(selectNewsPost);
  const eventPostNew = useSelector(selectEventPostNew);
  const eventPostAdmission = useSelector(selectEventPostAdmission);
  const studentPost = useSelector(selectStudentPost);
  const cooperationPost = useSelector(selectCooperationPost);

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
  // lấy banner với id subCategory 53
  const getBannerPostDispatch = useCallback(() => {
    dispatch(getBannerPost());
  }, [dispatch]);
  // lấy tin tức mới nhất với id subCategory  50
  const getNewsPostDispatch = useCallback(() => {
    dispatch(getNewsPost());
  }, [dispatch]);
  // lấy sụ kiện mới nhất với id 49
  const getEventPostNewDispatch = useCallback(() => {
    dispatch(getEventPostNew());
  }, [dispatch]);
  // lấy các bài post liên quan đến đào tạo tuyển sinh id 51
  const getEventPostAdmissionDispatch = useCallback(() => {
    dispatch(getEventPostAdmission());
  }, [dispatch]);
  // lấy các bài post liên quan đến cựu sinh viên id 52
  const getStudentPostDispatch = useCallback(() => {
    dispatch(getStudentPost());
  }, [dispatch]);
  // lấy các bài post liên quan đến hợp tác đối ngoại id 40
  const getCooperationPostDispatch = useCallback(() => {
    dispatch(getCooperationPost());
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
    bannerPost,
    newsPost,
    eventPostNew,
    eventPostAdmission,
    studentPost,
    cooperationPost,
    getBannerPostDispatch,
    getNewsPostDispatch,
    getEventPostNewDispatch,
    getEventPostAdmissionDispatch,
    getStudentPostDispatch,
    getCooperationPostDispatch,
  };
};
