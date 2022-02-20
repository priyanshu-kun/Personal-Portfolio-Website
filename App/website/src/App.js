import {useState, useEffect} from 'react'
import './App.css';
import Preloader from './Components/Preloader/Preloader';
import Home from './Home/Home'

function App() {


  const [nav,setNav] = useState(false);
  const [loading, setLoading] = useState(true);



  function trigger() {
    setNav(!nav);
  }

  useEffect(() => {

    // setTimeout(() => {
      setLoading(false)
    // }, 2000);
  }, [])



  return (
    <div className={`relative z-0 App ${nav && 'nav-active'} h-screen min-h-screen `}>
      {
        loading ? <Preloader /> : <Home trigger={trigger}  nav={nav} setNav={setNav} />  
      }
    </div>
  );
}

export default App;
