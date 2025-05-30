import { useTranslation } from "react-i18next";
import image from "@/assets/about/imageOverview.png";

import News from "./components/News";
import AccordionContentTab from "./components/AccordionContentTab";

import { GraduationCapIcon } from "lucide-react";

const AboutOverview = () => {
  const { t: tAboutOverview } = useTranslation("aboutOverview");

  return (
    <div className="grid grid-cols-12 gap-3 py-4 mt-12 sm:py-6 sm:mt-16 md:mt-20 lg:mt-24">
      {/* Main Content */}
      <div className="col-span-12 mb-4 lg:col-span-9">
        <div className="mb-4 space-y-4">
          {/* Academy Overview */}
          <div className="p-3 rounded-lg shadow-lg sm:p-4 bg-background-elevated">
            <div className="flex items-center mb-4 sm:mb-6">
              <GraduationCapIcon className="w-5 h-5 mr-2 text-primary sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              <h1 className="text-base font-bold text-text-primary sm:text-lg md:text-xl lg:text-2xl">
                {tAboutOverview("academyOverview.title")}
              </h1>
            </div>
            <div className="w-full h-full p-2 overflow-hidden rounded-md">
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
      <div className="hidden lg:block lg:col-span-3">
        <News />
      </div>
    </div>
  );
};

export default AboutOverview;
