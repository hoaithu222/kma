import clsx from "clsx";
import Logo from "./Logo";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 ",
        "flex items-center",
        "shadow-sm h-24 bg-primary-4 shadow-primary-4",
        "bg-gradient-to-r from-primary-2 via-primary-3 to-primary-6"
      )}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="grid w-full grid-cols-2 gap-2">
          <Logo />
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default Header;
