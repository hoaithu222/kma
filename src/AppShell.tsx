import clsx from "clsx";
// import React from "react";
import { Outlet } from "react-router-dom";
import Button from "./foundation/components/buttons/Button";
import { ArrowUpIcon } from "lucide-react";
import { ToastProvider } from "./foundation/components/notification/Toast";
// import ToastContainer from "./widgets/toast/ToastContainer";

/**
 * Appshell là layout chính của toàn bộ ứng dụng
 * Được render 1 lần duy nhất
 * Chứa các thành phần chung như Appbar,Toast,Modal,Dialog,Tooltip,Popover,
 * Dùng <Outlet /> để render các layout con (main,login,extension)
 * Mục tiêu: tránh render lại khi chuyển trang
 * giữ lại trạng thái của modal toast
 *  Là nơi khởi tạo hook toàn cục
 */
const AppShell = () => {
  // Warning tuyệt đổi không thêm localStorage ở đây
  return (
    <div
      className={clsx(
        "box-border flex min-h-screen flex-col rounded-lg bg-background-overlay text-center overflow-hidden overflow-x-hidden hidden-scrollbar"
      )}
    >
      {/* Outlet se được render layout tương ứng với router hiện tại (main,login,extension) */}
      <ToastProvider position="top-right" maxToasts={3}>
        <div className="flex flex-col flex-1 overflow-hidden">
          <Outlet />
        </div>
      </ToastProvider>
      {/* Scroll to top button */}
      <Button
        variant="gradientPrimary"
        size="medium"
        shape="round"
        className="fixed z-50 bottom-4 right-4"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ArrowUpIcon />
      </Button>
      {/* Các Modal,Toast,Dialog,Tooltip,Popover, sẽ được render ở đây */}
    </div>
  );
};

export default AppShell;
