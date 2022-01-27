import React, {useState} from "react"
import {IconContext} from "react-icons"
import { FiMoon, FiSun } from "react-icons/fi";
import Navbar from "./Navbar/Navbar";
import "./Topbar.css"


 export default function Topbar({trigger, nav, toogleTheme, isDarkMode}) {

    
   const handleThemeToogle = () => {
        toogleTheme();
   }

    return (
      <div className="bg-background-primary-dark-color fixed z-99999999999999 top-0 left-0 w-full border-b border-txt-primary-dark-bg/10 dark:border-txt-primary-light-bg/10 border-solid h-16 w-full dark:bg-background-primary-light-color">
        <div className="mx-auto flex justify-between normal:px-6 items-center h-full max-w-7xl tiny:px-2 lg:px-32">
          <div className="font-accentFont text-txt-primary-dark-bg dark:text-txt-primary-light-bg font-black text-sm hidden normal:block lg:text-lg">👋 Priyanshu Sharma</div> 
          <div className="font-accentFont text-txt-primary-dark-bg dark:text-txt-primary-light-bg font-black text-sm  tiny:block normal:hidden">👋 Priyanshu S</div> 
          <div className="relative h-full flex justify-around items-center sm:w-32  tiny:w-28">



            <button type="button" aria-label="Theme reset button" onClick={handleThemeToogle} className={`transition duration-100 relative overflow-hidden w-10 h-10 shadow-md shadow-txt-primary-light-bg/80 dark:shadow-none dark:border dark:border-txt-primary-light-bg/30 dark:border-solid flex items-center justify-center rounded-md ${isDarkMode ? "bg-background-primary-accent-color": "bg-background-primary-light-color"} active:shadow-activeShadow ${nav ? " opacity-0 pointer-events-none" : "opacity-1 pointer-events-all"}`}>
                    <div className={`absolute transition duration-300 transform  ${isDarkMode? "translate-y-6 opacity-0 ease-bounce -rotate-180": "translate-y-0 opacity-1 ease-bounce rotate-180"}`}>
                            <IconContext.Provider
                                value={{ color: '#000', size: '18px' }}
                            >
                                <FiSun />
                          </IconContext.Provider>
                    </div>
                    <div className={`absolute transition duration-300 transform ${isDarkMode? "translate-y-0 opacity-1 ease-bounce rotate-0": "-translate-y-6 opacity-0 ease-bounce -rotate-180"}`}>
                            <IconContext.Provider
                                value={{ color: '#fff', size: '18px' }}
                            >
                                <FiMoon />
                          </IconContext.Provider>
                    </div>
                  </button>



              <div onClick={trigger} className="menu-icon hover-target">
                <span className="bg-txt-primary-dark-bg dark:bg-txt-primary-light-bg menu-icon__line menu-icon__line-left"></span>
                  <span className="bg-txt-primary-dark-bg dark:bg-txt-primary-light-bg menu-icon__line"></span>
                  <span className="bg-txt-primary-dark-bg dark:bg-txt-primary-light-bg menu-icon__line menu-icon__line-right"></span>
              </div>
            <Navbar  />
          </div> 
        </div>
      </div>
    )
}
