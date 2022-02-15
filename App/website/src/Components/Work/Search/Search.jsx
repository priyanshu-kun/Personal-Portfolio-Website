import React from "react"
import X from "../../../Assets/icons/x.svg"
import "./Search.css"


 export default function Search({ searchComp, handleSearchComponent }) {


    const handleSearchBarClose = () => {
        handleSearchComponent()
    }


    return (
        <div className={`w-4/5 mt-4 absolute z-10 flex flex-col h-96 justify-end sm:max-w-168 sm:left-1/2 sm:top-0 sm:transform sm:-translate-x-2/4 ${!searchComp && "pointer-events-none"}`}>
            <div className={`h-14 sm:h-14 relative search-bar ${searchComp && "active"}`}>
                <input className="text-tiny work-search-bar inline-block absolute h-full w-full px-6 shadow-lg rounded-xl text-black outline-none sm:text-base" type="text" placeholder="Search for something!" />
                <button onClick={handleSearchBarClose} className="absolute right-6 top-2/4 transform -translate-y-1/2 z-10"><img src={X} /></button>
            </div>
            <div className={`search-list-bar w-full h-80 bg-txt-primary-dark-bg mt-2 overflow-y-scroll overflow-x-hidden rounded-xl  shadow-lg ${searchComp && "search-list-active sm:overflow-y-hidden"} `}>
                <h1 className="text-txt-primary-light-bg font-primaryHeading mt-3 ml-6 mb-2 font-heading text-xl py-2">Projects - </h1>
                <hr className="w-11/12 mx-auto mb-2 border-b border-txt-primary-light-bg/10 border-solid" />
                <div className="text-txt-primary-light-bg ">
                    <div className=" w-11/12 mx-auto py-3 px-3 mb-2 cursor-pointer project-search-items relative" >
                        <h1 className="font-secondaryHeading text-base mb-2">* Project 1</h1>
                        <p className={`search-item ${searchComp && "search-item-active"} text-tiny ml-3 opacity-30`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquam repellat error id reiciendis recusandae ipsa?</p>
                    </div>
                    <div className=" w-11/12 mx-auto py-3 px-3  mb-2 cursor-pointer project-search-items relative">
                        <h1 className="font-secondaryHeading text-base mb-2">* Project 1</h1>
                        <p className={`search-item ${searchComp && "search-item-active"} text-tiny ml-3 opacity-30`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquam repellat error id reiciendis recusandae ipsa?</p>
                    </div>
                    <div className=" w-11/12 mx-auto py-3 px-3  mb-2 cursor-pointer project-search-items relative">
                        <h1 className="font-secondaryHeading text-base mb-2">* Project 1</h1>
                        <p className={`search-item ${searchComp && "search-item-active"} text-tiny ml-3 opacity-30`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquam repellat error id reiciendis recusandae ipsa?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
