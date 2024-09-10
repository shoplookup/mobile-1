import Image from 'next/image'
import React from 'react'

import logo from '../../../public/logo_final.png'



const Logo = () => {
  return (
    
      
      <div className='flex   -z-10 -mt-20 drop-shadow-lg items-center justify-center w-full h-auto p-4 '>
        <Image src={logo} alt='logo'className='drop-shadow-lg ' width={350}/>
        
      </div>
    
  )
}

export default Logo
