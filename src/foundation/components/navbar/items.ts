interface INavbarItem {
  label: string;
  path: string;
  icon: React.ReactNode | string;
  children?: INavbarItem[];
}

// Remove the direct useSelector call
// const category = useSelector(selectCategory);

// const studentSubCategory = category.find(
//   (item: IResponseCategory) => item.slug === "sinh-vien"
// );
// console.log("studentSubCategory", category);

export const NavbarItems: INavbarItem[] = [
  {
    label: "about",
    path: "/about/overview",
    icon: "FaBookOpen",
    children: [
      {
        label: "about-overview",
        path: "/about/overview",
        icon: "FaInfoCircle",
      },
      {
        label: "about-structure",
        path: "/about/training-structure",
        icon: "FaSitemap",
      },
      {
        label: "about-organizations",
        path: "/about/organizations",
        icon: "FaUsers",
      },
      {
        label: "lecturers",
        path: "/lecturers",
        icon: "FaUserTie",
      },
    ],
  },
  {
    label: "training",
    path: "/training/undergraduate-program",
    icon: "FaChalkboardTeacher",
    children: [
      {
        label: "training-undergraduate",
        path: "/training/undergraduate-program",
        icon: "FaGraduationCap",
      },
      {
        label: "training-master",
        path: "/training/master-program",
        icon: "FaUserGraduate",
      },
    ],
  },
  {
    label: "departments",
    path: "/center-department/information-technology",
    icon: "FaBuilding",
    children: [
      {
        label: "department-it",
        path: "/center-department/information-technology",
        icon: "FaLaptopCode",
      },
      {
        label: "department-security",
        path: "/center-department/information-security",
        icon: "FaShieldAlt",
      },
      {
        label: "department-telecom",
        path: "/center-department/telecommunication",
        icon: "FaBroadcastTower",
      },
    ],
  },
  // lấy từ api
  // {
  //   label: "research",
  //   path: "/research/research-projects",
  //   icon: "FaFlask",
  //   children: [
  //     {
  //       label: "research-projects",
  //       path: "/research/research-projects",
  //       icon: "FaProjectDiagram",
  //     },
  //     {
  //       label: "research-publications",
  //       path: "/research/scientific-publications",
  //       icon: "FaBook",
  //     },
  //   ],
  // },
  // {
  //   label: "admission",
  //   path: "/admission/undergraduate-program",
  //   icon: "FaUserPlus",
  //   children: [
  //     {
  //       label: "admission-undergraduate",
  //       path: "/admission/undergraduate-program",
  //       icon: "FaGraduationCap",
  //     },
  //     {
  //       label: "admission-master",
  //       path: "/admission/master-program",
  //       icon: "FaUserGraduate",
  //     },
  //     {
  //       label: "admission-doctor",
  //       path: "/admission/doctor-program",
  //       icon: "FaUserMd",
  //     },
  //   ],
  // },
  // lấy từ api
  // {
  //   label: "student",
  //   path: "/student/student-rules",
  //   icon: "FaUser",
  //   children: [
  //     {
  //       label: "student-forms",
  //       path: "/student/student-rules",
  //       icon: "FaFileAlt",
  //     },
  //     {
  //       label: "student-registration",
  //       path: "/student/register-learning",
  //       icon: "FaClipboardList",
  //     },
  //     {
  //       label: "student-research",
  //       path: "/student/student-research",
  //       icon: "FaLightbulb",
  //     },
  //     {
  //       label: "student-internship",
  //       path: "/student/internship",
  //       icon: "FaBriefcase",
  //     },
  //     {
  //       label: "student-project-practice",
  //       path: "/student/practice-project",
  //       icon: "FaTasks",
  //     },
  //     {
  //       label: "student-thesis",
  //       path: "/student/thesis",
  //       icon: "FaFileSignature",
  //     },
  //   ],
  // },
  // {
  //   label: "contact",
  //   path: "/contact/introduction",
  //   icon: "FaPhoneAlt",
  //   children: [
  //     {
  //       label: "contact-introduction",
  //       path: "/contact/introduction",
  //       icon: "FaInfoCircle",
  //     },
  //     { label: "contact-info", path: "/contact/contact", icon: "FaEnvelope" },
  //   ],
  // },
  // {
  //   label: "article",
  //   path: "/article/news",
  //   icon: "FaNewspaper",
  //   children: [
  //     { label: "article-news", path: "/article/news", icon: "FaBell" },
  //     { label: "article-posts", path: "/article/article", icon: "FaFileAlt" },
  //   ],
  // },
  // {
  //   label: "event",
  //   path: "/event/event-upcoming",
  //   icon: "FaCalendarAlt",
  //   children: [
  //     {
  //       label: "event-upcoming",
  //       path: "/event/event-upcoming",
  //       icon: "FaCalendarPlus",
  //     },
  //     {
  //       label: "event-past",
  //       path: "/event/event-past",
  //       icon: "FaCalendarCheck",
  //     },
  //   ],
  // },
];
// tách liên hệ ra các item khác
export const ContactItems: INavbarItem[] = [
  {
    label: "contact",
    path: "/contact",
    icon: "FaPhoneAlt",
  },
];
