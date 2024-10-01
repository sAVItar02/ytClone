import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div className={isMenuOpen ? "col-span-9" : "col-span-12"}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer