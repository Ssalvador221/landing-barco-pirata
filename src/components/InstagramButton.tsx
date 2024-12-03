import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/barcoperolanegra/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[11%] right-6 bg-[#b43744] text-white rounded-full p-4 shadow-lg hover:bg-[#742f36] transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaInstagram className="w-6 h-6" />
    </a>
  )
}

export default InstagramButton
