import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center gap-16 py-8 px-8 w-full bg-[#8b4513] text-[#f4e1c1] ">
      <div className="flex flex-col gap-y-2 justify-center text-left text-sm">
        <h4 className="font-bold mb-2">FALE CONOSCO:</h4>
        <p>
          <strong>Endereço: </strong> Av. Luiz Boiteux Piazza, 64778 Ponta das
          Canas
        </p>
        <p>
          <strong>Telefone: </strong>
          <a className="ml-1">+55 48 3284-1681</a>
        </p>
        <p>
          <strong>Celular: </strong>
          <a
            href="https://wa.me/5548999603576"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffd700] inline-flex items-center ml-1"
          >
            +55 48 99960-3576
            <FaWhatsapp className="ml-2" />
          </a>
        </p>
        <p>
          <strong>Email: </strong>
          <a
            href="mailto:contato@barcoperolanegra.com"
            className="hover:text-[#ffd700]"
          >
            contato@barcoperolanegra.com
          </a>
        </p>
      </div>
      <div className="flex flex-col mb-24">
        <h4 className="font-bold mb-2">Redes Socias</h4>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.instagram.com/barcoperolanegra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/Barcoperolanegrafloripa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/5548999603576"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
