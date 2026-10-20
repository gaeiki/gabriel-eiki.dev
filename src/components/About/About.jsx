import { useTranslation } from "react-i18next";
import profilePhoto from "../../assets/Profile.jpeg";
import { BsFillCloudArrowDownFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import curriculo from "../../assets/Currículo Gabriel Eiki - Desenvolvedor.pdf";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col items-center p-10 md:p-20 md:flex-row bg-light-200 dark:bg-dark-200 duration-300"
    >
      <div className="md:flex-1 md:flex md:justify-center">
        <img
          src={profilePhoto}
          alt={t("about.photoAlt")}
          className="h-80 shadow-lg shadow-slate-700 dark:shadow-slate-900 rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-10 md:flex-1 md:items-start">
        <h3 className="titulo-secao">{t("about.title")}</h3>
        <p className="text-justify mt-3 text-lg indent-8 text-gray-800 dark:text-gray-100 leading-relaxed">
          {t("about.bio")}
        </p>
        <div className="flex gap-5 text-3xl mt-5">
          <a
            href={curriculo}
            download
            className="button-custom border-sky-700 hover:bg-gray-500/25 dark:hover:bg-gray-200/10 text-gray-800 dark:text-gray-100"
          >
            <BsFillCloudArrowDownFill />
            <span className="text-xl text-gray-800 dark:text-gray-100">
              {t("about.resume")}
            </span>
          </a>
          <a
            href="mailto:gabueiki96@gmail.com"
            className="button-custom border-sky-700 hover:bg-gray-500/25 dark:hover:bg-gray-200/10 text-gray-800 dark:text-gray-100"
          >
            <BsFillEnvelopeAtFill />
            <span className="text-xl dark:text-gray-100">
              {t("about.email")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
