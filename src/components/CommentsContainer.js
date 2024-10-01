import React from 'react'
import CommentsList from './CommentsList'
import comments from "../mocks/commentsMock.json";

const CommentsContainer = () => {
  return (
    <div className='bg-[#f2f2f2] p-4 rounded-lg mt-5 w-full'>
        <h2 className='text-lg font-semibold'>Comments</h2>
        <CommentsList comments={comments}/>
    </div>
  )
}

export default CommentsContainer