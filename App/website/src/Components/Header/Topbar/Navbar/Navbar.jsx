import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return (
      <nav className="nav">
           <div className="nav__content">
                    <p className="mb-3 opacity-30 delay-300 text-tiny">MENU</p>
                    <ul className="nav__list">
                        <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-18 active-nav"><a href="http://" className="hover-target font-primaryHeading text-3xl 400:text-5xl md:text-6xl xl:text-7xl">HOME</a></li>
                        <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-18"><a href="http://" className="hover-target font-primaryHeading text-3xl 400:text-5xl  md:text-6xl xl:text-7xl">CONTACT ME</a></li>
                        <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-18"><a href="http://" className="hover-target font-primaryHeading text-3xl 400:text-5xl  md:text-6xl xl:text-7xl">GITHUB</a></li>
                        <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-18"><a href="http://" className="hover-target font-primaryHeading text-3xl 400:text-5xl  md:text-6xl xl:text-7xl">PROJECTS</a></li>
                        <li className="nav__list-item leading-8 400:leading-12 md:leading-16 xl:leading-18"><a href="http://" className="hover-target font-primaryHeading text-3xl 400:text-5xl  md:text-6xl xl:text-7xl">RESUME</a></li>
                    </ul>
               <p className="delay-350 text-tiny mt-6 opacity-30 lg:text-base">Made with 🖤 in india.</p>
                </div> 
      </nav>
    )
}
