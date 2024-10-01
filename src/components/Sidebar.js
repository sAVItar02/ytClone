import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className="sticky top-0 bg-white w-60 flex flex-col items-center justify-start gap-3 p-4 col-span-3">
        <ul className='w-full border-b border-gray-200 pb-5'>
            <li className='w-full'>
                <Link to="/" className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
                    Home
                </Link>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path fill='black' d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
                    Shorts
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
                    Subscriptions
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M10 9.35 15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"></path></svg>
                    YouTube Music
                </button>
            </li>
        </ul>

        <ul className='w-full border-b border-gray-200 pb-5'>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-0 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group font-medium text-lg'>
                    You 
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                    Your Channel
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}} viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                    History
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path></svg>
                    Playlists
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
                    Liked Videos
                </button>
            </li>
        </ul>

        <ul className='w-full border-b border-gray-200 pb-5'>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-0 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-base group font-medium'>
                    Subscriptions
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                    Your Channel
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}} viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                    History
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path></svg>
                    Playlists
                </button>
            </li>
            <li className='w-full'>
                <button className='flex items-center justify-start gap-8 w-full px-2 py-2 hover:bg-[#f2f2f2] rounded-lg text-sm group'>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: 24 + "px", height: 24 + "px"}}><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></svg>
                    Liked Videos
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar