import React, {useState} from "react"
import {IconContext} from "react-icons"
import { FiMoon, FiSun } from "react-icons/fi";
import Navbar from "./Navbar/Navbar";
import "./Topbar.css"


 export default function Topbar({trigger, nav}) {

    
    return (
      <div className="bg-background-primary-dark-color fixed z-99999999999999 top-0 left-0 w-full border-b border-txt-primary-dark-bg/10  border-solid h-16 w-full">
        <div className="mx-auto flex justify-between normal:px-6 items-center h-full max-w-7xl tiny:px-2 lg:px-32">
          <div className="font-accentFont text-txt-primary-dark-bg font-black text-sm hidden normal:block lg:text-lg">👋 Priyanshu Sharma</div> 
          <div className="font-accentFont text-txt-primary-dark-bg font-black text-sm  tiny:block normal:hidden">👋 Priyanshu S</div> 
          <div className="relative h-full flex justify-around items-center sm:w-32  tiny:w-28">

              <div onClick={trigger} className="menu-icon hover-target">
                <span className="bg-txt-primary-dark-bg  menu-icon__line menu-icon__line-left"></span>
                  <span className="bg-txt-primary-dark-bg menu-icon__line"></span>
                  <span className="bg-txt-primary-dark-bg  menu-icon__line menu-icon__line-right"></span>
              </div>
            <Navbar  />
          </div> 
        </div>
      </div>
    )
}
