/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import Navbar from './Navbar'
import Hamburguer from './Hamburguer'

function Header() {
  return (
    <header className="relative h-screen flex flex-col max-sm:h-[320px]">
      <div className="absolute inset-0 max-sm:z-50 max-sm:h-[400px]">
        <img
          alt="Placeholder"
          src="./barco-perola-negra.jpg"
          className="w-full h-full object-cover max-sm:object-cover max-sm:align-middle max-sm:w-full max-sm:h-[270px] max-sm:mt-[58px] max-sm:z-50"
        />
      </div>
      <Navbar />
      <Hamburguer />
      <div
        className={`flex-grow flex items-center lg:mt-[40rem] md:mt-[40rem] max-md:mt-[40rem] max-sm:hidden justify-center relative z-20 max-sm:bg-[#e6d2ae]`}
      >
        <div className="text-center">
          <div className="flex w-full justify-center items-center gap-6">
            <Link
              href="https://api.whatsapp.com/send?phone=5548999603576"
              target="_blank"
            >
              <FaWhatsapp className="w-8 h-8 text-[#ffffff] max-sm:text-[#000000]" />
            </Link>
            <Link href="https://www.instagram.com/barcoperolanegra/">
              <FaInstagram className="w-8 h-8 text-[#ffffff] max-sm:text-[#000000]" />
            </Link>
            <Link href="https://ingressos.escunaspirata.com.br/agente/421103/">
              <FaTicket className="w-8 h-8 text-[#ffffff] max-sm:text-[#000000]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
