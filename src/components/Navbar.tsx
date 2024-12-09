import Link from 'next/link'
import React from 'react'
import TipsModalNav from './TipsModalNav'

function Navbar() {
  return (
    <nav className="fixed w-full z-50 max-sm:hidden  flex items-center justify-center p-6 bg-[url(/navbar.svg)]">
      <ul className="flex space-x-4">
        <li>
          <Link
            href={`#${'Home'.toLowerCase()}`}
            className="text-[#000000] hover:text-[#8b4513] font-bold scroll-smooth transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={`#${'Passeio'.toLowerCase()}`}
            className="text-[#000000] hover:text-[#8b4513] font-bold scroll-smooth transition-colors"
          >
            Passeio
          </Link>
        </li>
        <li>
          <Link
            href={`#${'Sobre'.toLowerCase()}`}
            className="text-[#000000] hover:text-[#8b4513] font-bold scroll-smooth transition-colors"
          >
            Sobre Nos
          </Link>
        </li>
        <li>
          <Link
            href={`#${'Localização'.toLowerCase()}`}
            className="text-[#000000] hover:text-[#8b4513] font-bold scroll-smooth transition-colors"
          >
            Localização
          </Link>
        </li>
        <TipsModalNav />
        <li>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5548999603576"
            className="text-[#000000] hover:text-[#8b4513] font-bold"
          >
            Ingressos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
