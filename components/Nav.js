import React from 'react'
import Haead from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
const Nav = () => {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return (
      <>
           <head>
            <link rel="stylesheet" href="https://use.typekit.net/lvy3mfo.css"/>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Kaya Jones </title>
            </head>
          
            <nav className="flex items-center flex-wrap p-3 font-['Roboto',sans-serif]  ">
              
              <div className = "flex items-center justify-center ">
                <Link href = '/'>
                  <a className = "p-2 mr-4 text-[24px] font-bold" >
                    <img src = "/kayalogo.png" class = "	w-[99px] h-[177px]"/>
                    </a>
                </Link>
              </div>


              <button
          className='  p-3  content-center lg:hidden text-[#8682D9] ml-auto hover:text-[#8682D9] outline-none '
          onClick={handleClick}
        >
         
         <svg
              class="w-6 h-6 text-white-500 "
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3   items-center justify-center text-center  text-2xl hover:text-[#8682D9] '>
                /about
              </a>
            </Link>
            <Link href='https://calendly.com/kayacancode/30min'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2   items-center justify-center text-center text-2xl hover:text-[#8682D9]'>
                /calendy
              </a>
            </Link>
            
            <Link href='/portfolio'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-[#8682D9]font-bold items-center justify-center text-center text-2xl hover:text-[#8682D9]'>
                /projects
              </a>
            </Link>
            <Link href='/scoutleader'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  items-center justify-center text-center text-2xl hover:text-[#8682D9]'>
              scoutleader.com             
               </a>
            </Link>
            <Link href='/IWTblog'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2   items-center justify-center text-center text-2xl hover:text-[#8682D9]'>
              insuvewetrust.com            
               </a>
            </Link>
            <Link href='/lettuce'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-[#8682D9]items-center justify-center text-center text-2xl hover:text-[#8682D9]'>
              lettuce            
               </a>
            </Link>
            <Link href='/contactme'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2  text-[#8682D9]font-bold items-center justify-center text-center text-2xl hover:text-[#8682D9]'>
              /contact            
               </a>
            </Link>
          </div>

         
        </div>            
        </nav>      
      </>
    )
  }

export default Nav