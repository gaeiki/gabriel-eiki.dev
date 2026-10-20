import { useTranslation } from "react-i18next";

export default function NavLinks() {
  const { t } = useTranslation();

  const menuLinks = [
    { name: t("nav.home"), link: "#home" },
    { name: t("nav.about"), link: "#about" },
    { name: t("nav.portfolio"), link: "#portfolio" },
    { name: t("nav.skills"), link: "#skills" },
    { name: t("nav.contact"), link: "#contact" },
  ];

  return (
    <ul className="flex items-center gap-1 text-lg">
      {menuLinks.map((menu, i) => (
        <li key={i} className="px-4 lg:px-8 hover:-translate-y-1 duration-200">
          <a href={menu.link}>{menu.name}</a>
        </li>
      ))}
    </ul>
  );
}
