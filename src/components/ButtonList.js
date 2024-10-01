import React from 'react'
import FilterButton from './FilterButton'

const ButtonList = () => {
  const list = ["All", "Gaming", "Valorant", "Medical Dramas", "Songs", "Movie Recaps", "Live", "Reaction Videos", "Podcasts", "People", "Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Si", "Vous", "Plait"]
  return (
    <div className='flex items-center justify-start gap-1.5 mt-4 xl:w-[1200px] lg:w-[1000px] md:w-[700px] overflow-x-scroll no-scrollbar mx-5'>
      {
        list.map(item => {
          if(item === "All") return <FilterButton key={item} name={item} isActive={true} /> 
          return <FilterButton key={item} name={item} isActive={false} /> 
        })
      }
    </div>
  )
}

export default ButtonList