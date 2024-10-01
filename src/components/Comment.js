import React from 'react'

const Comment = ({comment}) => {
    const {text, name} = comment;

  return (
    <div className='flex items-start justify-start gap-2'>
        <div className='p-1 border-2 border-black rounded-full'>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
        </div>
        <div className='flex flex-col items-start justify-start'>
            <p className='font-semibold text-sm'>{name}</p>
            <p className='text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default Comment