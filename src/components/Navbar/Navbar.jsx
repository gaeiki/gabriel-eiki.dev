import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavLinks from "../NavLinks/NavLinks";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation();

  const menuLinks = [
    { name: t("nav.home"), link: "#home" },
    { name: t("nav.about"), link: "#about" },
    { name: t("nav.portfolio"), link: "#portfolio" },
    { name: t("nav.skills"), link: "#skills" },
    { name: t("nav.contact"), link: "#contact" },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="h-20 flex items-center justify-between">
          <div className="mx-7">
            <h4>
              <a href="#home" className="text-sky-600 text-xl hover:text-teal-400 transition duration-300">
                ‹GEO/›
              </a>
            </h4>
          </div>

          <div className="text-gray-100 hidden md:block px-7 py-2">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-4 px-7">
            <LanguageSelector />
            <div className="hover:scale-110 duration-300">
              <ToggleTheme display={true} />
            </div>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={`z-[999] p-7 md:hidden cursor-pointer ${
              openMenu ? "text-gray-100" : "text-gray-700 dark:text-gray-500"
            }`}
          >
            {openMenu ? <XMarkIcon className="h-10" /> : <Bars3Icon className="h-10" />}
          </div>

          {/* Menu Lateral Mobile */}
          <div
            className={`md:hidden fixed w-2/3 h-screen px-7 py-2 top-0 right-0 bg-light-300 dark:bg-dark-300 duration-300 z-[998] shadow-2xl ${
              openMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col justify-center items-end h-full gap-8 py-2 text-xl">
              {menuLinks.map((menu, i) => (
                <li key={i} className="px-6 text-gray-100 hover:text-[#9346bc]">
                  <a onClick={() => setOpenMenu(false)} href={menu.link}>
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="px-6">
                <LanguageSelector isMobile={true} />
              </li>
              <li className="px-6">
                <ToggleTheme display={false} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
