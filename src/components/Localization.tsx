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
      className="px-28 py-28 max-sm:px-10 max-sm:py-10 bg-[#e6d2ae]"
      id="localização"
    >
      <h2
        className={`${calligraffitti.className} text-4xl font-bold mb-12 text-center text-[#000000]`}
      >
        Localização
      </h2>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1732817625175!6m8!1m7!1sCAoSLEFGMVFpcFBUSHNIWTdBN3hxUjBLZnItLUtzOE0yQURjSUVzUkw3ZDZsODg0!2m2!1d-27.39527097625789!2d-48.42882193531858!3f359.89!4f0.10999999999999943!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Localization
