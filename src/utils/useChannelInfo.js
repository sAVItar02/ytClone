import { useEffect, useState } from 'react'
import { GET_CHANNEL_BY_ID } from './constants';

const useChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState([]); 

  
  useEffect(() => {
    if(!channelId) return
    getChannelInfo();
  }, [channelId]);
  
  const getChannelInfo = async () => {
      const data = await fetch(GET_CHANNEL_BY_ID + channelId)
      const json = await data.json();
      setChannelInfo(json?.items[0]);
  } 
  
  return channelInfo;
}

export default useChannelInfo;