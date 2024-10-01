import React, { useEffect, useState } from 'react'
import { MOST_POPULAR_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const videos = await fetch(MOST_POPULAR_VIDEOS_API);
    const json = await videos.json();
    setVideos(json.items);
  }

  if(videos.length === 0) return null;

  return (
    <div className={`grid gap-4 mt-5 mx-5 mb-10 ${isMenuOpen ? "grid-cols-3" : "grid-cols-4"}`}>
      {
        videos.map(vid => (
          <Link key={vid.id} to={"/watch?v=" + vid.id}>
            <VideoCard info={vid}/> 
          </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer