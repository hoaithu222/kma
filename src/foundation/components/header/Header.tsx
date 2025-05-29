import clsx from "clsx";
import Logo from "./Logo";
import HeaderRight from "./HeaderRight";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 z-50  p-2 sm:p-3 md:p-4 ",
        "flex items-center",
        "shadow-lg shadow-header-border bg-header-bg h-16 sm:h-24 md:h-28 lg:h-36 "
      )}
    >
      <div className="container flex flex-col items-center justify-between mx-auto">
        <div className="grid w-full grid-cols-2 gap-2 md:border-b-2 md:border-header-border">
          <Logo />
          <HeaderRight />
        </div>

        <div className="hidden md:block">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
