import React from "react"
import {IconContext} from 'react-icons'
import { FiArrowRight } from 'react-icons/fi';
import "./Form.css"


 export default function Form() {
    return (
         <div className="py-16 lg:py-0 lg:h-screen flex overflow-hidden border-t border-solid border-txt-secondary-dark-bg/10" >
           <div id="contactMe" className="sidebar hidden lg:block w-4/12 relative max-w-128"><span className="font-primaryHeading text-txt-primary-dark-bg inline-block transform -rotate-90 text-8xl w-168 text-center  absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">NOW, <br /> YOUR TURN</span></div>
            <div className="form w-11/12  mx-auto flex items-center justify-center max-w-128">
                <form action="#" className="flex flex-col w-full">
                    <div className= "flex flex-col" >
                        <div className="relative mb-2 input-wrap-1">

                    <h1 className="text-txt-primary-dark-bg/60 font-primaryHeading text-base mb-2 ml-2" >CONTACT ME</h1>
                          <input id="name" className="peer w-full text-tiny text-txt-primary-dark-bg tiny:text-tiny tempScreen:text-base sm:text-lg placeholder-transparent" type="text" placeholder="YOUR GOOD 名前 (NAME)" />
                          <label className="text-txt-primary-dark-bg font-primaryHeading absolute top-0 left-1 text-tiny tracking-widest peer-placeholder-shown:text-tiny peer-placeholder-shown:text-txt-primary-dark-bg peer-placeholder-shown:top-12 transition-all peer-placeholder-shown:left-6 peer-focus:top-7 peer-focus:left-2 peer-focus:text-super-tiny peer-focus:text-txt-primary-dark-bg tiny:text-tiny fit:left-8 normal:peer-placeholder-shown:text-base normal:peer-focus:text-tiny normal:peer-focus:top-6 normal:peer-placeholder-shown:top-11.5 tempScreen:peer-placeholder-shown:top-12.5 tempScreen:peer-focus:top-6 md:peer-placeholder-shown:left-8 md:peer-focus:left-2" for="name" >YOUR GOOD नाम (NAME)</label>
                        </div>
                        <div className="relative mb-2 input-wrap">
                          <input id="email" className="peer w-full text-tiny text-txt-primary-dark-bg tempScreen:text-base sm:text-lg placeholder-transparent" type="text" placeholder="YOUR EMAIL ADDRESS" />

                          <label className="text-txt-primary-dark-bg font-primaryHeading absolute -top-5 left-2 text-tiny tracking-widest peer-placeholder-shown:text-tiny peer-placeholder-shown:text-txt-primary-dark-bg peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:left-6 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-super-tiny peer-focus:text-txt-primary-dark-bg normal:peer-placeholder-shown:text-base normal:peer-placeholder-shown:top-5.5 normal:peer-focus:text-tiny normal:peer-focus:-top-5 tempScreen:peer-placeholder-shown:top-6 tempScreen:peer-focus:-top-5 sm:peer-placeholder-shown:top-6.5 sm:peer-focus:-top-5 md:peer-placeholder-shown:left-8 md:peer-focus:left-2" for="email" >YOUR EMAIL पता (ADDRESS)</label>
                        </div>
                        <div className="relative mb-2 input-wrap">
                        <textarea id="note" className="peer w-full text-tiny text-txt-primary-dark-bg tempScreen:text-base sm:text-lg placeholder-transparent" cols="30" rows="10" placeholder="LEAVE A NOTE FOR ME"></textarea>

                          <label className="text-txt-primary-dark-bg font-primaryHeading absolute -top-5 left-2 text-tiny tracking-widest peer-placeholder-shown:text-tiny peer-placeholder-shown:text-txt-primary-dark-bg peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:left-6 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-super-tiny peer-focus:text-txt-primary-dark-bg normal:peer-placeholder-shown:text-base normal:peer-placeholder-shown:top-5.5 normal:peer-focus:text-tiny normal:peer-focus:-top-5 tempScreen:peer-placeholder-shown:top-6 tempScreen:peer-focus:-top-5 sm:peer-placeholder-shown:top-6.5 sm:peer-focus:-top-5 md:peer-placeholder-shown:left-8 md:peer-focus:left-2" for="note" >LEAVE A सन्देश (NOTE) FOR ME</label>
                        </div>
                      <div className="relative mt-8 group">
                        <div className="group-hover:opacity-100 transition duration-1000 absolute -inset-1 bg-gradient-to-r from-background-secondary-accent-color to-background-primary-accent-color opacity-60 rounded-lg animate-tiltBtn"></div>
                            <button aria-label="send a email" className="relative w-full flex items-center justify-center rounded-lg bg-background-primary-dark-color text-txt-primary-dark-bg py-6 box-border font-primaryHeading uppercase shadow-sm">
                          Let's talk
                            <IconContext.Provider
                                  value={{ className: 'w-5 h-5 ml-1 400:w-6 400:h-6 group-hover:transform group-hover:translate-x-1 transition duration-300' }}
                                >
                                  <FiArrowRight />
                              </IconContext.Provider>
                        </button>
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    )
}
