import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme({ display }) {
  const systemPreferences = window.matchMedia(
    "(prefers-color-scheme: no-preference)"
  ).matches;
  
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreferences && pageClasses.add("dark");
  });

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {display ? (
        <div className="hidden sm:block">
          <MoonIcon
            className="h-9 text-gray-100 hidden md:block dark:hidden cursor-pointer"
            onClick={toggle}
          />
          <SunIcon
            className=" h-9 text-gray-100 hidden md:dark:block cursor-pointer"
            onClick={toggle}
          />
        </div>
      ) : (
        <div>
          <MoonIcon
            className="h-9 text-gray-100 block dark:hidden cursor-pointer"
            onClick={toggle}
          />
          <SunIcon
            className=" h-9 text-gray-100 hidden dark:block cursor-pointer"
            onClick={toggle}
          />
        </div>
      )}
    </>
  );
}
