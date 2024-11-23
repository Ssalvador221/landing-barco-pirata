/* eslint-disable @next/next/no-img-element */
import { Calligraffitti } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import Navbar from './Navbar'
import Hamburguer from './Hamburguer'

const calligraffitti = Calligraffitti({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
function Header() {
  return (
    <header className="relative h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          alt="Placeholder"
          src="./barco-perola-negra.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
      </div>
      <Navbar />
      <Hamburguer />
      <div
        className={`flex-grow flex items-center justify-center relative z-10`}
      >
        <div className="text-center">
          <h1
            className={`${calligraffitti.className} text-[6rem] max-sm:text-[3rem] font-bold text-[#8b4513] mb-4`}
          ></h1>
          <p
            className={`${calligraffitti.className} text-3xl max-sm:text-xl max-sm:mt-[33rem] text-[#ffffff] mt-[48rem] mb-8`}
          >
            Você teria coragem de navegar sob o comando de um pirata?
          </p>
          <div className="flex w-full justify-center items-center gap-6">
            <Link
              href="https://api.whatsapp.com/send?phone=5548999603576"
              target="_blank"
            >
              <FaWhatsapp className="w-6 h-6 text-white" />
            </Link>
            <Link href="https://www.instagram.com/barcoperolanegra/">
              <FaInstagram className="w-6 h-6 text-white" />
            </Link>
            <Link href="https://ingressos.escunaspirata.com.br/agente/421103/">
              <FaTicket className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
