import { AlertTriangle, RefreshCw, Home, Mail, Shield } from "lucide-react";

const ErrorFallback = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative w-full max-w-lg">
        {/* Main Error Card */}
        <div className="p-8 text-center border shadow-2xl bg-white/95 backdrop-blur-lg border-white/20 rounded-2xl">
          {/* Academy Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-lg bg-gradient-to-br from-red-500 to-red-600">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-md -top-2 -right-2 bg-amber-400">
                <AlertTriangle className="w-4 h-4 text-amber-800" />
              </div>
            </div>
          </div>

          {/* Academy Title */}
          <div className="mb-6">
            <h3 className="mb-1 text-xl font-bold text-gray-800">
              Học Viện Kỹ Thuật Mật Mã
            </h3>
            <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h4 className="mb-3 text-2xl font-bold text-red-600">
              Hệ thống gặp sự cố
            </h4>
            <p className="leading-relaxed text-gray-600">
              Chúng tôi xin lỗi vì sự bất tiện này. Hệ thống đang gặp một số vấn
              đề kỹ thuật. Vui lòng thử lại sau ít phút hoặc liên hệ bộ phận hỗ
              trợ kỹ thuật.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-all duration-200 transform shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl hover:scale-105"
            >
              <RefreshCw className="w-4 h-4" />
              Tải lại trang
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => (window.location.href = "/")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Trang chủ
              </button>

              <button
                onClick={() =>
                  (window.location.href = "mailto:support@cryptoacademy.edu.vn")
                }
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Hỗ trợ
              </button>
            </div>
          </div>

          {/* Error Code */}
          <div className="pt-4 mt-6 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              Mã lỗi: CE-{Date.now().toString().slice(-6)} |
              <span className="ml-1">{new Date().toLocaleString("vi-VN")}</span>
            </p>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="p-4 mt-4 text-center border bg-white/80 backdrop-blur-md border-white/20 rounded-xl">
          <p className="text-sm text-gray-600">
            <strong>Thông tin hữu ích:</strong> Nếu bạn đang thực hiện một bài
            kiểm tra hoặc bài tập quan trọng, dữ liệu của bạn đã được tự động
            lưu. Vui lòng liên hệ giáo viên nếu cần hỗ trợ.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-10 left-10 animate-pulse opacity-60"></div>
      <div className="absolute w-3 h-3 bg-indigo-400 rounded-full top-20 right-20 animate-pulse opacity-40"></div>
      <div className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-50 bottom-20 left-20 animate-pulse"></div>
      <div className="absolute w-4 h-4 bg-blue-300 rounded-full bottom-10 right-10 animate-pulse opacity-30"></div>
    </div>
  );
};

export default ErrorFallback;
