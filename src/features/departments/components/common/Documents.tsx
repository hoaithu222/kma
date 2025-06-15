import { useTranslation } from "react-i18next";

interface DocumentsProps {
  departmentKey: string;
}

const Documents: React.FC<DocumentsProps> = ({ departmentKey }) => {
  const { t } = useTranslation("departments");

  // Mapping links theo department key
  const linkItem = [
    {
      key: "cntt",
      link: "https://actvneduvn-my.sharepoint.com/:b:/g/personal/vinhlk_actvn_edu_vn/EdhUZKISlRhIqUf16uHfDUIBat_uWgtq4M-WKlPQjueE9g?e=d6ppvt",
    },
    {
      key: "attt",
      link: "https://actvneduvn-my.sharepoint.com/:b:/g/personal/vinhlk_actvn_edu_vn/EYSQuANGHedLgpuNsF0US_ABRDKAJsL9fEpUUb1DaffJnA?e=sKgxrL",
    },
    {
      key: "dtvt",
      link: "https://actvneduvn-my.sharepoint.com/:b:/g/personal/vinhlk_actvn_edu_vn/EYsAwH0UGVhDiaLH1KiR468Bf2nGf0qjG5tMU22PY_pQfw?e=5euBub",
    },
  ];

  // Tìm link tương ứng với department key
  const currentLink =
    linkItem.find((item) => item.key === departmentKey)?.link ||
    linkItem[0].link;

  // Helper để ép kiểu trả về của t về array
  const tArray = (key: string) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl">
      {/* Header Section */}
      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="w-2 h-8 mr-2 bg-white rounded-full sm:h-10 sm:mr-3 opacity-80"></div>
          <h2 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
            📚 {t("trainingMaterials.title")}
          </h2>
        </div>
        <p className="text-sm leading-relaxed sm:text-base md:text-lg text-white/90">
          {t("trainingMaterials.description")}
        </p>
      </div>

      {/* Objectives Section */}
      <div className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
        <div className="p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm">
          <h3 className="mb-3 text-base font-semibold text-white sm:text-lg md:text-xl">
            🎯 Mục tiêu
          </h3>
          <div className="grid gap-2">
            {tArray("trainingMaterials.objectives").map(
              (objective: string, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-xs font-bold text-purple-600 bg-white rounded-full">
                    {index + 1}
                  </span>
                  <p className="text-xs text-white/90 sm:text-sm md:text-base">
                    {objective}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Structure Section */}
      <div className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
        <div className="p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm">
          <h3 className="mb-4 text-base font-semibold text-white sm:text-lg md:text-xl">
            🏗️ Cấu trúc chương trình
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Curriculum */}
            <div className="p-3 rounded-lg sm:p-4 bg-white/10">
              <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">
                {t("trainingMaterials.structure.curriculum.title")}
              </h4>
              <div className="space-y-1">
                {tArray("trainingMaterials.structure.curriculum.parts").map(
                  (part: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-white rounded-full opacity-70"></span>
                      <p className="text-xs sm:text-sm text-white/80">{part}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Textbooks */}
            <div className="p-3 rounded-lg sm:p-4 bg-white/10">
              <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">
                {t("trainingMaterials.structure.textbooks.title")}
              </h4>
              <div className="space-y-1">
                {tArray("trainingMaterials.structure.textbooks.features").map(
                  (feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-white rounded-full opacity-70"></span>
                      <p className="text-xs sm:text-sm text-white/80">
                        {feature}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Labs */}
            <div className="p-3 rounded-lg sm:p-4 bg-white/10">
              <h4 className="mb-2 text-sm font-semibold text-white sm:text-base">
                {t("trainingMaterials.structure.labs.title")}
              </h4>
              <div className="space-y-1">
                {tArray("trainingMaterials.structure.labs.items").map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-2 bg-white rounded-full opacity-70"></span>
                      <p className="text-xs sm:text-sm text-white/80">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
        <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm">
          <h3 className="mb-3 text-base font-semibold text-white sm:text-lg md:text-xl">
            🤝 {t("trainingMaterials.support.title")}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {tArray("trainingMaterials.support.methods").map(
              (method: string, index: number) => (
                <div key={index} className="p-3 rounded-lg bg-white/5">
                  <div className="flex items-center mb-1">
                    <span className="flex items-center justify-center w-6 h-6 mr-2 text-xs font-bold text-purple-600 bg-white rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90">{method}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Download Link Section */}
      <div className="px-3 pb-4 sm:px-4 sm:pb-6 md:px-6 md:pb-8 lg:px-8 lg:pb-10">
        <div className="p-2 border lg:p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border-white/20">
          <div className="flex flex-col items-center justify-between gap-2 lg:items-start sm:flex-row sm:items-center">
            <div>
              <h3 className="mb-1 text-base font-semibold text-white sm:text-lg">
                📄 Tài liệu chi tiết
              </h3>
              <p className="text-xs sm:text-sm text-white/80">
                Tải xuống tài liệu đào tạo chi tiết cho ngành{" "}
                {departmentKey.toUpperCase()}
              </p>
            </div>
            <a
              href={currentLink}
              className="px-4 py-2 text-xs font-medium text-white transition-all duration-300 border rounded-lg sm:text-sm bg-white/20 hover:bg-white/30 hover:scale-105 backdrop-blur-sm border-white/30 hover:border-white/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center">
                📥 Tải xuống
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
