import React from 'react'
import { generateRandomImage } from '../utils/helper';

const ChatMessage = ({ data }) => {
    const {name, text, image} = data;

  return (
    <div className='flex items-center gap-2 p-2'>
        <img src={image} alt="user" className='h-8 w-8 rounded-full object-cover' />
        <div className='text-sm flex items-start gap-2'>
            <p> <span className='font-semibold'>{name}</span> <span className='text-slate-600'>{text}</span></p>
        </div>
    </div>
  )
}

export default ChatMessage