import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GET_VIDEO_BY_ID } from '../utils/constants';
import useChannelInfo from '../utils/useChannelInfo';
import { convertNumbers } from '../utils/convertNumbers';
import { calculateTime } from '../utils/convertTime';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [channelId, setChannelId] = useState("");

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const channelInfo = useChannelInfo(channelId);

  const [searchQuery] = useSearchParams();

  useEffect(() => {
      dispatch(closeMenu());
      getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(GET_VIDEO_BY_ID + searchQuery.get("v"));
    const json = await data.json();
    setVideoDetails(json.items);
    setChannelId(json?.items[0]?.snippet?.channelId);
  }

  if(!videoDetails) return null; 

  return (
    <div className={`w-full p-8 grid grid-cols-3 ${isMenuOpen ? 'col-span-9' : 'col-span-12'}`}>
      <div className='flex flex-col items-start justify-start gap-2 col-span-2'>
        <iframe className='w-full h-[500px] rounded-lg' src={"https://www.youtube.com/embed/" + searchQuery.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h2 className='font-semibold text-xl'>{videoDetails[0]?.snippet?.title}</h2>
        <div className='flex items-center justify-between gap-2'>
          {
            channelInfo && <>
              <div className='flex items-center justify-start gap-2'>
                <img className='h-12 w-12 rounded-full object-cover' src={channelInfo?.snippet?.thumbnails?.default?.url} alt="channel" />
                <div>
                  <p className='font-semibold'>{channelInfo?.snippet?.title}</p>
                  <p className='text-sm text-gray-600'>{convertNumbers(channelInfo?.statistics?.subscriberCount || 0)}</p>
                </div>
              </div>
            </>
          }
        </div>
        <div className='mt-2 flex flex-col items-start justify-start gap-2 p-4 rounded-lg bg-[#f2f2f2] cursor-pointer'>
            <p className='text-sm font-semibold'>{videoDetails[0]?.statistics?.viewCount} views {calculateTime(videoDetails[0]?.snippet?.publishedAt || 0)}</p>
          <p  className='text-ellipsis line-clamp-2 w-full text-sm text-gray-500 font-medium'>{videoDetails[0]?.snippet?.description}</p>
        </div>
      </div>

      <div className='row-start-2 col-span-2'>
          <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchPage