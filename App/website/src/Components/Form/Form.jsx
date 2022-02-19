import React from "react"
import {IconContext} from 'react-icons'
import { FiArrowRight } from 'react-icons/fi';
import "./Form.css"


 export default function Form() {
    return (
         <div className="py-16 lg:py-0 lg:h-screen flex overflow-hidden border-t border-solid border-txt-secondary-dark-bg/10" >
           <div className="sidebar hidden lg:block w-4/12 relative max-w-128"><span className="font-primaryHeading text-txt-primary-dark-bg inline-block transform -rotate-90 text-8xl w-168 text-center  absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">NOW, <br /> YOUR TURN</span></div>
            <div className="form w-11/12  mx-auto flex items-center justify-center max-w-128">
                <form action="#" className="flex flex-col w-full ">
                    <div className= "flex flex-col" >
                        <span className="text-txt-primary-dark-bg text-sm mb-2 ml-2 font-primaryHeading opacity-30">CONTACT ME</span>
                        <input className="text-tiny tempScreen:text-base" type="text" placeholder="YOUR GOOD 名前 (NAME)" />
                        <input className="text-tiny tempScreen:text-base" type="email" placeholder="YOUR EMAIL ADDRESS" />
                        <textarea className="text-tiny tempScreen:text-base" cols="30" rows="10" placeholder="LEAVE A NOTE FOR ME"></textarea>
                        <button aria-label="send a email" className="action-btn flex items-center justify-center mt-4 rounded-lg bg-background-primary-accent-color text-txt-primary-dark-bg py-6 box-border font-primaryHeading uppercase shadow-sm">
                          Let's talk
                            <IconContext.Provider
                                  value={{ className: 'w-5 h-5 ml-1 400:w-6 400:h-6' }}
                                >
                                  <FiArrowRight />
                              </IconContext.Provider>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
