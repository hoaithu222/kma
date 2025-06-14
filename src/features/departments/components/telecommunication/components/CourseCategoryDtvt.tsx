import {
  BookOpen,
  Target,
  Users,
  Shield,
  Wrench,
  Briefcase,
  GraduationCap,
  Wifi,
} from "lucide-react";
import { TFunction } from "i18next";

export interface CourseCategory {
  type: string;
  color: string;
  badgeColor: string;
  icon: React.ElementType;
}

export const getCourseCategory = (
  courseName: string,
  t: TFunction
): CourseCategory => {
  const name = courseName.toLowerCase();

  // Bắt buộc chung (Xanh lam)
  if (
    name.includes("triết học") ||
    name.includes("kinh tế chính trị") ||
    name.includes("lịch sử đảng") ||
    name.includes("tư tưởng hồ chí minh") ||
    name.includes("chủ nghĩa xã hội") ||
    name.includes("giáo dục quốc phòng") ||
    name.includes("giáo dục thể chất") ||
    name.includes("kỹ năng mềm") ||
    name.includes("philosophy") ||
    name.includes("political economy") ||
    name.includes("party history") ||
    name.includes("ho chi minh") ||
    name.includes("socialism") ||
    name.includes("national defense") ||
    name.includes("physical education") ||
    name.includes("soft skills")
  ) {
    return {
      type: t("courseCategory.mandatory"),
      color: "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100",
      badgeColor: "bg-blue-500",
      icon: BookOpen,
    };
  }

  // Bổ trợ ngành (Xanh lá)
  if (
    name.includes("giải tích") ||
    name.includes("đại số") ||
    name.includes("vật lý") ||
    name.includes("xác suất") ||
    name.includes("phương pháp tính") ||
    name.includes("toán rời rạc") ||
    name.includes("thực hành vật lý") ||
    name.includes("calculus") ||
    name.includes("algebra") ||
    name.includes("physics") ||
    name.includes("probability") ||
    name.includes("numerical methods") ||
    name.includes("discrete mathematics") ||
    name.includes("physics laboratory")
  ) {
    return {
      type: t("courseCategory.supportive"),
      color: "bg-green-50 border-green-200 text-green-800 hover:bg-green-100",
      badgeColor: "bg-green-500",
      icon: Target,
    };
  }

  // Chuyên ngành (Tím)
  if (
    name.includes("viễn thông") ||
    name.includes("truyền số liệu") ||
    name.includes("hệ thống nhúng") ||
    name.includes("điều khiển tự động") ||
    name.includes("plc") ||
    name.includes("iot") ||
    name.includes("telecommunications") ||
    name.includes("data transmission") ||
    name.includes("embedded systems") ||
    name.includes("automatic control")
  ) {
    return {
      type: t("courseCategory.specialized"),
      color:
        "bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100",
      badgeColor: "bg-purple-500",
      icon: Wifi,
    };
  }

  // Giáo dục chuyên nghiệp (Cam)
  if (
    name.includes("tiếng anh") ||
    name.includes("quản trị dự án") ||
    name.includes("english") ||
    name.includes("project management")
  ) {
    return {
      type: t("courseCategory.professional"),
      color:
        "bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100",
      badgeColor: "bg-orange-500",
      icon: Users,
    };
  }

  // Bắt buộc chung nhóm ngành (Đỏ)
  if (
    name.includes("tin học đại cương") ||
    name.includes("mạng máy tính") ||
    name.includes("quản trị mạng") ||
    name.includes("cơ sở lý thuyết truyền tin") ||
    name.includes("introduction to informatics") ||
    name.includes("computer networks") ||
    name.includes("network administration") ||
    name.includes("information transmission")
  ) {
    return {
      type: t("courseCategory.mandatoryGroup"),
      color: "bg-red-50 border-red-200 text-red-800 hover:bg-red-100",
      badgeColor: "bg-red-500",
      icon: Shield,
    };
  }

  // Cơ sở ngành (Xám)
  if (
    name.includes("điện tử") ||
    name.includes("linh kiện") ||
    name.includes("mạch điện") ||
    name.includes("vi xử lý") ||
    name.includes("tín hiệu") ||
    name.includes("vlsi") ||
    name.includes("electronics") ||
    name.includes("components") ||
    name.includes("circuit") ||
    name.includes("microprocessor") ||
    name.includes("signal")
  ) {
    return {
      type: t("courseCategory.foundation"),
      color: "bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100",
      badgeColor: "bg-gray-500",
      icon: Wrench,
    };
  }

  // Thực tập (Hồng)
  if (name.includes("thực tập") || name.includes("internship")) {
    return {
      type: t("courseCategory.internship"),
      color: "bg-pink-50 border-pink-200 text-pink-800 hover:bg-pink-100",
      badgeColor: "bg-pink-500",
      icon: Briefcase,
    };
  }

  // Luận văn tốt nghiệp (Vàng)
  if (
    name.includes("đồ án tốt nghiệp") ||
    name.includes("luận văn tốt nghiệp") ||
    name.includes("graduation thesis") ||
    name.includes("graduation project")
  ) {
    return {
      type: t("courseCategory.thesis"),
      color:
        "bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100",
      badgeColor: "bg-yellow-500",
      icon: GraduationCap,
    };
  }

  return {
    type: t("courseCategory.other"),
    color: "bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100",
    badgeColor: "bg-indigo-500",
    icon: BookOpen,
  };
};
