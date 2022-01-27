import React from "react"
import Header from "../Components/Header/Header.jsx"
import "./Home.css"


 export default function Home({trigger, nav, isDarkMode, toogleTheme}) {



    return (
      <>
          <Header trigger={trigger} nav={nav} toogleTheme={toogleTheme} isDarkMode={isDarkMode} /> 
      </>
    )
}
