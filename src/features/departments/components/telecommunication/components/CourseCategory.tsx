import { TFunction } from "i18next";
import {
  BookOpen,
  CircuitBoard,
  Radio,
  Wifi,
  Cpu,
  Microchip,
  Briefcase,
  FileText,
  Target,
  Signal,
  Antenna,
} from "lucide-react";

export interface CourseCategory {
  type: string;
  color: string;
  badgeColor: string;
  icon: React.ReactNode;
}

export const getCourseCategory = (
  courseName: string,
  t: TFunction
): CourseCategory => {
  const name = courseName.toLowerCase();

  // Electronics courses (Blue)
  if (
    name.includes("điện tử") ||
    name.includes("electronics") ||
    name.includes("circuit")
  ) {
    return {
      type: t("courseCategory.electronics"),
      color: "bg-blue-100 text-blue-800",
      badgeColor: "bg-blue-200",
      icon: <CircuitBoard className="w-4 h-4" />,
    };
  }

  // Telecommunication courses (Purple)
  if (
    name.includes("viễn thông") ||
    name.includes("telecommunication") ||
    name.includes("communication")
  ) {
    return {
      type: t("courseCategory.telecom"),
      color: "bg-purple-100 text-purple-800",
      badgeColor: "bg-purple-200",
      icon: <Radio className="w-4 h-4" />,
    };
  }

  // Wireless courses (Green)
  if (
    name.includes("không dây") ||
    name.includes("wireless") ||
    name.includes("wifi")
  ) {
    return {
      type: t("courseCategory.wireless"),
      color: "bg-green-100 text-green-800",
      badgeColor: "bg-green-200",
      icon: <Wifi className="w-4 h-4" />,
    };
  }

  // Embedded systems courses (Indigo)
  if (
    name.includes("nhúng") ||
    name.includes("embedded") ||
    name.includes("microcontroller")
  ) {
    return {
      type: t("courseCategory.embedded"),
      color: "bg-indigo-100 text-indigo-800",
      badgeColor: "bg-indigo-200",
      icon: <Cpu className="w-4 h-4" />,
    };
  }

  // Signal processing courses (Orange)
  if (
    name.includes("tín hiệu") ||
    name.includes("signal") ||
    name.includes("processing")
  ) {
    return {
      type: t("courseCategory.signal"),
      color: "bg-orange-100 text-orange-800",
      badgeColor: "bg-orange-200",
      icon: <Signal className="w-4 h-4" />,
    };
  }

  // Antenna courses (Teal)
  if (
    name.includes("anten") ||
    name.includes("antenna") ||
    name.includes("anten")
  ) {
    return {
      type: t("courseCategory.antenna"),
      color: "bg-teal-100 text-teal-800",
      badgeColor: "bg-teal-200",
      icon: <Antenna className="w-4 h-4" />,
    };
  }

  // VLSI courses (Pink)
  if (
    name.includes("vlsi") ||
    name.includes("vi mạch") ||
    name.includes("microchip")
  ) {
    return {
      type: t("courseCategory.vlsi"),
      color: "bg-pink-100 text-pink-800",
      badgeColor: "bg-pink-200",
      icon: <Microchip className="w-4 h-4" />,
    };
  }

  // Internship (Yellow)
  if (name.includes("thực tập") || name.includes("internship")) {
    return {
      type: t("courseCategory.internship"),
      color: "bg-yellow-100 text-yellow-800",
      badgeColor: "bg-yellow-200",
      icon: <Briefcase className="w-4 h-4" />,
    };
  }

  // Thesis (Red)
  if (
    name.includes("khóa luận") ||
    name.includes("luận văn") ||
    name.includes("thesis")
  ) {
    return {
      type: t("courseCategory.thesis"),
      color: "bg-red-100 text-red-800",
      badgeColor: "bg-red-200",
      icon: <FileText className="w-4 h-4" />,
    };
  }

  // Specialization courses (Gray)
  if (
    name.includes("chuyên ngành") ||
    name.includes("specialization") ||
    name.includes("specialized")
  ) {
    return {
      type: t("courseCategory.specialization"),
      color: "bg-gray-100 text-gray-800",
      badgeColor: "bg-gray-200",
      icon: <Target className="w-4 h-4" />,
    };
  }

  // Default category
  return {
    type: t("courseCategory.other"),
    color: "bg-gray-100 text-gray-800",
    badgeColor: "bg-gray-200",
    icon: <BookOpen className="w-4 h-4" />,
  };
};
