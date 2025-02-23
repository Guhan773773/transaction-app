import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.jpg'
import {HiMenu    ,HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from "react-icons/ai";
const Navitems = ({title,classprops})=>{
  return(
    <li className={'mx-4 cursor-pointer ${classprops}'}>
      {title}
    </li>
  )
}

const Navbar = () => {
  const[toggleMenu,setToggleMenu] =useState(false)
  return (
    
      <nav className="w-full flex md: justify-center justify-between item ">
        <div className='md:flex[0.5] flex-initial justify-center items-center'>
          <img src='logo' alt='logo'/>
        </div>
        <ul className='text-white md:flex  hidden list-none flex-row justify-between items-center flex-initil'>
           {["Market","Tutorial","Wallet","Exchage"].map((item,index)=>
          (<Navitems title={item}/>))}
        
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2545bd]'> Login
          </li>
        </ul>
        <div className="flex relative">
          {toggleMenu ?
          <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer'onClick={()=>setToggleMenu(false)}/>:
          <HiMenuAlt4 fontSize={28}  className='text-white md:hidden cursor-pointer'onClick={()=>setToggleMenu(true)}/>}
          {toggleMenu && (
             <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in' >
              <div className='text-x1 w-full my-2 '>
                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
              </div>
              <ul>
              {["Market","Tutorial","Wallet","Exchage"].map((item,index)=>
          (<Navitems key={item+index} title={item}/>))}
          </ul>
             </ul>
          )}
          
          

        </div>

      </nav>
  )
}

export default Navbar;
