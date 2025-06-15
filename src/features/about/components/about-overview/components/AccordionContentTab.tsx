import { useState } from "react";
import Accordion, {
  AccordionItem,
} from "@/foundation/components/accordion/Accordion";
import TimelineItem from "@/foundation/components/timeline/TimelineItem";

import {
  BookOpenIcon,
  BuildingIcon,
  GlobeIcon,
  HistoryIcon,
  UsersIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import FacultyTimeline from "@/foundation/components/timeline/FacultyTimeline";
import EventTimeline from "@/foundation/components/timeline/EventTimeline";
import FlexibleTimeline from "@/foundation/components/timeline/FlexibleTimeline";

const AccordionContentTab = () => {
  const { t: tAboutOverview } = useTranslation("aboutOverview");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timeline = tAboutOverview("briefHistory.timeline", {
    returnObjects: true,
  }) as any[];

  return (
    <Accordion
      variant="ghost"
      type="multiple"
      size="lg"
      className="space-y-1 md:space-y-2 lg:space-y-4"
    >
      {/* Brief History Section */}
      <AccordionItem
        value="history"
        title={tAboutOverview("briefHistory.title")}
        icon={
          <HistoryIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-primary" />
        }
      >
        <div className="pt-2 space-y-3 md:pt-3 lg:pt-4 md:space-y-4 lg:space-y-6">
          <div className="space-y-2 md:space-y-3 lg:space-y-4">
            <div className="relative px-2 md:px-3 lg:px-4">
              {/* Central timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:w-0.75 lg:w-1 bg-gradient-to-b from-secondary via-secondary-light to-secondary transform -translate-x-0.5 opacity-30 rounded-full"></div>

              {timeline.map((item: any, index: number) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  content={
                    item.event ||
                    item.milestone ||
                    item.status ||
                    item.reputation
                  }
                  index={index}
                  isHovered={hoveredIndex}
                  onHover={setHoveredIndex}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}

              {/* Timeline end indicator */}
              <div className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 rounded-full shadow-lg md:w-3 md:h-3 lg:w-4 lg:h-4 left-1/2 bg-secondary"></div>
            </div>
          </div>

          <div className="px-2 mt-4 space-y-2 md:px-3 lg:px-4 md:mt-6 lg:mt-8 md:space-y-3 lg:space-y-4">
            <div className="p-3 border md:p-4 lg:p-6 bg-background-elevated rounded-xl border-border-subtle">
              <p className="text-xs leading-relaxed md:text-sm lg:text-base text-text-secondary">
                {tAboutOverview("briefHistory.summary")}
              </p>
            </div>
            <div className="p-3 border md:p-4 lg:p-6 bg-background-elevated rounded-xl border-border-subtle">
              <p className="text-xs leading-relaxed md:text-sm lg:text-base text-text-secondary">
                {tAboutOverview("briefHistory.futureGoals")}
              </p>
            </div>
          </div>
        </div>
      </AccordionItem>

      {/* Structure and Team Section */}
      <AccordionItem
        value="structure"
        title={tAboutOverview("organizationalStructureAndTeam.title")}
        icon={
          <BuildingIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-success" />
        }
      >
        <div className="pt-2 space-y-3 md:pt-3 lg:pt-4 md:space-y-4 lg:space-y-6">
          <p className="text-xs md:text-sm lg:text-base text-text-secondary">
            {tAboutOverview("organizationalStructureAndTeam.introduction")}
          </p>

          {/* Board of Directors */}
          <div className="space-y-2 md:space-y-3 lg:space-y-4">
            <FacultyTimeline
              faculty={
                tAboutOverview(
                  "organizationalStructureAndTeam.boardOfDirectors.members",
                  {
                    returnObjects: true,
                  }
                ) as any[]
              }
              icon={
                <UsersIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
              }
              title={tAboutOverview(
                "organizationalStructureAndTeam.boardOfDirectors.title"
              )}
            />

            <p className="text-xs md:text-sm lg:text-base text-text-secondary">
              {tAboutOverview(
                "organizationalStructureAndTeam.boardOfDirectors.description"
              )}
            </p>
          </div>

          {/* Functional Departments */}
          <div className="space-y-2 md:space-y-3 lg:space-y-4">
            <h3 className="text-base font-semibold md:text-lg lg:text-xl text-text-primary">
              {tAboutOverview(
                "organizationalStructureAndTeam.functionalDepartments.title"
              )}
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-text-secondary">
              {tAboutOverview(
                "organizationalStructureAndTeam.functionalDepartments.introduction"
              )}
            </p>
            <ul className="space-y-1 text-xs list-disc list-inside md:space-y-2 md:text-sm lg:text-base text-text-secondary">
              {(
                tAboutOverview(
                  "organizationalStructureAndTeam.functionalDepartments.list",
                  {
                    returnObjects: true,
                  }
                ) as string[]
              ).map((dept: string, index: number) => (
                <li key={index}>{dept}</li>
              ))}
            </ul>
            <p className="text-xs md:text-sm lg:text-base text-text-secondary">
              {tAboutOverview(
                "organizationalStructureAndTeam.functionalDepartments.description"
              )}
            </p>
          </div>
        </div>
      </AccordionItem>

      {/* Research and Technology Transfer Section */}
      <AccordionItem
        value="research"
        title={tAboutOverview("scientificResearchAndTechnologyTransfer.title")}
        icon={
          <BookOpenIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-accent" />
        }
      >
        <div className="pt-2 space-y-3 md:pt-3 lg:pt-4 md:space-y-4 lg:space-y-6">
          {(
            tAboutOverview(
              "scientificResearchAndTechnologyTransfer.activities",
              {
                returnObjects: true,
              }
            ) as any[]
          ).map((activity: any, index: number) => (
            <div key={index} className="space-y-1 md:space-y-2">
              <h3 className="text-base font-semibold md:text-lg text-text-primary">
                {activity.activityTitle}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-text-secondary">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </AccordionItem>

      {/* External Cooperation Section */}
      <AccordionItem
        value="cooperation"
        title={tAboutOverview("externalCooperation.title")}
        icon={
          <GlobeIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-warning" />
        }
      >
        <div className="pt-2 space-y-3 md:pt-3 lg:pt-4 md:space-y-4 lg:space-y-6">
          {(
            tAboutOverview("externalCooperation.cooperations", {
              returnObjects: true,
            }) as any[]
          ).map((coop: any, index: number) => (
            <EventTimeline
              key={index}
              events={coop.events}
              title={coop.title}
              icon={
                <GlobeIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-warning" />
              }
            />
          ))}
        </div>
      </AccordionItem>

      {/* Alumni Section */}
      <AccordionItem
        value="alumni"
        title={tAboutOverview("alumni.title")}
        icon={
          <UsersIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-error" />
        }
      >
        <div className="pt-2 space-y-3 md:pt-3 lg:pt-4 md:space-y-4 lg:space-y-6">
          {(
            tAboutOverview("alumni.achievements", {
              returnObjects: true,
            }) as any[]
          ).map((achievement: any, index: number) => {
            // Format data for FlexibleTimeline
            const timelineData = [
              {
                title: achievement.category,
                description: achievement.description || "",
                period: "Current",
                status: "completed" as const,
                tags: ["Alumni Achievement"],
                customFields: achievement.details
                  ? {
                      "Achievement Details": achievement.details.join("\n"),
                    }
                  : undefined,
              },
            ];

            return (
              <FlexibleTimeline
                key={index}
                data={timelineData}
                title={achievement.category}
                icon={
                  <UsersIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-error" />
                }
                theme="professional"
                colorScheme="red"
                showTags={true}
                showStatus={true}
              />
            );
          })}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionContentTab;
