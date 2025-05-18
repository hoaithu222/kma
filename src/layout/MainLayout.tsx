import Footer from "@/foundation/components/footer/Footer";
import Header from "@/foundation/components/header/Header";
import Navbar from "@/foundation/components/navbar/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <div className="mt-24 shadow-md bg-bg-navbar text-primary-foreground shadow-accent-foreground">
        <Navbar />
      </div>
      <div className="flex-grow min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
