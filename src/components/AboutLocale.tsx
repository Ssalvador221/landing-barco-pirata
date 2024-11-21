import { Shell, Waves, Compass } from 'lucide-react'
import { Calligraffitti } from 'next/font/google'
import React from 'react'
import { FaTree } from 'react-icons/fa'

const calligraffitti = Calligraffitti({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

function AboutLocale() {
  return (
    <section id="praia" className="py-16 bg-[#f4e1c1]">
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
              Florianópolis, localizada no norte da Ilha de Santa Catarina. Com
              águas calmas, quentes e esverdeadas, é um destino popular entre
              famílias e turistas, especialmente argentinos e uruguaios. A praia
              é ideal para banho de mar e esportes aquáticos, como stand-up
              paddle e passeios de caiaque.
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
  )
}

export default AboutLocale
