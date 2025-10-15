import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { assets } from '../../assets/assets'

const AddComment = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleForm = (e)=> {
    e.preventDefault();
    console.log(name, message);
    toast.success('Message sent successfully!!')
    setName('');
    setMessage('');
  }


  return (
    <>
      <form onSubmit={(e)=> handleForm(e)} className='flex flex-col max-w-[300px] mt-6'>
        <p className='font-semibold'>Add your comment</p>
        <input value={name} onChange={(e)=> setName(e.target.value)} required className='max-sm:min-w-full min-w-82 text-lg outline-0 border border-gray-300 px-2 py-1.5 rounded-sm my-2' type="text" placeholder='Name'/>
        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} required className='max-sm:min-w-full min-w-82 border border-gray-300 px-2 py-2 outline-0 text-lg text-gray-700' rows={6} id="" placeholder='Comment'></textarea>
        <button type='submit' className='my-2 py-1.5 text-white  rounded-sm cursor-pointer bg-primary px-6'>Submit</button>
      </form>
      <div className='flex flex-col w-full max-w-[70%] mt-8'>
        <p className='text-sm font-semibold'>Share this article on social media</p>
        <div className='flex'>
          <img className='size-10 sm:size-11 lg:size-12' src={assets.facebook_icon} alt="" />
          <img className='size-10 sm:size-11 lg:size-12' src={assets.twitter_icon} alt="" />
          <img className='size-10 sm:size-11 lg:size-12' src={assets.googleplus_icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default AddComment
