import { useTranslation } from "react-i18next";
import image from "@/assets/about/imageOverview.png";

import AccordionContentTab from "./components/AccordionContentTab";

import { GraduationCapIcon } from "lucide-react";

const AboutOverview = () => {
  const { t: tAboutOverview } = useTranslation("aboutOverview");

  return (
    <div className="grid grid-cols-12 gap-3 py-2 mt-12 sm:py-4 lg:py-6 sm:mt-16 md:mt-20 lg:mt-28">
      {/* Main Content */}
      <div className="col-span-12 mb-4 lg:col-span-12">
        <div className="mb-4 space-y-2 lg:space-y-4">
          {/* Academy Overview */}
          <div className="p-2 rounded-lg shadow-lg lg:p-3 sm:p-4 bg-background-surface">
            <div className="flex items-center mb-2 lg:mb-4 sm:mb-6">
              <div className="p-2 rounded-lg bg-background-overlay">
                <GraduationCapIcon className="w-10 h-10 text-primary md:w-12 md:h-12 lg:w-14 lg:h-14" />
              </div>

              <h2 className="text-base font-bold text-text-primary sm:text-lg md:text-xl lg:text-2xl">
                {tAboutOverview("academyOverview.title")}
              </h2>
            </div>
            <div className="w-full h-full p-1 overflow-hidden rounded-md lg:p-2">
              <img src={image} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="mt-2 space-y-2 sm:mt-4 sm:space-y-4 lg:mt-6">
              {(
                tAboutOverview("academyOverview.content", {
                  returnObjects: true,
                }) as string[]
              ).map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-text-secondary sm:text-base lg:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Accordion Sections */}
        <AccordionContentTab />
      </div>

      {/* News Sidebar */}
    </div>
  );
};

export default AboutOverview;
