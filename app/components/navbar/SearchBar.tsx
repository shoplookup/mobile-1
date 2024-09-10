'use client';

import React, { useCallback, useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FcMindMap, FcSearch } from 'react-icons/fc'

const SearchBar = () => {

  const [isDown, setIsDown ] = useState(false);

  return (
    <div 
    
    className='flex items-center justify-center py-16 px-4 w-full md:w-3/4 lg:w-1/2 relative drop-shadow-lg'>
      <div className='bg-purple-200 h-14 lg:h-20 md:h-16 flex items-center justify-center w-full rounded-full overflow-hidden  shadow-xl '>
        <div id='category' className='flex items-center justify-center absolute right-80 max-md:hidden p-4 bg-orange-100 shadow-lg rounded-full' >
        <FcMindMap size={30} className='drop-shadow-lg' />
        </div>
        <div 
        onClick={useCallback((() => {
          if(isDown){
            setIsDown(false);
          }else{
            setIsDown(true);
          }
        }),[isDown])}
        className='text-neutral-400 flex flex-col gap-1 items-center  justiy-center hover:cursor-pointer 
           text-xl font-light absolute right-24 max-md:hidden shadow-xl py-2 px-4 rounded-full bg-orange-100'>
          <span className='flex flex-row items-center justify-center'>select category {isDown && (<FaCaretUp />)} {!isDown && (<FaCaretDown />)}</span>
          
        </div>
        <div className='text-neutral-400 text-xl font-light absolute lg:left-32 max-sm:right-8  shadow-xl py-2 px-4 rounded-full bg-orange-100'>
          search any model
        </div>
      </div>
      <div id='glass' className='flex items-center justify-center absolute left-6 md:left-8 p-2 md:p-3 lg:p-4 bg-orange-100 shadow-lg rounded-full'>
      <FcSearch size={30} className='drop-shadow-lg' />
      </div>
    </div>
  )
}

export default SearchBar
