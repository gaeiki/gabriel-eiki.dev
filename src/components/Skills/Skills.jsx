import { useTranslation } from "react-i18next";
import skills from "../../json/skills.json";
import secondSkills from "../../json/secondSkills.json";
import SkillsBelt from "../SkillsBelt/SkillsBelt";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="p-10 py-12 bg-light-200 dark:bg-dark-200 duration-300"
    >
      <div className="flex flex-col items-center">
        <h3 className="titulo-secao">{t("skills.title")}</h3>
        <span className="mt-3 text-gray-800 dark:text-gray-100 text-lg">
          {t("skills.proficiency")}
        </span>
      </div>
      <div className="flex items-center justify-center mt-4 flex-wrap">
        {skills.map((skill, i) => (
          <SkillsBelt skill={skill} key={i} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="mt-10 text-gray-800 dark:text-gray-100 text-lg">
          {t("skills.other")}
        </span>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        {secondSkills.map((skill, i) => (
          <SkillsBelt skill={skill} key={i} />
        ))}
      </div>
    </section>
  );
}
