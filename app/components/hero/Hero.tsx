'use client';

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SearchBar from '../navbar/SearchBar'



const Hero = () => {

  

  

  return (
    <div className='flex items-center justify-center w-full px-8 mt-20 '>
    <div className='w-full h-full z-0 flex-col  flex items-center justify-center'>
      <div className='text-4xl md:text-6xl font-extrabold text-neutral-400 hover:cursor-default drop-shadow-lg'>
        Design the best <br className='max-sm:hidden'/>
        <span className='text-5xl md:text-7xl text-black'>3D MODELS</span> for your game
      </div>
      
      
      
    </div>
    </div>
  )
}

export default Hero
