import React from 'react'
import Header from '../components/Home/Header'
import BlogList from '../components/Home/BlogList'
import Subscription from '../components/Home/Subscription'
import { TextParallaxContentExample } from '@/components/Home/BlogFeature'
import ShuffleHero from '../components/Home/Header2'

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <ShuffleHero />
      <BlogList />
      <TextParallaxContentExample />
      <Subscription />
    </div>
  )
}

export default Home
