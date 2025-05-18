import Banner from "./components/Banner";
import Posts from "./components/Posts";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Banner */}
      <Banner />
      {/* Tin tức*/}
      <Posts />
    </div>
  );
};

export default HomePage;
