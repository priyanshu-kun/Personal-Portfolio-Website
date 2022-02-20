import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Technologies from '../Components/Technologies/Technologies.jsx'
import Work from '../Components/Work/Work.jsx'
import Form from '../Components/Form/Form.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import './Home.css'
import ScrollToBtn from '../Components/ScrollTopBtn/ScrollToBtn.jsx'


 export default function Home({trigger, nav, setNav}) {
    return (
      <>
          <Header trigger={trigger} nav={nav} setNav={setNav}  /> 
          <Technologies />
          <Work />
          <Form />
          <Footer /> 
          <ScrollToBtn />
      </>
    )
}
