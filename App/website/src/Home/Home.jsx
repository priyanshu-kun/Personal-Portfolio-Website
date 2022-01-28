import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Technologies from '../Components/Technologies/Technologies.jsx'
import './Home.css'


 export default function Home({trigger, nav}) {



    return (
      <>
          <Header trigger={trigger} nav={nav}  /> 
          <Technologies /> 
      </>
    )
}
