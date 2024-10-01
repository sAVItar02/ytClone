import { convertNumbers } from '../utils/convertNumbers';
import useChannelInfo from '../utils/useChannelInfo';
import { calculateTime } from '../utils/convertTime';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {title, channelTitle, publishedAt, thumbnails, channelId} = snippet;

    const channelInfo = useChannelInfo(channelId);

  return (
    <div className='flex flex-col items-start justify-start cursor-pointer'>
        <img className='w-full h-auto rounded-lg' src={thumbnails?.medium?.url} alt={title} />
        <div className='flex items-start justify-start gap-2 mt-2'>
            <div>
                <img src={channelInfo.length !== 0 ? channelInfo?.snippet?.thumbnails?.default?.url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"} alt="channel logo" className='h-8 w-8 rounded-full object-cover' />
            </div>
            <div>
                <p className='font-semibold'>{title}</p>
                <button className='text-[#858585] text-sm'>{channelTitle}</button>
                <p className='text-[#858585] text-sm'>{convertNumbers(statistics.viewCount)} · {calculateTime(publishedAt)}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard