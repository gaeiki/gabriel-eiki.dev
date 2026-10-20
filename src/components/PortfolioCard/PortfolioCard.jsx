import { useTranslation } from "react-i18next";
import projects from "../../json/projects.json";

const projectKeyMap = {
  "Portfólio": "portfolio",
  "Organo": "organo",
  "Olá Mundo": "olaMundo",
  "Secret Number": "secretNumber",
  "Alura Space": "aluraSpace",
  "Teste Dot": "testeDot",
};

export default function PortfolioCard() {
  const { t } = useTranslation();

  return (
    <div className="md:flex flex-wrap gap-5 justify-center mt-10 hidden">
      {projects.map((project, i) => {
        const key = projectKeyMap[project.name];
        const projectName = key ? t(`portfolio.projects.${key}`, { defaultValue: project.name }) : project.name;

        return (
          <div
            className="w-96 p-4 bg-slate-500 dark:bg-slate-800 rounded-xl hover:scale-105 duration-300"
            key={i}
          >
            <a href={project.live_link} target="_blank" rel="noreferrer">
              <img
                src={project.img}
                alt={projectName}
                className="rounded-lg cursor-pointer h-44 w-full object-cover"
                title={projectName}
              />
            </a>
            <h3 className="text-xl text-gray-800 my-3 dark:text-gray-100 font-semibold">
              {projectName}
            </h3>
            <div className="flex gap-3">
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 dark:bg-gray-300 px-2 py-1 inline-block rounded-md hover:bg-gray-800/50 dark:hover:bg-gray-300/10 duration-300 text-sm font-medium"
              >
                {t("portfolio.sourceCode")}
              </a>
              <a
                href={project.live_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 dark:bg-gray-300 px-2 py-1 inline-block rounded-md hover:bg-gray-800/50 dark:hover:bg-gray-300/10 duration-300 text-sm font-medium"
              >
                {t("portfolio.liveDemo")}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
