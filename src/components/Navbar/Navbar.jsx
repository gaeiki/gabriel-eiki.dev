import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { Bars3Icon } from "@heroicons/react/24/solid";
import menuLinks from "../../json/menuLinks.json";

export default function Navbar() {

    const  [openMenu, setOpenMenu] = useState(false)
      
  return (
    <header>
      <nav className={`navbar`}>
        <div className="h-20 flex items-center">
          <div className="mx-7 w-full">
              <h4 >
                <a href="#home" className="text-sky-600 text-xl hover:text-teal-400 transition duration-300">
                  ‹GEO/›
                </a>  
              </h4>        
          </div>
          <div className="text-gray-100 hidden md:block px-7 py-2 ">
            <NavLinks />
          </div>
          <div className="px-7 hover:scale-110 duration-300">
            <ToggleTheme display={true}/>
          </div>

          <div onClick={() => setOpenMenu(!openMenu)} className={`z-[999] p-7 md:hidden ${openMenu ? "text-gray-100" : "text-gray-700 dark:text-gray-500 "}`}>
            <Bars3Icon className="h-10"/>
          </div>
          <div className={`md:hidden absolute w-2/3 h-screen px-7 py-2 top-0 right-0 bg-light-300 dark:bg-dark-300 duration-300 ${openMenu ? "right-0" : "right-[-100%]"}`}>
            <ul className="flex flex-col justify-center items-end h-full gap-10 py-2 text-xl">
                {menuLinks?.map((menu, i) => (
                    <li key={i} className="px-6 text-gray-100 hover:text-[#9346bc]">
                        <a onClick={() => setOpenMenu(!openMenu)} href={menu?.link}>{menu?.name}</a>
                    </li>
                ))}
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
