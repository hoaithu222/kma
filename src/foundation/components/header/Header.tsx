import clsx from "clsx";
import Logo from "./Logo";
import HeaderRight from "./HeaderRight";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 p-3 ",
        "flex items-center",
        "shadow-lg shadow-header-border bg-header-bg h-36 "
      )}
    >
      <div className="container flex flex-col items-center justify-between mx-auto">
        <div className="grid w-full grid-cols-2 gap-2 border-b-2 border-header-border">
          <Logo />
          <HeaderRight />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
