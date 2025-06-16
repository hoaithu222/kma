import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import AppRoot from "./AppRoot.tsx";
import LoadingPage from "./foundation/components/loading/LoadingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <AppRoot />
    </Suspense>
  </StrictMode>
);

// Global error handler cho lỗi ngoài React (ví dụ: dynamic import, unhandled promise rejection)
window.addEventListener("error", (event) => {
  // Có thể log hoặc show thông báo tùy ý
  // alert("Unexpected error occurred. Please reload the page.");
  console.error("Global error:", event.error);
});
window.addEventListener("unhandledrejection", (event) => {
  // Có thể log hoặc show thông báo tùy ý
  // alert("Unexpected error occurred. Please reload the page.");
  console.error("Unhandled rejection:", event.reason);
});
