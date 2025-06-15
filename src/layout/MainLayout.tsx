import { isMobileMenuOpenSelector } from "@/app/store/slices/navbar/selectors";

import Footer from "@/foundation/components/footer/Footer";
import Header from "@/foundation/components/header/Header";
import NavbarMobile from "@/foundation/components/navbar/NavbarMobile";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const isMobileMenuOpen = useSelector(isMobileMenuOpenSelector);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <NavbarMobile />
        </div>
      )}

      {/* Main Content */}
      <main className="container flex-grow px-2 py-4 mx-auto lg:px-4 lg:py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
