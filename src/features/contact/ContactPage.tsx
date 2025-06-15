import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Globe, Facebook } from "lucide-react";

const ContactPage = () => {
  const { t } = useTranslation("contact");

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t("addressLabel"),
      value: t("address"),
      color: "text-secondary",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("phoneLabel"),
      value: t("phone"),
      color: "text-success",
      link: `tel:${t("phone")}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("emailLabel"),
      value: t("email"),
      color: "text-accent",
      link: `mailto:${t("email")}`,
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: t("websiteLabel"),
      value: t("website"),
      color: "text-warning",
      link: t("website"),
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: t("facebookLabel"),
      value: "Academy of Cryptography Techniques",
      color: "text-secondary",
      link: t("facebook"),
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: t("workingHoursLabel"),
      value: t("workingHours"),
      color: "text-info",
    },
  ];

  return (
    <div className="min-h-screen py-4 mt-10 rounded-lg sm:mt-14 md:mt-20 lg:mt-28 bg-background-base">
      {/* Hero Section */}
      <div className="relative text-text-on-primary bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="absolute inset-0 bg-background-overlay/10"></div>
        <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {t("title")}
            </h3>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 mx-auto -mt-8 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <div className="p-6 shadow-xl sm:p-8 bg-background-surface rounded-2xl h-fit">
              <div className="mb-6 sm:mb-8 text-text-primary">
                <h2 className="mb-4 text-xl font-bold sm:text-2xl">
                  {t("name")}
                </h2>
                <p className="text-sm leading-relaxed sm:text-base text-text-secondary">
                  {t("description")}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div
                      className={`${info.color} bg-background-elevated p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-200`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0 text-text-primary">
                      <h3 className="mb-1 text-sm font-semibold">
                        {info.label}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={`${info.color} hover:underline text-sm leading-relaxed transition-colors duration-200`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden shadow-xl rounded-2xl bg-background-surface">
              <div className="p-4 sm:p-6">
                <h2 className="mb-2 text-xl font-bold sm:text-2xl text-text-primary">
                  {t("findUsTitle")}
                </h2>
                <p className="text-sm sm:text-base text-text-secondary">
                  {t("findUsDescription")}
                </p>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.294934537686!2d105.79365357419393!3d20.98081138065655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc508f938fd%3A0x883e474806a2d1f2!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBt4bqtdCBtw6M!5e0!3m2!1svi!2s!4v1749989313197!5m2!1svi!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 sm:h-80 lg:h-[500px] xl:h-[630px]"
                ></iframe>

                {/* Map overlay button */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={t("mapLink")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 space-x-2 transition-all duration-200 rounded-lg shadow-lg sm:px-4 text-text-primary bg-background-elevated/90 backdrop-blur-sm hover:bg-background-elevated hover:shadow-xl"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{t("mapLabel")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 text-center transition-all duration-300 shadow-lg sm:p-6 hover:scale-105 rounded-xl hover:shadow-xl bg-background-surface">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full sm:w-12 sm:h-12 bg-background-elevated">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-sm font-semibold sm:text-base text-text-primary">
                {t("quickContactTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                {t("quickContactDescription")}
              </p>
            </div>

            <div className="p-4 text-center transition-all duration-300 shadow-lg sm:p-6 hover:scale-105 rounded-xl hover:shadow-xl bg-background-surface">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full sm:w-12 sm:h-12 bg-background-elevated">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
              </div>
              <h3 className="mb-2 text-sm font-semibold sm:text-base text-text-primary">
                {t("emailSupportTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                {t("emailSupportDescription")}
              </p>
            </div>

            <div className="p-4 text-center transition-all duration-300 shadow-lg sm:p-6 hover:scale-105 rounded-xl hover:shadow-xl bg-background-surface">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full sm:w-12 sm:h-12 bg-background-elevated">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="mb-2 text-sm font-semibold sm:text-base text-text-primary">
                {t("visitCampusTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                {t("visitCampusDescription")}
              </p>
            </div>

            <div className="p-4 text-center transition-all duration-300 shadow-lg sm:p-6 hover:scale-105 rounded-xl hover:shadow-xl bg-background-surface">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full sm:w-12 sm:h-12 bg-background-elevated">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-warning" />
              </div>
              <h3 className="mb-2 text-sm font-semibold sm:text-base text-text-primary">
                {t("officeHoursTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                {t("officeHoursDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
