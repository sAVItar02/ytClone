import React from 'react'

const FilterButton = ({name, isActive}) => {
  return (
    <button className={`px-4 py-1.5 rounded-lg duration-100 ease-linear text-sm font-normal ${isActive ? "bg-black text-white" : "bg-[#f2f2f2] hover:bg-[#e5e5e5] whitespace-nowrap"}`}>{name}</button>
  )
}

export default FilterButton