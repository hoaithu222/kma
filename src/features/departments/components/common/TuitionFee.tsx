import {
  GraduationCap,
  DollarSign,
  Award,
  CreditCard,
  Heart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const TuitionFee = () => {
  const { t } = useTranslation("departments");

  return (
    <div className="min-h-screen p-4 mx-auto md:p-6 lg:p-8 max-w-7xl bg-background-surface">
      {/* Header */}
      <div className="mb-8 text-center md:mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg md:w-20 md:h-20 md:mb-6 bg-primary">
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-text-on-primary" />
        </div>
        <h3 className="mb-4 text-3xl font-bold md:text-4xl text-text-primary">
          {t("tuitionFees.title")}
        </h3>
        <div className="w-24 h-1 mx-auto rounded-full md:w-32 bg-primary"></div>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* Undergraduate Section */}
        <div className="overflow-hidden transition-all duration-300 border shadow-lg border-border-primary bg-background-elevated rounded-2xl hover:shadow-2xl">
          <div className="p-4 md:p-6 bg-primary">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-400 rounded-lg md:w-12 md:h-12">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-text-on-primary" />
              </div>
              <h4 className="text-xl font-bold md:text-2xl text-text-on-primary">
                {t("tuitionFees.undergraduate.title")}
              </h4>
            </div>
          </div>

          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 border-l-4 md:p-6 bg-background-surface border-primary rounded-xl">
                  <h3 className="flex items-center mb-3 text-base font-semibold md:text-lg text-primary">
                    <DollarSign className="w-4 h-4 mr-2 md:w-5 md:h-5" />
                    {t("tuitionFees.undergraduate.currentRate")}
                  </h3>
                  <p className="text-base font-medium md:text-lg text-text-primary">
                    {t("tuitionFees.undergraduate.perCredit", {
                      amount: "450.000",
                    })}
                  </p>
                </div>
              </div>
              <div className="p-4 border-l-4 md:p-6 bg-background-surface border-success rounded-xl">
                <h3 className="mb-4 text-base font-semibold md:text-lg text-success">
                  {t("tuitionFees.undergraduate.semesterCostTitle", {
                    minCredits: "18",
                    maxCredits: "24",
                  })}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg shadow-sm bg-background-subtle">
                    <span className="font-medium text-success">
                      {t("tuitionFees.undergraduate.cost15Credits", {
                        credits: "18",
                        amount: "8.100.000",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg shadow-sm bg-background-subtle">
                    <span className="font-medium text-success">
                      {t("tuitionFees.undergraduate.cost20Credits", {
                        credits: "24",
                        amount: "10.800.000",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Masters Section */}
        <div className="overflow-hidden transition-all duration-300 border shadow-lg bg-background-elevated border-border-primary rounded-2xl hover:shadow-2xl">
          <div className="p-4 md:p-6 bg-secondary">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-red-400 rounded-lg md:w-12 md:h-12">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-text-on-secondary" />
              </div>
              <h2 className="text-xl font-bold md:text-2xl text-text-on-secondary">
                {t("tuitionFees.mastersInfoSec.title")}
              </h2>
            </div>
          </div>

          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div className="p-4 border-l-4 border-red-400 md:p-6 bg-background-surface rounded-xl">
                <h3 className="flex items-center mb-3 text-base font-semibold md:text-lg text-secondary">
                  <DollarSign className="w-4 h-4 mr-2 md:w-5 md:h-5" />
                  {t("tuitionFees.mastersInfoSec.currentRate")}
                </h3>
                <p className="text-base font-medium md:text-lg text-secondary">
                  {t("tuitionFees.mastersInfoSec.perCredit", {
                    amount: "820.000",
                  })}
                </p>
              </div>

              <div className="p-4 border-l-4 md:p-6 border-accent bg-background-surface rounded-xl">
                <h3 className="mb-3 text-base font-semibold md:text-lg text-accent">
                  Lý do học phí cao hơn
                </h3>
                <p className="leading-relaxed text-accent">
                  {t("tuitionFees.mastersInfoSec.reasonHigherFee")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policies and Support Section */}
        <div className="overflow-hidden transition-all duration-300 border shadow-lg bg-background-elevated border-border-primary rounded-2xl hover:shadow-2xl">
          <div className="p-4 md:p-6 bg-success">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-green-400 rounded-lg md:w-12 md:h-12">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-text-on-primary" />
              </div>
              <h2 className="text-xl font-bold md:text-2xl text-text-on-primary">
                {t("tuitionFees.policiesAndSupport.title")}
              </h2>
            </div>
          </div>

          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 border-l-4 md:p-6 border-success bg-background-surface rounded-xl">
                  <h3 className="flex items-center mb-3 text-base font-semibold md:text-lg text-success">
                    <CreditCard className="w-4 h-4 mr-2 md:w-5 md:h-5" />
                    Phương thức thanh toán
                  </h3>
                  <p className="text-success">
                    {t("tuitionFees.policiesAndSupport.paymentMethod")}
                  </p>
                </div>

                <div className="p-4 border-l-4 md:p-6 border-primary bg-background-surface rounded-xl">
                  <h3 className="mb-3 text-base font-semibold md:text-lg text-primary">
                    Trả góp học phí
                  </h3>
                  <p className="text-primary">
                    {t("tuitionFees.policiesAndSupport.installmentOption")}
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="p-4 border-l-4 md:p-6 border-warning bg-background-surface rounded-xl">
                  <h3 className="mb-4 text-base font-semibold md:text-lg text-warning">
                    {t("tuitionFees.policiesAndSupport.feeExemptionReduction")}
                  </h3>
                  <ul className="space-y-2">
                    {(
                      t("tuitionFees.policiesAndSupport.exemptions", {
                        returnObjects: true,
                      }) as string[]
                    )?.map((exemption: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center text-warning"
                      >
                        <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
                        {exemption}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 border-l-4 md:p-6 border-info bg-background-surface rounded-xl">
                  <h3 className="flex items-center mb-3 text-base font-semibold md:text-lg text-info">
                    <Award className="w-4 h-4 mr-2 md:w-5 md:h-5" />
                    Học bổng
                  </h3>
                  <p className="text-info">
                    {t("tuitionFees.policiesAndSupport.scholarship")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionFee;
