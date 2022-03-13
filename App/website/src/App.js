import { useState, useEffect } from 'react'
import './App.css';
import aos from "aos"
import Home from './Home/Home'
import Helmet from "react-helmet"

function App() {

  const [nav, setNav] = useState(false);

  function trigger() {
    setNav(!nav);
  }

  useEffect(() => {
    aos.init()
  }, [])
  
  return (
      <div className={`relative z-0 App ${nav && 'nav-active'} h-screen min-h-screen`}>
        <Helmet>
          <title>Priyanshu Sharma | A Web Developer</title>
          <meta name="author" content='Priyanshu Sharma' />
          <meta name='description' content="A web developer's Personal Portfolio website created by priyanshu sharma." />
          <meta name='keywords' content='ui/ux, designer, website, portfolio, software engineer, web developer' />
          <meta name="theme-color" content="#3500d3" />
        </Helmet>
          <Home trigger={trigger} nav={nav} setNav={setNav} />
      </div>
    )
}

export default App;
