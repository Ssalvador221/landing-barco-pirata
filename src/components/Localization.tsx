import { Calligraffitti } from 'next/font/google'
import React from 'react'

const calligraffitti = Calligraffitti({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
function Localization() {
  return (
    <section
      className="w-full px-28 py-28 max-sm:px-0 max-sm:py-8   bg-[#e6d2ae]"
      id="localização"
    >
      <h2
        className={`${calligraffitti.className} text-4xl font-bold  text-center text-[#000000]`}
      >
        Localização
      </h2>
      <div className="flex flex-col items-center pt-20 aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.33593067118676!2d-48.45063359845305!3d-27.42642499136755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952743a5a5dd513f%3A0xe5369e503939589b!2sEmbarque%20-%20BARCO%20P%C3%89ROLA%20NEGRA!5e0!3m2!1spt-BR!2sbr!4v1733251456316!5m2!1spt-BR!2sbr"
          width="60%"
          height="80%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Localization
