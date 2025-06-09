import { useEffect } from "react";
import Banner from "./components/Banner";

import { useHome } from "./hooks/useHook";
import NewsPost from "./components/NewsPost";
import EventPostNew from "./components/EventPostNew";
import EventPostAdmission from "./components/EventPostAdmission";
import CooperationPost from "./components/CooperationPost";
import StudentPost from "./components/StudentPost";

const HomePage = () => {
  const {
    getCategoryDispatch,
    // getLecturerDispatch,
    // getMajorDispatch,
    // getSubMajorDispatch,
  } = useHome();

  useEffect(() => {
    getCategoryDispatch();
  }, []);

  return (
    <div className="w-full pt-16 overflow-hidden md:pt-24 lg:pt-36 ">
      {/* Banner */}
      <Banner />
      {/* Tin tức mới nhất*/}
      <NewsPost />
      {/* Sự kiện mới nhất */}
      <EventPostNew />
      {/* Sự kiện tuyển sinh */}
      <EventPostAdmission />
      {/* Hợp tác đối ngoại */}
      <CooperationPost />
      {/* Cựu sinh viên */}
      <StudentPost />
    </div>
  );
};

export default HomePage;
