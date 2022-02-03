import React,{useState} from 'react'
import SearchBar from './Search/Search.jsx'
import FilterBtn from './Filter/Filter.jsx'
import Search from "../../Assets/icons/search.svg"
import img1 from "../../Assets/images/img1.jpg"
import img2 from "../../Assets/images/img2.jpg"
import img3 from "../../Assets/images/img3.jpg"
import img4 from "../../Assets/images/img4.jpg"
import img5 from "../../Assets/images/img5.jpg"
import img6 from "../../Assets/images/img6.jpg"
import "./Work.css"


export default function Work() {


    const [searchComp, setSearchComp] = useState(false)
    const [opacity, setOpacity] = useState(false)


    const handleSearchComponent = () => {
        setSearchComp(!searchComp)
    } 


    return (
      <div className='w-full flow-root h-screen lg:mt-30'>
        <div className="relative text-txt-primary-dark-bg flex flex-col w-full justify-between items-center 400:mt-32  mx-auto z-0 sm:flex-row sm:items-center sm:justify-between sm:w-10/12 lg:w-8/12">
          <h1 className={` custom-animation ${searchComp && "active"} font-primaryHeading relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:transform before:-translate-x-2/4 before:w-11/12 max-w-16rem before:h-1 before:bg-background-secondary-accent-color before:rounded-full text-base leading-5 text-center mb-8  normal:text-lg normal:before:w-full sm:text-2xl sm:before:h-2 sm:before:-bottom-4 sm:before:left-60 sm:mb-0 sm:max-w-128`}>Project, that I've worked on -</h1>
                <div className="actions flex">
                    <img onClick={handleSearchComponent} className={`${searchComp && "active"} w-6 custom-animation hover:opacity-60  cursor-pointer`} src={Search}  alt="search btn" />
                  <FilterBtn searchComp={searchComp} />
                </div>
                <SearchBar searchComp={searchComp} handleSearchComponent={handleSearchComponent} />
            </div>
      </div>
    )
}
