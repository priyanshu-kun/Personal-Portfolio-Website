import React from "react"
import Filter from "../../../Assets/icons/filter.svg"
import {FiFiChevronRight} from "react-icons/fi"

export default function FilterBtn({searchComp}) {
    return (
        <div className="relative">
          <button aria-label="filter btn" className={`${searchComp && "active"} custom-animation ml-6 px-4 py-1 text-tiny rounded-md cursor-pointer h-8 font-primaryHeading tracking-wider flex items-center justify-center hover:opacity-60 transition duration-300 border border-solid border-txt-primary-dark-bg/10`}> <img className="mr-1" src={Filter} />Filter</button>
            <div className="w-52 absolute bottom-0 h-52 bg-txt-primary-dark-bg rounded-xl">
                <button><FiFiChevronRight /> HTML/CSS</button>
                <button><FiFiChevronRight /> Javascript</button>
                <button><FiFiChevronRight /> ReactJS</button>
                <button><FiFiChevronRight /> NodeJS</button>
                <button><FiFiChevronRight /> Games</button>
                <button><FiFiChevronRight /> C++</button>
            </div>
        </div>
    )
}
