import HeaderSection from "./components/HeaderSection";
import SpecializationsSection from "./components/SpecializationsSection";
import TrainingObjectivesSection from "./components/TrainingObjectivesSection";
import SpecificObjectivesSection from "./components/SpecificObjectivesSection";
import AdmissionSection from "./components/AdmissionSection";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LearningProgram from "./components/LearningProgram";

const InformationSecurity = () => {
  const { t } = useTranslation("informationSecurity");
  const [activeTab, setActiveTab] = useState("generalInfo");

  // Refs for each section
  const sectionRefs = {
    generalInfo: useRef(null),
    trainingObjectives: useRef(null),
    specificObjectives: useRef(null),
    programInfo: useRef(null),
    professionalInfo: useRef(null),
    admissionInfo: useRef(null),
    graduationRequirementsDetails: useRef(null),
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    // Scroll to the corresponding section
    const targetRef = sectionRefs[tab as keyof typeof sectionRefs];
    if (targetRef && targetRef.current) {
      (targetRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // Intersection Observer to update active tab based on scroll position
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section");
          if (sectionId) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    Object.entries(sectionRefs).forEach(([_, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const navBar = [
    {
      label: t("tab.generalInfo"),
      value: "generalInfo",
      icon: "📋",
    },
    {
      label: t("tab.trainingObjectives"),
      value: "trainingObjectives",
      icon: "🎯",
    },
    {
      label: t("tab.specificObjectives"),
      value: "specificObjectives",
      icon: "📝",
    },
    {
      label: t("tab.programInfo"),
      value: "programInfo",
      icon: "📚",
    },
    {
      label: t("tab.professionalInfo"),
      value: "professionalInfo",
      icon: "💼",
    },
    {
      label: t("tab.admissionInfo"),
      value: "admissionInfo",
      icon: "🎓",
    },
    {
      label: t("tab.graduationRequirementsDetails"),
      value: "graduationRequirementsDetails",
      icon: "✅",
    },
  ];
  return (
    <div className="min-h-screen mt-10 bg-background-surface md:mt-20 lg:mt-24">
      <div className="container px-2 py-4 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="relative grid grid-cols-1 gap-0 sm:gap-4 md:gap-6 lg:gap-8 lg:grid-cols-8">
          {/* Enhanced Sidebar Navigation */}
          <div className="col-span-2 pb-2 lg:h-screen lg:pb-0">
            <div
              className={clsx(
                "z-50 p-6 border border-gray-100",
                "shadow-lg lg:fixed top-40 rounded-2xl lg:top-44 bg-background-surface lg:bg-transparent",
                {
                  "bg-background-surface": activeTab !== "generalInfo",
                }
              )}
            >
              <h3 className="pb-2 mb-4 text-lg font-semibold border-b border-gray-200 text-text-primary">
                Nội dung chính
              </h3>
              <nav className="space-y-2">
                {navBar.map((item, _index) => (
                  <button
                    key={item.value}
                    onClick={() => handleTabChange(item.value)}
                    className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-110 ${
                      activeTab === item.value
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-text-primary shadow-lg shadow-blue-500/25"
                        : "text-text-primary hover:bg-background-surface hover:text-text-secondary"
                    }`}
                  >
                    {/* Icon */}
                    <span className="text-lg">{item.icon}</span>

                    {/* Label */}
                    <span className="flex-1 text-sm font-medium leading-tight">
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {activeTab === item.value && (
                      <div className="absolute w-2 h-2 bg-white rounded-full right-2 animate-pulse" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Progress indicator */}
              <div className="pt-4 mt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
                  <span>Tiến độ đọc</span>
                  <span>
                    {Math.round(
                      ((navBar.findIndex((item) => item.value === activeTab) +
                        1) /
                        navBar.length) *
                        100
                    )}
                    %
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 transition-all duration-500 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{
                      width: `${((navBar.findIndex((item) => item.value === activeTab) + 1) / navBar.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen col-span-1 p-2 overflow-y-auto lg:col-span-6">
            <div className="space-y-3">
              <section
                ref={sectionRefs.generalInfo}
                data-section="generalInfo"
                className="scroll-mt-24"
              >
                <HeaderSection />
              </section>

              <section
                ref={sectionRefs.trainingObjectives}
                data-section="trainingObjectives"
                className="scroll-mt-24"
              >
                <TrainingObjectivesSection />
              </section>

              <section
                ref={sectionRefs.specificObjectives}
                data-section="specificObjectives"
                className="scroll-mt-24"
              >
                <SpecificObjectivesSection />
              </section>

              <section
                ref={sectionRefs.programInfo}
                data-section="programInfo"
                className="scroll-mt-24"
              >
                <LearningProgram />
              </section>

              <section
                ref={sectionRefs.professionalInfo}
                data-section="professionalInfo"
                className="scroll-mt-24"
              >
                <div className="p-8 text-center text-gray-500">
                  <h3 className="mb-2 text-lg font-semibold">
                    Thông tin nghề nghiệp
                  </h3>
                  <p>Nội dung sẽ được thêm vào đây</p>
                </div>
              </section>

              {/* Admission Section */}
              <section
                ref={sectionRefs.admissionInfo}
                data-section="admissionInfo"
                className="scroll-mt-24"
              >
                <AdmissionSection />
              </section>

              {/* Graduation Requirements Section */}
              <section
                ref={sectionRefs.graduationRequirementsDetails}
                data-section="graduationRequirementsDetails"
                className="scroll-mt-24"
              >
                <SpecializationsSection />
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <HeaderSection />
        <SpecializationsSection />
        <TrainingObjectivesSection />
        <SpecificObjectivesSection />
        <AdmissionSection />
      </div> */}
    </div>
  );
};

export default InformationSecurity;
