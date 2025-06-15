import DetailPost from "@/features/detail-post/DetailPost";
import { lazy } from "react";

const HomePage = lazy(() => import("@/features/home/HomePage.tsx"));
const LoginPage = lazy(() => import("@/features/auth/Login.tsx"));
const EventPage = lazy(() => import("@/features/event/EventPage.tsx"));

const StudentPage = lazy(() => import("@/features/student/StudentPage.tsx"));
const NewsPage = lazy(() => import("@/features/news/NewsPage.tsx"));
const ForumPage = lazy(() => import("@/features/forum/ForumPage.tsx"));
const AboutOverview = lazy(
  () => import("@/features/about/components/about-overview")
);
const Organizations = lazy(
  () => import("@/features/about/components/organizations")
);
const TrainingStructure = lazy(
  () => import("@/features/about/components/training-structure")
);

const InformationSecurity = lazy(
  () => import("@/features/departments/components/information-security")
);
const InformationTechnology = lazy(
  () => import("@/features/departments/components/information-technology")
);
const Telecommunication = lazy(
  () => import("@/features/departments/components/telecommunication")
);
const ResearchProjects = lazy(
  () => import("@/features/research/components/research-projects")
);
const ScientificPublications = lazy(
  () => import("@/features/research/components/scientific-publications")
);

const TrainingMasterProgram = lazy(
  () => import("@/features/training/components/master-program")
);
const TrainingUndergraduateProgram = lazy(
  () => import("@/features/training/components/undergraduate-program")
);
const IntroductionContact = lazy(
  () => import("@/features/contact/components/introduction")
);
const ResearchPage = lazy(() => import("@/features/research/ResearchPage.tsx"));
const LecturerPage = lazy(() => import("@/features/lecturer/LecturerPage.tsx"));
const DetailLecturer = lazy(
  () => import("@/features/lecturer/components/DetailLecturer")
);
const PostPage = lazy(() => import("@/features/posts/PostPage.tsx"));
const AdmissionPage = lazy(
  () => import("@/features/admission/AdmissionPage.tsx")
);
const defaultOptions = {
  requireAuth: true,
  hideInMenu: false,
};
const defaultAuthOptions = {
  ...defaultOptions,
  requireAuth: true,
};

export const ROUTE = {
  home: {
    path: "/",
    element: <HomePage />,
    layout: "main",
    options: defaultOptions,
  },
  login: {
    path: "/login",
    element: <LoginPage />,
    layout: "login",
    options: defaultAuthOptions,
  },

  // giới thiệu
  aboutOverview: {
    path: "/about/overview",
    element: <AboutOverview />,
    layout: "main",
    options: defaultOptions,
  },
  aboutTrainingStructure: {
    path: "/about/training-structure",
    element: <TrainingStructure />,
    layout: "main",
    options: defaultOptions,
  },
  aboutOrganizations: {
    path: "/about/organizations",
    element: <Organizations />,
    layout: "main",
    options: defaultOptions,
  },
  lecturer: {
    path: "/lecturers",
    element: <LecturerPage />,
    layout: "main",
    options: defaultOptions,
  },
  detailLecturer: {
    path: "/lecturer/:id",
    element: <DetailLecturer />,
    layout: "main",
    options: defaultOptions,
  },
  // đào tạo
  trainingUndergraduateProgram: {
    path: "/training/undergraduate-program",
    element: <TrainingUndergraduateProgram />,
    layout: "main",
    options: defaultOptions,
  },
  trainingMasterProgram: {
    path: "/training/master-program",
    element: <TrainingMasterProgram />,
    layout: "main",
    options: defaultOptions,
  },

  // khoa trung tâm
  centerDepartmentInformationTechnology: {
    path: "/center-department/information-technology",
    element: <InformationTechnology />,
    layout: "main",
    options: defaultOptions,
  },
  centerDepartmentInformationSecurity: {
    path: "/center-department/information-security",
    element: <InformationSecurity />,
    layout: "main",
    options: defaultOptions,
  },
  centerDepartmentTelecommunication: {
    path: "/center-department/telecommunication",
    element: <Telecommunication />,
    layout: "main",
    options: defaultOptions,
  },
  // nghiên cứu
  researchProjects: {
    path: "/research/projects",
    element: <ResearchProjects />,
    layout: "main",
    options: defaultOptions,
  },
  researchPublications: {
    path: "/research/publications",
    element: <ScientificPublications />,
    layout: "main",
    options: defaultOptions,
  },
  research: {
    path: "/research/:id",
    element: <ResearchPage />,
    layout: "main",
    options: defaultOptions,
  },

  // liên hệ
  contactIntroduction: {
    path: "/contact/introduction",
    element: <IntroductionContact />,
    layout: "main",
    options: defaultOptions,
  },

  // blog

  news: {
    path: "/news",
    element: <NewsPage />,
    layout: "main",
    options: defaultOptions,
  },

  forum: {
    path: "/forum",
    element: <ForumPage />,
    layout: "main",
    options: defaultOptions,
  },
  detailPost: {
    path: "/detail-post/:id",
    element: <DetailPost />,
    layout: "main",
    options: defaultOptions,
  },
  // router động
  student: {
    path: "/student/:id",
    element: <StudentPage />,
    layout: "main",
    options: defaultOptions,
  },
  event: {
    path: "/events/:id",
    element: <EventPage />,
    layout: "main",
    options: defaultOptions,
  },
  post: {
    path: "/post/:id",
    element: <PostPage />,
    layout: "main",
    options: defaultOptions,
  },
  admission: {
    path: "/admission/:id",
    element: <AdmissionPage />,
    layout: "main",
    options: defaultOptions,
  },
} satisfies Record<
  string,
  {
    path: string;
    element: React.ReactNode;
    layout: React.ReactNode;
    options: {
      requireAuth: boolean;
      hideInMenu: boolean;
    };
  }
>;
