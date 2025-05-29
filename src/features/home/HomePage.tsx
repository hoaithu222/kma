import Banner from "./components/Banner";

import Posts from "./components/Posts";

const HomePage = () => {
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
