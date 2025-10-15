import React from 'react'
import { assets } from '../../assets/assets'
import InputSearch from './InputSearch'

const Header = () => {
  return (
    <div className='text-center flex relative flex-col gap-4 mt-10 lg:mt-20'>
      <div>
        <p className='text-xs px-4 py-1 max-sm:py-0 bg-blue-300/40 inline-flex rounded-full items-center'>New Ai feature intigrated <span ><img className='px-2 size-7' src={assets.star_icon} alt="" /></span></p>
      </div>
      <h1 className='font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-5xl'>Your <span className='text-primary'>AJAFAN</span> <br /> Blogging Platform</h1>
      <p className='text-sm text-gray-600 max-w-sm xl:max-w-2xl mx-auto'>this is your space to see the best and outstanding blogs from the accross all penyem.</p>
      <img className='absolute -z-1 -top-10 right-0 left-0' src={assets.gradientBackground} alt="" />
      <InputSearch />
    </div>
  )
}

export default Header
