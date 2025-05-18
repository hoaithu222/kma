import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slice/home.slice";
import { useCallback } from "react";

import { selectFilter, selectPosts } from "../slice/home.selector";
import { IRequestBanner } from "@/core/api/home/types";

export const useHome = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const posts = useSelector(selectPosts);

  const getPostsDispatch = useCallback(
    (filter: IRequestBanner) => {
      dispatch(getPosts(filter));
    },
    [dispatch]
  );

  return { getPostsDispatch, posts, filter };
};
