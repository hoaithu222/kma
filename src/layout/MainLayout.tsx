import Footer from "@/foundation/components/footer/Footer";
import Header from "@/foundation/components/header/Header";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex-grow min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
