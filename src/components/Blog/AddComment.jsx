import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { useAppContext } from '@/AppContent/AppContentProvider'
import { useParams } from 'react-router-dom'


const AddComment = () => {
  const {backend_url} = useAppContext()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmiting, setIsSubmiting] = useState(false);
  const {id} = useParams();

  const handleForm = async (e)=> {
    e.preventDefault();
    setIsSubmiting(true)
      
    try {
      const {data} = await axios.post(backend_url + '/api/v1/comment/add-comment', {blog:id, content:message, name});

      console.log(data)
      if(data.success){
        return toast.success(data.message);
        
      }else{
        return toast.error(data.message)
      }
      
    } catch (error) {
      console.log()
      toast.error(error.message)
    }finally{
      setName('');
      setMessage('');
      setIsSubmiting(false)
    }
    
  }


  return (
    <div className='w-full px-[15%]'>
      <form onSubmit={(e)=> handleForm(e)} className='flex flex-col w-full max-w-[500px] items-start mt-8'>
        <p className='font-semibold'>Add your comment</p>
        <input value={name} onChange={(e)=> setName(e.target.value)} required className='max-sm:min-w-full min-w-82 text-lg outline-0 border border-gray-300 px-2 py-1.5 rounded-sm my-2' type="text" placeholder='Name'/>
        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} required className='max-sm:min-w-full min-w-82 border border-gray-300 px-2 py-2 outline-0 text-lg text-gray-700' rows={6} id="" placeholder='Comment'></textarea>
        <button type='submit' className='my-2 py-1.5 text-white  rounded-sm cursor-pointer bg-primary px-6'>{isSubmiting ? 'submiting...' : 'submit'}</button>
      </form>
      <div className='flex flex-col w-full max-w-[70%] mt-8'>
        <p className='text-sm font-semibold'>Share this article on social media</p>
        <div className='flex'>
          <img className='size-10 sm:size-11 lg:size-12' src={assets.facebook_icon} alt="" />
          <img className='size-10 sm:size-11 lg:size-12' src={assets.twitter_icon} alt="" />
          <img className='size-10 sm:size-11 lg:size-12' src={assets.googleplus_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AddComment
