import React, { useState } from 'react'

const Subscription = () => {

  const [email, setEmail] = useState('')
  return (
    <div className='flex items-center flex-col gap-4 mt-16'>
      <h1 className='font-semibold text-xl sm:text-2xl text-slate-700 text-center'>Never Miss a Blog! from Sidebehs drilling and plumbing company</h1>
      <p className='text-gray-600'>Subscribe to get the latest blog, new tech, and exclusice news.</p>
      <div className='border border-gray-300 sm:min-w-lg flex justify-between rounded-sm overflow-hidden mt-4'>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Enter your email id'  className='px-2 text-sm flex-1 outline-0 '/>
        <button className='bg-primary/80 cursor-pointer py-2 px-4 text-sm text-white'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Subscription
