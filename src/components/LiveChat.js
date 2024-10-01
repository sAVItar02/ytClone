import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomImage, generateRandomName, generateRandomText } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.messages);

    const [livechatMessage, setLivechatMessage] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            // FETCH HERE
            dispatchMessage();
        }, 1500)

        return () => clearInterval(i);
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLivechatMessage("");
        dispatchMessage(livechatMessage);
    }

    const dispatchMessage = (message) => {
        dispatch(addMessage({
            name: generateRandomName(),
            text: message ? message : generateRandomText(),
            image: generateRandomImage()
        }));
    }

  return (
    <div className='h-full'>
        <h1 className='bg-white border-b border-[#e5e5e5] p-2 py-4 font-semibold rounded-t-lg'>Live Chat 🔴</h1>
        <div className='flex flex-col-reverse items-start overflow-y-scroll h-[400px]'>
            {
                messages.map((m, i) => {
                    return <ChatMessage key={i} data={m}/>
                })
            }
        </div>
        <form className='flex items-center justify-between gap-1' onSubmit={(e) => handleFormSubmit(e)}>
            <input value={livechatMessage} onChange={(e) => setLivechatMessage(e.target.value)} type="text"  className='p-2 w-full rounded-lg border border-[#e5e5e5]'/>
            <button className='p-2 rounded-lg bg-green-200'>Send</button>
        </form>
    </div>
  )
}

export default LiveChat