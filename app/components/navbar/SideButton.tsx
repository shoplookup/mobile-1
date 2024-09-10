'use client';
import { GiCrossedAxes, GiSwordArray } from 'react-icons/gi';
import useSideModal from '@/app/hooks/useSideModal'
import React, { useCallback } from 'react'
import { TiThMenu } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';

const SideButton = () => {
   
  const sideModal = useSideModal(); 

  return (
    <div 
    className='cursor-pointer h-auto  top-0 right-0 fixed z-50'
    onClick={useCallback(() => {
      if(sideModal.isOpen){
        sideModal.onClose();
      }else{
        sideModal.onOpen();
      }
    }, [sideModal])}>
      <div  className={`p-2 md:p-4 h-auto transition-transform duration-1000 ease-in-out ${sideModal.isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
        <TiThMenu  color='black' size={40}/>
      </div>
      <div  className={`p-2 md:p-4 h-auto absolute top-0 transition-transform duration-1000 ease-in-out ${sideModal.isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <MdClose  color='black' size={40}/>
      </div> 
    </div>
  )
}

export default SideButton




