import React from "react"
import Header from "../Components/Header/Header.jsx"
import "./Home.css"


 export default function Home({trigger, nav}) {



    return (
      <>
          <Header trigger={trigger} nav={nav}  /> 
      </>
    )
}
