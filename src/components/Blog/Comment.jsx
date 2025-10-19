import React, { useEffect, useState } from 'react'
import { assets, comments_data } from '../../assets/assets'
import { useAppContext } from '@/AppContent/AppContentProvider';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import moment from 'moment';

const Comment = () => {
  const {id} = useParams();
  const {axios, backend_url} = useAppContext();
  const [comment, setComment] = useState([]);

  const fetchComments = async() => {
    try {
      
      if(!id || !backend_url){
        return toast.error('Id not found')
      }
      const {data} = await axios.post('http://localhost:4000/api/v1/blog/blog-comment', {blogId: id});
      if(data.success){
        setComment(data.data);
      }else {
        toast.error(data.message)
      }
  
    } catch (error) {
      toast.error(error.message)
    }
  }

  console.log(comment)

  useEffect(()=> {
    fetchComments();
  },[id])
  return (
    <div className='w-full max-sm:max-w-[300px] max-w-[70%]'>
      <h1 className='font-semibold mb-4'>Comments({comment.length > 0 ? comment.length : 0})</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 justify-start'>
        {
          comment.length > 0 ? comment.map((comment, index)=> (
            <div key={index} className='flex justify-between  items-start max-w-sm bg-blue-900 rounded-sm px-2 py-2 text-white'>
              <div className='flex gap-2 items-start'>
                <img className='w-8' src={assets.user_icon} alt="" />
                <div>
                  <p className='text-xs font-semibold'>{comment.name}</p>
                  <p className='text-gray-200 text-xs'>{comment.content}</p>
                </div>
              </div>
              <div className='text-xs'>
                <p className='text-nowrap'>{moment(comment.createdAt).fromNow()}</p>
              </div>
            </div>
          )) : <div>No approved comments</div>
        }
      </div>
    </div>
  )
}

export default Comment
