'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Logo from "../navbar/Logo";


interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,

}) => {

  const handleClose = useCallback(() => {
    
    setShowModal(false);
    setTimeout(() => {
      onClose();
    },300);
  },[ onClose]);

  const [showModal, setShowModal] = useState(isOpen);
  

  useEffect(() => {
    setShowModal(isOpen)
  },[isOpen]);

  

  

 

  

  return (
    <>
   
      <div
        className={`
          justify-end
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-40
          outline-none
          focus:outline-none
          translate duration-500
          ${showModal ? `translate-x-0` : `translate-x-full`}
          bg-neutral-800/70
        `}
      >
       
          {/*Content*/}
          <div className={` z-10 rounded-l-2xl w-[90vw] md:w-1/2 lg:w-1/4 h-full flex flex-col items-start justify-center translate duration-1000 ease-in-out bg-amber-50/100 shadow-2xl ${showModal ? `translate-x-0` : `translate-x-full`} `}>
          <Logo />
          <div className="w-full -mt-12 flex flex-row items-center justify-center gap-4">
            <div className="bg-neutral-200 hover:cursor-pointer ml-4 text-xl font-bold p-2 rounded-full px-10">
              SignIn
            </div>
            <div className="bg-neutral-200 ml-4 text-xl hover:cursor-pointer font-bold p-2 rounded-full px-10">
              Login
            </div>
          </div>
          <div className='p-4'>
            <span className='text-neutral-300 text-lg'>Menu</span>
          </div>
          <div className='w-auto h-auto flex flex-col p-4 text-4xl md:text-5xl'>
            <div className='flex flex-row gap-0 '>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition '>W</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>h</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>a</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>t</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition ml-3'>w</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>e</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition ml-3'>d</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>o</span>
            </div>
            
            <div className='flex flex-row gap-0'>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>P</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>r</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>o</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>j</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition '>e</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>c</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>t</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>s</span>
            </div>
            <div className='flex flex-row gap-0'>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>S</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>e</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>r</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>v</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition '>i</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>c</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>e</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>s</span>
            </div>
            <div className='flex flex-row gap-0'>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>M</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>a</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>r</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>k</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition '>e</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>t</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition ml-3'>P</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>l</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>a</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>c</span>
            <span className=' my-2 font-medium hover:cursor-pointer hover:scale-125 transition'>e</span>
            </div>
          </div>
          <div className='p-4 mt-4 flex flex-col gap-2'>
            <span className='text-neutral-300 text-lg'>Get in touch</span>
            <div className='flex flex-row gap-10 md:gap-16 items-center justify-center'>
                <span className='text-black text-md md:text-xl font-light underline decoration-2  hover:cursor-pointer'>email@gmail.com</span>
                <span className='text-black text-md md:text-xl font-light underline hover:cursor-pointer'>our workflow</span>
            </div>
          </div>
      </div>
       
      </div>

    </>
  );
}

export default Modal
