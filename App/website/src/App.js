import {useState, useEffect} from "react"
import './App.css';
import Home from "./Home/Home"

function App() {


  const [nav,setNav] = useState(false);


  const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === undefined ? true: localStorage.theme === 'light');

    const  toogleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    } 

    useEffect(() => {


      const html = window.document.documentElement;
      const prevTheme = isDarkMode ? 'dark': 'light';
      html.classList.remove(prevTheme)

      
      const nextTheme = isDarkMode ? 'light': 'dark';
      html.classList.add(nextTheme)

      localStorage.setItem('theme', nextTheme);

    }, [isDarkMode])
    
    return [isDarkMode, toogleDarkMode];

  }

  const [isDarkMode, toogleDarkMode] = useDarkMode();


  function trigger() {
    setNav(!nav);
  }




  function toogleTheme() {
    toogleDarkMode();
  }
  
  /*
    *
    * I'm going to implement light mode from dark mode so I had to Implement light mode on dark mode class using tailwind
    *
    *
    * */


  return (
    <div className={`bg-background-primary-dark-color dark:bg-background-primary-light-color relative z-0 App ${nav && "nav-active"} h-screen min-h-screen `}>
        <Home trigger={trigger} toogleTheme={toogleTheme} isDarkMode={isDarkMode} nav={nav} />
    </div>
  );
}

export default App;
