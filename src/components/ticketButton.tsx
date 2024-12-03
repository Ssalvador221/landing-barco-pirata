import React from 'react'
import { FaTicket } from 'react-icons/fa6'

function TicketButton() {
  return (
    <a
      href="https://ingressos.escunaspirata.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[19%] right-6 bg-[#a56333] text-white rounded-full p-4 shadow-lg hover:bg-[#6c3d26] transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaTicket className="w-6 h-6" />
    </a>
  )
}

export default TicketButton
