/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calligraffitti } from 'next/font/google'

const calligraffitti = Calligraffitti({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-repeat">
      <header className="relative h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            alt="Placeholder"
            src="./barco-perola-negra.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#d2b48c]/70" />
        </div>
        <nav className="relative z-10 flex items-center justify-between p-6 bg-[#8b4513]/80">
          <ul className="flex space-x-4">
            {['Home', 'About', 'Beach', 'Ride', 'Prices', 'Location'].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#f4e1c1] hover:text-[#ffd700] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div
          className={`flex-grow flex items-center justify-center relative z-10`}
        >
          <div className="text-center">
            <h1
              className={`${calligraffitti.className} text-[4.5rem] font-bold text-[#ffffff] mb-4`}
            >
              Barco Perola Negra
            </h1>
            <p className="text-xl text-[#ffffff] mb-8">
              Você teria coragem de navegar sobre o comando de um pirata?
            </p>
            <Button
              size="lg"
              className="bg-[#8b4513] hover:bg-[#a0522d] text-[#f4e1c1]"
            >
              Book Your Voyage
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}
