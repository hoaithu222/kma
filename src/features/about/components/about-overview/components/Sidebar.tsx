import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t: tNavbar } = useTranslation("navbar");
  return (
    <div className="min-h-screen">
      <div className="p-2 md:p-3 lg:p-4 rounded-lg shadow-lg bg-background-elevated">
        <h2 className="mb-2 md:mb-3 lg:mb-4 text-lg md:text-xl lg:text-2xl font-bold text-text-primary">
          {tNavbar("about")}
        </h2>
        <nav className="space-y-2 md:space-y-3">
          <Link
            to="/about/overview"
            className="block p-2 md:p-3 text-sm md:text-base transition-colors rounded-md text-primary bg-primary-light hover:bg-primary"
          >
            {tNavbar("about-overview")}
          </Link>
          <Link
            to="/about/training-structure"
            className="block p-2 md:p-3 text-sm md:text-base transition-colors rounded-md text-text-secondary hover:text-primary hover:bg-background-muted"
          >
            {tNavbar("about-structure")}
          </Link>
          <Link
            to="/about/organizations"
            className="block p-2 md:p-3 text-sm md:text-base transition-colors rounded-md text-text-secondary hover:text-primary hover:bg-background-muted"
          >
            {tNavbar("about-organizations")}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
