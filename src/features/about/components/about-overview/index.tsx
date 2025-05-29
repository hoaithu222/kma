import { useTranslation } from "react-i18next";
import image from "@/assets/about/imageOverview.png";

import News from "./components/News";
import AccordionContentTab from "./components/AccordionContentTab";

import { GraduationCapIcon } from "lucide-react";

const AboutOverview = () => {
  const { t: tAboutOverview } = useTranslation("aboutOverview");

  return (
    <div className="grid grid-cols-12 gap-3 py-6 mt-16 sm:mt-20 md:mt-24 lg:mt-36">
      {/* Main Content */}
      <div className="col-span-12 mb-4 lg:col-span-9">
        <div className="mb-4 space-y-4">
          {/* Academy Overview */}
          <div className="p-4 rounded-lg shadow-lg bg-background-elevated">
            <div className="flex items-center mb-6">
              <GraduationCapIcon className="w-6 h-6 mr-3 text-primary sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <h1 className="text-sm font-bold sm:text-lg md:text-xl lg:text-2xl text-text-primary">
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
                  className="text-xs leading-relaxed text-text-secondary sm:text-sm lg:text-base"
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
