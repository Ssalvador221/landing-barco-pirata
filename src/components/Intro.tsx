/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Intro() {
  return (
    <section id="nossa-história" className="py-16 max-sm:py-8 bg-[#E6D2AE]">
      <div className="container flex flex-col flex-wrap justify-center items-center gap-16 mx-auto px-4">
        <h1 className="text-4xl font-bold text-center  text-[#8b4513]">
          Barco Pérola Negra
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <img src="./mastro.jpg" className="w-32 h-32" />
          <p className="text-center w-[660px] max-sm:w-auto max-sm:text-center text-xl text-[#8b4513]">
            Há mais de trinta anos de experiência nos mares da região! Pérola
            Negra, o maior e mais divertido barco pirata de Floripa, levará você
            a conhecer belíssimas paisagens e praias do Norte da Ilha, com uma
            equipe de piratas que encantará seu passeio do início ao fim.
            <br />
            <strong>
              Você tem coragem de navegar sob o comando de um Pirata?
            </strong>
          </p>
          <img src="./mastro.jpg" className="w-32 h-32" />
        </div>
      </div>
    </section>
  )
}

export default Intro
