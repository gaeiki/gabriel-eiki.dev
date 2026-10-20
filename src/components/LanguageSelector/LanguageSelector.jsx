import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "pt", label: "PT", fullName: "Português", flag: "🇧🇷" },
  { code: "en", label: "EN", fullName: "English", flag: "🇺🇸" },
  { code: "es", label: "ES", fullName: "Español", flag: "🇪🇸" },
];

export default function LanguageSelector({ isMobile = false }) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangCode = (i18n.resolvedLanguage || i18n.language || "pt").split("-")[0];
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center gap-2 py-2">
        <span className="text-sm text-gray-300 flex items-center gap-1">
          <GlobeAltIcon className="w-5 h-5 text-sky-400" />
        </span>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-2.5 py-1 text-sm rounded-md transition-all duration-200 flex items-center gap-1.5 font-medium border ${
                currentLangCode === lang.code
                  ? "bg-sky-600/30 border-sky-400 text-sky-300 font-bold shadow-sm"
                  : "border-gray-600/40 text-gray-300 hover:border-sky-400/60 hover:text-white"
              }`}
              title={lang.fullName}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-400/30 dark:border-gray-600/50 hover:border-sky-500/80 bg-light-100/40 dark:bg-dark-100/40 text-gray-800 dark:text-gray-100 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/50"
        aria-label={t("language.select")}
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="tracking-wide uppercase">{currentLang.label}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-500 dark:text-gray-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg bg-light-100 dark:bg-dark-200 border border-gray-200 dark:border-gray-700 shadow-xl py-1 z-50 animate-fadeIn backdrop-blur-sm">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors duration-150 ${
                currentLangCode === lang.code
                  ? "bg-sky-500/15 text-sky-600 dark:text-sky-400 font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.fullName}</span>
              </span>
              {currentLangCode === lang.code && (
                <span className="text-xs text-sky-500 font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
