"use client"

import { useState } from 'react';
import Link from 'next/link';
import { RiMenu3Line } from 'react-icons/ri'
import { dataHeader } from './Header.data';
import  { MotionTransition }  from '../MotionTransition'


export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <MotionTransition>
      <div className="top-0 w-full  z-99 menu-blur">
      <nav className='flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8 '>
        <Link href="/" className=''>
          <img src="/assets/logo.png" alt="logo de la FULL" width="120" height="40" />
        </Link>
        <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => { setOpenMobileMenu(!openMobileMenu) }} />
        <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <div className='flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            {dataHeader.map(({ id, name, idLink }) => (
              <div key={id} className='px-4 transition-all duration-500 ease-in-out'>
                <Link href={idLink} className='text-lg hover:text-secondary hover:border-b hover:mb-1'>{name}</Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      </div>
    </MotionTransition>
  )
}