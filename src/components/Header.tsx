/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from './Navbar'
import Hamburguer from './Hamburguer'

function Header() {
  return (
    <header className="relative h-screen flex flex-col max-md:h-[400px] max-sm:h-[320px]">
      <div className="absolute inset-0 max-sm:z-50 max-sm:h-[400px]">
        <img
          alt="Placeholder"
          src="./barco-perola-negra.jpg"
          className="w-full h-full object-cover  max-sm:object-cover max-sm:align-middle max-sm:w-full max-sm:h-[270px] max-sm:mt-[58px] max-sm:z-50"
        />
      </div>
      <Navbar />
      <Hamburguer />
    </header>
  )
}

export default Header
