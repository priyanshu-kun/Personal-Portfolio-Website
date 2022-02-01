import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Technologies from '../Components/Technologies/Technologies.jsx'
import Work from '../Components/Work/Work.jsx'
import './Home.css'


 export default function Home({trigger, nav}) {
    return (
      <>
          <Header trigger={trigger} nav={nav}  /> 
          <Technologies />
          <Work />
      </>
    )
}
