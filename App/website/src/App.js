import {useState, useEffect} from 'react'
import './App.css';
import Home from './Home/Home'

function App() {


  const [nav,setNav] = useState(false);



  function trigger() {
    setNav(!nav);
  }





  return (
    <div className={`relative z-0 App ${nav && 'nav-active'} h-screen min-h-screen `}>
        <Home trigger={trigger}  nav={nav} />
    </div>
  );
}

export default App;
