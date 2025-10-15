import React from 'react'
import { assets, comments_data } from '../../assets/assets'

const Comment = () => {
  return (
    <div className='w-full max-sm:max-w-[300px] max-w-[70%]'>
      <h1 className='font-semibold mb-4'>Comments(5)</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 justify-start px-4 sm:px-6'>
        {
          comments_data.map((comment, index)=> (
            <div className='flex justify-between  items-start max-w-sm bg-blue-50/40 py-2'>
              <div className='flex gap-2 items-start'>
                <img className='w-8' src={assets.user_icon} alt="" />
                <div>
                  <p className='text-xs font-semibold'>Seedia Nyassi</p>
                  <p className='text-gray-700 text-xs'>this is my new comment</p>
                </div>
              </div>
              <div className='text-xs'>
                <p className='text-nowrap'>21 days ago</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comment
