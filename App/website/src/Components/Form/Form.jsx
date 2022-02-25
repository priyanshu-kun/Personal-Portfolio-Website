import React, {useState} from "react"
import {IconContext} from 'react-icons'
import { FiArrowRight } from 'react-icons/fi';
import {client} from "../../client"
import recaptchaKey from "../../recaptchaKey";
import ButtonPreloader from "./ButtonPreloader/ButtonPreloader";
import "./Form.css"

const initialState = {
    name: "",
    email: "",
    note: ""
}


 export default function Form() {


    const [FormData, setFormData] = useState(initialState)
    const [Loading, setLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)


    function handleFormInputs(e) {
        setFormData({...FormData, [e.target.name]: e.target.value}) 
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        if(FormData.name === "" || FormData.email === "" || FormData.note === "") {
          return alert("Form fields cannot be empty!")
        }
        setLoading(true);
        const contact = {
          _type: 'contact',
          name: FormData.name,
          email: FormData.email,
          note: FormData.note
        }
        client.create(contact)
          .then(data => {
            setLoading(false);
            setIsSubmitted(true)
          })
    }


    return (
         <div className="py-16 lg:py-0 lg:h-screen flex overflow-hidden border-t border-solid border-txt-secondary-dark-bg/10" >
           <div id="contactMe" className="sidebar hidden lg:block w-4/12 relative max-w-128"><span className="font-primaryHeading text-txt-primary-dark-bg inline-block transform -rotate-90 text-8xl w-168 text-center  absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">NOW, <br /> YOUR TURN</span></div>
            <div className="form w-11/12  mx-auto flex items-center justify-center max-w-128">
                {
                  !isSubmitted ? (

                      <form onSubmit={handleSubmitForm} action="#" className="flex flex-col w-full">

                           <h1 className="text-txt-primary-dark-bg/60 font-primaryHeading text-base mb-2 ml-2 transition-all" >CONTACT ME</h1>
                          <div className= "flex flex-col" >
                              <div className="relative mb-2 input-wrap-1">
                                <input value={FormData.name} onChange={handleFormInputs} name="name" id="name" className="peer transition-all w-full text-tiny text-txt-primary-dark-bg tiny:text-tiny normal:text-base sm:text-lg placeholder-transparent font-accentFont font-normal mt-6 placeholder-shown:mt-0 focus-within:mt-6" type="text" placeholder="YOUR GOOD 名前 (NAME)" />
                                <label className="text-txt-primary-dark-bg font-primaryHeading absolute left-2 top-2 text-tiny tracking-widest peer-placeholder-shown:text-tiny peer-placeholder-shown:text-txt-primary-dark-bg peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:left-6 peer-focus:top-2 peer-focus:left-2 peer-focus:text-super-tiny peer-focus:text-txt-primary-dark-bg normal:peer-placeholder-shown:text-base normal:peer-placeholder-shown:top-5.5 normal:peer-focus:text-tiny normal:peer-focus:top-2 tempScreen:peer-placeholder-shown:top-6 tempScreen:peer-focus:top-2 sm:peer-placeholder-shown:top-6.5 sm:peer-focus:top-1 md:peer-placeholder-shown:left-8 md:peer-focus:left-2" for="name" >YOUR GOOD नाम (NAME)</label>
                              </div>
                              <div className="relative mb-2 input-wrap">
                                <input value={FormData.email} onChange={handleFormInputs} name="email" id="email" className="peer w-full text-tiny text-txt-primary-dark-bg normal:text-base sm:text-lg placeholder-transparent font-bodyText mt-8 placeholder-shown:mt-0 focus-within:mt-8 transition-all" type="text" placeholder="YOUR EMAIL ADDRESS" />

                                <label className="text-txt-primary-dark-bg font-primaryHeading absolute left-2 top-4 text-tiny tracking-widest peer-placeholder-shown:text-tiny peer-placeholder-shown:text-txt-primary-dark-bg peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:left-6 peer-focus:top-4 peer-focus:left-2 peer-focus:text-super-tiny peer-focus:text-txt-primary-dark-bg normal:peer-placeholder-shown:text-base normal:peer-placeholder-shown:top-5.5 normal:peer-focus:text-tiny normal:peer-focus:top-4 tempScreen:peer-placeholder-shown:top-6 tempScreen:peer-focus:top-4 sm:peer-placeholder-shown:top-6.5 sm:peer-focus:top-3 md:peer-placeholder-shown:left-8 md:peer-focus:left-2" for="email" >YOUR EMAIL पता (ADDRESS)</label>
                              </div>
                              <div className="relative mb-2 input-wrap">
                              <textarea value={FormData.note} onChange={handleFormInputs} name="note" id="note" className="peer w-full text-tiny text-txt-primary-dark-bg normal:text-base sm:text-lg placeholder-transparent  mt-8 placeholder-shown:mt-0 focus-within:mt-8" cols="30" rows="10" placeholder="LEAVE A NOTE FOR ME"></textarea>

                                <label className="text-txt-primary-dark-bg font-primaryHeading absolute left-2 top-4 text-tiny tracking-widest peer-placeholder-shown:text-tiny peer-placeholder-shown:text-txt-primary-dark-bg peer-placeholder-shown:top-6 transition-all peer-placeholder-shown:left-6 peer-focus:top-4 peer-focus:left-2 peer-focus:text-super-tiny peer-focus:text-txt-primary-dark-bg normal:peer-placeholder-shown:text-base normal:peer-placeholder-shown:top-5.5 normal:peer-focus:text-tiny normal:peer-focus:top-4 tempScreen:peer-placeholder-shown:top-6 tempScreen:peer-focus:top-4 sm:peer-placeholder-shown:top-6.5 sm:peer-focus:top-3 md:peer-placeholder-shown:left-8 md:peer-focus:left-2" for="note" >LEAVE A सन्देश (NOTE) FOR ME</label>
                              </div>
                            <div className="relative mt-8 group">
                              <div className="group-hover:opacity-100 transition duration-1000 absolute -inset-1 bg-gradient-to-r from-background-secondary-accent-color to-background-primary-accent-color opacity-60 rounded-lg animate-tiltBtn"></div>
                                  <button type="submit" aria-label="send a email" className="relative w-full flex items-center justify-center rounded-lg bg-background-primary-dark-color text-txt-primary-dark-bg py-6 box-border font-primaryHeading uppercase shadow-sm">
                                    {
                                      !Loading ? (
                                          <>
                                            Let's talk
                                              <IconContext.Provider
                                                    value={{ className: 'w-5 h-5 ml-1 400:w-6 400:h-6 group-hover:transform group-hover:translate-x-1 transition duration-300' }}
                                                  >
                                                  <FiArrowRight />
                                              </IconContext.Provider>
                                          </>
                                      ) : (
                                        <ButtonPreloader />
                                      )
                                    }
                              </button>
                              </div> 
                              <div class="g-recaptcha mt-10 mx-auto" data-sitekey={`${recaptchaKey.recaptchaKey}`}></div>

                          </div>
                          
                      </form>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-sxxl">🤗</span>
                        <h1 className="text-txt-primary-dark-bg/60 text-tiny text-center font-primaryHeading mt-6">Thank you for getting in touch with me!</h1>
                    </div>
                  )
                }

            </div>
        </div>
    )
}



