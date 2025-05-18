import AboutPage from "@/features/about/AboutPage";
import BlogPage from "@/features/blog/BlogPage";
import ContactPage from "@/features/contact/ContactPage";
import ForumPage from "@/features/forum/ForumPage";
import NewsPage from "@/features/news/NewsPage";
import { lazy } from "react";

const HomePage = lazy(() => import("@/features/home/HomePage.tsx"));
const LoginPage = lazy(() => import("@/features/auth/Login.tsx"));

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
  about: {
    path: "/about",
    element: <AboutPage />,
    layout: "main",
    options: defaultOptions,
  },
  blog: {
    path: "/blog",
    element: <BlogPage />,
    layout: "main",
    options: defaultOptions,
  },
  news: {
    path: "/news",
    element: <NewsPage />,
    layout: "main",
    options: defaultOptions,
  },
  contact: {
    path: "/contact",
    element: <ContactPage />,
    layout: "main",
    options: defaultOptions,
  },
  forum: {
    path: "/forum",
    element: <ForumPage />,
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
