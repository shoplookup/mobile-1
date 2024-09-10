import Logo from "./Logo"
import SideButton from "./SideButton"



const Navbar = () => {



  return (
    <>
    <div className='bg-transparent w-full  flex items-center justify-between relative  overflow-x-hidden overflow-y-hidden'>
      <div className="flex flex-row gap-2 md:gap-4 lg:gap-0 items-center justify-center p-4 z-10 max-sm:hidden md:text-lg hover:cursor-pointer lg:text-xl font-semibold w-auto h-auto text-black drop-shadow-md">
        <span className="hover:cursor-pointer hover:scale-125 transition">L</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">o</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">g</span>
        <span className="hover:cursor-pointer hover:scale-125 transition ml-2">i</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">n</span>
        <span className="hover:cursor-pointer hover:scale-125 transition ml-8">C</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">r</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">e</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">a</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">t</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">e</span>
        <span className="hover:cursor-pointer hover:scale-125 transition ml-2">f</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">r</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">e</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">e</span>
        <span className="hover:cursor-pointer hover:scale-125 transition ml-2">A</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">c</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">c</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">o</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">u</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">n</span>
        <span className="hover:cursor-pointer hover:scale-125 transition">t</span>
        
      </div>
      <SideButton />
      
    </div>
  
    </>
  )
}

export default Navbar
