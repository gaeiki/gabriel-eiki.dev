import { useTranslation } from "react-i18next";
import { BsFillEnvelopeAtFill, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="p-10 py-12">
      <div className="flex flex-col items-center">
        <h3 className="titulo-secao">{t("contact.title")}</h3>
      </div>
      <div className="flex flex-col items-center mt-2 text-lg text-gray-800 dark:text-gray-100 text-center">
        <p>{t("contact.description")}</p>
        <ul className="mt-6 flex flex-col items-center gap-2">
          <li>
            <div className="flex gap-2 items-center cursor-text">
              <BsFillEnvelopeAtFill />
              <span>gabueiki96@gmail.com</span>
            </div>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-eiki-oshiro-07b324b0/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center hover:text-sky-500 transition-colors"
            >
              <BsLinkedin />
              <span>Linkedin: Gabriel Eiki Oshiro</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gaeiki"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center hover:text-sky-500 transition-colors"
            >
              <BsGithub />
              <span>Github: gaeiki</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gaeiki/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center hover:text-sky-500 transition-colors"
            >
              <BsInstagram />
              <span>Instagram: @gaeiki</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
