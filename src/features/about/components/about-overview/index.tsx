import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import {
  GraduationCapIcon,
  UsersIcon,
  BookOpenIcon,
  GlobeIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
} from "@/foundation/components/accordion/Accordion";

const AboutOverview = () => {
  const { t: tAboutOverview } = useTranslation("aboutOverview");

  return (
    <div className="grid grid-cols-12 gap-6 p-8 px-4 mt-36">
      <div className="col-span-3">
        <div className="p-6 rounded-lg shadow-lg bg-background-elevated">
          <h2 className="mb-4 text-xl font-bold text-text-primary">
            {tAboutOverview("menu.about-overview")}
          </h2>
          <nav className="space-y-3">
            <Link
              to="/about/overview"
              className="block p-3 transition-colors rounded-md text-primary bg-primary-light hover:bg-primary"
            >
              {tAboutOverview("menu.about-overview")}
            </Link>
            <Link
              to="/about/training-structure"
              className="block p-3 transition-colors rounded-md text-text-secondary hover:text-primary hover:bg-background-muted"
            >
              {tAboutOverview("menu.about-structure")}
            </Link>
            <Link
              to="/about/organizations"
              className="block p-3 transition-colors rounded-md text-text-secondary hover:text-primary hover:bg-background-muted"
            >
              {tAboutOverview("menu.about-organizations")}
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-6">
        <div className="space-y-8">
          {/* Academy Introduction */}
          <div className="p-8 rounded-lg shadow-lg bg-background-elevated">
            <div className="flex items-center mb-6">
              <GraduationCapIcon className="w-8 h-8 mr-3 text-primary" />
              <h1 className="text-2xl font-bold text-text-primary">
                {tAboutOverview("aboutAcademy.title")}
              </h1>
            </div>
            <div className="space-y-4">
              {(
                tAboutOverview("aboutAcademy.content", {
                  returnObjects: true,
                }) as string[]
              ).map((paragraph: string, index: number) => (
                <p key={index} className="leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Accordion for detailed sections */}
          <Accordion
            type="multiple"
            variant="bordered"
            size="lg"
            className="space-y-4"
          >
            <AccordionItem
              value="training"
              title={tAboutOverview("trainingContent.title")}
              icon={<BookOpenIcon className="w-6 h-6 text-success" />}
            >
              <div className="pt-4 space-y-3">
                {(
                  tAboutOverview("trainingContent.content", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <p
                    key={index}
                    className="leading-relaxed text-text-secondary"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </AccordionItem>

            {/* Research Section */}
            <AccordionItem
              value="research"
              title={tAboutOverview("researchContent.title")}
              icon={<BookOpenIcon className="w-6 h-6 text-accent" />}
            >
              <div className="pt-4 space-y-3">
                {(
                  tAboutOverview("researchContent.content", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <p
                    key={index}
                    className="leading-relaxed text-text-secondary"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </AccordionItem>

            {/* International Cooperation Section */}
            <AccordionItem
              value="international"
              title={tAboutOverview("internationalContent.title")}
              icon={<GlobeIcon className="w-6 h-6 text-warning" />}
            >
              <div className="pt-4 space-y-3">
                {(
                  tAboutOverview("internationalContent.content", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <p
                    key={index}
                    className="leading-relaxed text-text-secondary"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </AccordionItem>

            {/* Alumni Section */}
            <AccordionItem
              value="alumni"
              title={tAboutOverview("alumniContent.title")}
              icon={<UsersIcon className="w-6 h-6 text-error" />}
            >
              <div className="pt-4 space-y-3">
                {(
                  tAboutOverview("alumniContent.content", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <p
                    key={index}
                    className="leading-relaxed text-text-secondary"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* News Sidebar */}
      <div className="col-span-3">
        <div className="p-6 rounded-lg shadow-lg bg-background-elevated">
          <h2 className="mb-4 text-xl font-bold text-text-primary">
            Các tin tức nổi bật
          </h2>
          <div className="space-y-4">
            <div className="p-4 transition-colors rounded-lg cursor-pointer bg-background-muted hover:bg-background-subtle">
              <h4 className="mb-2 font-semibold text-text-primary">
                Tin tức mẫu 1
              </h4>
              <p className="text-sm text-text-secondary">
                Mô tả ngắn về tin tức...
              </p>
            </div>
            <div className="p-4 transition-colors rounded-lg cursor-pointer bg-background-muted hover:bg-background-subtle">
              <h4 className="mb-2 font-semibold text-text-primary">
                Tin tức mẫu 2
              </h4>
              <p className="text-sm text-text-secondary">
                Mô tả ngắn về tin tức...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverview;
