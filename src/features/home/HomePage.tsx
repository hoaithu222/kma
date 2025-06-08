import { useEffect } from "react";
import Banner from "./components/Banner";

import Posts from "./components/Posts";
import { useHome } from "./hooks/useHook";

const HomePage = () => {
  const {
    getPostsDispatch,
    getCategoryDispatch,

    // getLecturerDispatch,
    // getMajorDispatch,
    // getSubMajorDispatch,
    category,
  } = useHome();

  useEffect(() => {
    getPostsDispatch();
    getCategoryDispatch();
  }, []);
  console.log("category", category);

  return (
    <div className="w-full pt-16 overflow-hidden md:pt-24 lg:pt-36">
      {/* Banner */}
      <Banner />
      {/* Tin tức*/}
      <Posts />
    </div>
  );
};

export default HomePage;
