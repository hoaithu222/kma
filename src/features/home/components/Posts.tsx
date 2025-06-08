import { useHome } from "../hooks/useHook";

import { useEffect } from "react";

const Posts = () => {
  const { getPostsDispatch, filter } = useHome();

  // useEffect(() => {
  //   getCategoryDispatch();
  // }, [getCategoryDispatch]);
  // console.log(category);

  useEffect(() => {
    getPostsDispatch();
  }, [getPostsDispatch, filter]);

  return (
    <div className="w-full h-full">
      <div>Posts</div>
    </div>
  );
};

export default Posts;
