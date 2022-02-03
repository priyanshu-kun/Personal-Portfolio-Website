import React,{useState} from "react"
import Filter from "../../../Assets/icons/filter.svg"
import {FiChevronRight} from "react-icons/fi"

export default function FilterBtn({searchComp}) {


    const [filter,setFilter] = useState(false);

    const handleSetFilter = () => {
        setFilter(!filter);
    }

    return (
        <div className="relative">
          <button onClick={handleSetFilter} aria-label="filter btn" className={`${searchComp && "active"} custom-animation ml-6 px-4 py-1 text-tiny rounded-md cursor-pointer h-8 font-primaryHeading tracking-wider flex items-center justify-center hover:opacity-60 transition duration-300 border border-solid border-txt-primary-dark-bg/10`}> <img className="mr-1" src={Filter} />Filter</button>
            <div className={`w-44 max-h-10rem overflow-y-auto absolute top-12 shadow-lg right-0 bg-txt-primary-dark-bg rounded-xl py-2 transform scale-0 opacity-0 origin-top-right pointer-events-none transition duration-300 ${filter && "scale-100 opacity-100 pointer-events-auto ease-bounce"}`}>
                <button className="text-txt-primary-light-bg/80 block font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny"><FiChevronRight /> HTML/CSS</button>
                <button className="text-txt-primary-light-bg/80 block font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny"><FiChevronRight /> Javascript</button>
                <button className="text-txt-primary-light-bg/80 block font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny"><FiChevronRight /> ReactJS</button>
                <button className="text-txt-primary-light-bg/80 block  font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny"><FiChevronRight /> NodeJS</button>
                <button className="text-txt-primary-light-bg/80 block  font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny"><FiChevronRight /> Games</button>
                <button className="text-txt-primary-light-bg/80 block  font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny"><FiChevronRight /> C++</button>
            </div>
        </div>
    )
}
