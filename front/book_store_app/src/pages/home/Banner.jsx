import React from 'react'
import bannerImg from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12 bg-cover bg-center">
    <div className='md:w-1/2 w-full flex items-center md:justify-end'>
      <img src=
      {bannerImg} 
      alt="" />
    </div>
     <div className='md:w-1/2 w-full'>
      <h1 className='md:text-5xl text-2xl font-medium mb-7 text-white'>New Releases This Week</h1>
      <p className='mb-10 text-white'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

      <button className='btn-primary hover:bg-red-950 bg-gradient-to-r from-red-500 to-red-800 '>Subscribe</button>
    </div>
</div>

  )
}

export default Banner
