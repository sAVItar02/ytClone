import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (  
    <div className='mt-4'>
        {
            comments.map((comment, i) => {
                return <div key={i}>
                    <Comment comment={comment}/>
                    <div className='px-5 pl-8 ml-2 border-l border-black'>
                        <CommentsList comments={comment.replies}/>
                    </div>
                </div>
        })
        }
    </div>
  )
}

export default CommentsList