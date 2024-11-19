/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { Calligraffitti } from 'next/font/google'
import { FaInstagram, FaTree, FaWhatsapp } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { Anchor, Compass, MapPin, Shell, Ship, Waves } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const calligraffitti = Calligraffitti({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            alt="Placeholder"
            src="./barco-perola-negra.jpg"
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 " />
        </div>
        <nav className="fixed w-full z-50 flex items-center justify-center p-6 bg-[url(/navbar.svg)]">
          <ul className="flex space-x-4">
            {['Home', 'About', 'Beach', 'Ride', 'Prices', 'Location'].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#000000]  transition-colors"
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

      <main>
        <section id="ride" className="py-16 bg-[#e6d2ae]">
          <div className="container mx-auto px-4">
            <h2
              className={`${calligraffitti.className} text-4xl font-bold text-center mb-8 text-[#000000]`}
            >
              Sobre o passeio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Authentic Ship',
                  icon: Ship,
                  description: 'Experience life aboard a real pirate vessel',
                },
                {
                  title: 'Treasure Hunt',
                  icon: Compass,
                  description: 'Solve clues and find hidden treasures',
                },
                {
                  title: 'Sea Battles',
                  icon: Anchor,
                  description:
                    'Engage in thrilling sea battles with water cannons',
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-[#f4e1c1] border-[#000000]">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 mb-2 text-[#000000]" />
                    <CardTitle className="text-[#000000]">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#000000]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="beach" className="py-16 bg-[#f4e1c1]">
          <div className="container mx-auto px-4">
            <h2
              className={`${calligraffitti.className} text-4xl font-bold text-center mb-8 text-[#000000]`}
            >
              Aonde você vai estar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/praia-canas.webp"
                  alt="Buccaneer's Beach"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#000000] mb-4 text-[17px] max-sm:text-[15px] max-sm:text-center">
                  Canasvieiras é uma das praias mais famosas e movimentadas de
                  Florianópolis, localizada no norte da Ilha de Santa Catarina.
                  Com águas calmas, quentes e esverdeadas, é um destino popular
                  entre famílias e turistas, especialmente argentinos e
                  uruguaios. A praia é ideal para banho de mar e esportes
                  aquáticos, como stand-up paddle e passeios de caiaque.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaTree, text: 'Clima tropical' },
                    { icon: Shell, text: 'Seguro e limpo' },
                    { icon: Waves, text: 'Mar Calmo e limpo' },
                    {
                      icon: Compass,
                      text: 'Região Norte da Ilha',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <item.icon className="w-6 h-6 mr-2 text-[#000000]" />
                      <span className="text-[#000000]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="prices" className="py-16 bg-[#e6d2ae]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#000000]">
              Ticket Prices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cabin Boy',
                  price: '$25',
                  features: ['Basic ride access', 'Treasure map', 'Pirate hat'],
                },
                {
                  title: 'First Mate',
                  price: '$40',
                  features: [
                    'All Cabin Boy features',
                    'Priority boarding',
                    'Souvenir eye patch',
                  ],
                },
                {
                  title: 'Captain',
                  price: '$60',
                  features: [
                    'All First Mate features',
                    'Private cabin',
                    'Rum tasting (non-alcoholic)',
                  ],
                },
              ].map((tier, index) => (
                <Card
                  key={index}
                  className={`bg-[#f4e1c1] border-[#000000] ${index === 1 ? 'border-2' : ''}`}
                >
                  <CardHeader>
                    <CardTitle className="text-center text-[#000000]">
                      {tier.title}
                    </CardTitle>
                    <div className="text-3xl font-bold text-center text-[#000000]">
                      {tier.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-[#5e2c04]">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-[#8b4513] hover:bg-[#a0522d] text-[#f4e1c1]">
                      Choose {tier.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-28 py-28 max-sm:px-10 max-sm:py-10"
          id="localizacao"
        >
          <h2
            className={`${calligraffitti.className} text-4xl font-bold mb-12 text-center text-[#000000]`}
          >
            Localização
          </h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.21455727182627!2d-48.45043650267487!3d-27.426301788211198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952743a5a3fd690d%3A0x4b4fbf029af9f19e!2sEscunas%20Pirata%20-%20O%20Maior%20Porto%20Pirata%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1732032512270!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#8b4513] text-[#f4e1c1] py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2023 Pirates Adventure. All rights reserved. Sail at your own
            risk, matey!
          </p>
          <div className="mt-4">
            <Button
              variant="link"
              className="text-[#f4e1c1] hover:text-[#ffd700]"
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="text-[#f4e1c1] hover:text-[#ffd700]"
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              className="text-[#f4e1c1] hover:text-[#ffd700]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
