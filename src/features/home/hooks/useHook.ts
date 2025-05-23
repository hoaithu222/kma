import { useDispatch, useSelector } from "react-redux";
import { getCategory, getPosts } from "../slice/home.slice";
import { useCallback } from "react";

import {
  selectCategory,
  selectFilter,
  selectPosts,
} from "../slice/home.selector";
import { IRequestBanner } from "@/core/api/home/types";

export const useHome = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const posts = useSelector(selectPosts);
  const category = useSelector(selectCategory);

  const getPostsDispatch = useCallback(
    (filter: IRequestBanner) => {
      dispatch(getPosts(filter));
    },
    [dispatch]
  );

  const getCategoryDispatch = useCallback(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return {
    getPostsDispatch,
    posts,
    filter,
    getCategoryDispatch,
    category,
  };
};
