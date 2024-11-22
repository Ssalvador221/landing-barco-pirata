/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Intro() {
  return (
    <section id="nossa-história" className="py-16 bg-[#E6D2AE]">
      <div className="container flex flex-wrap justify-center items-center gap-16 mx-auto px-4">
        <img src="./mastro.jpg" className="w-24 h-24" alt="Fotos Barco" />
        <p className="text-center w-[660px] text-xl text-[#000000]">
          Há mais de trinta anos de experiência nos mares da região! Pérola
          Negra, o maior e mais divertido barco pirata de Floripa, levará você a
          conhecer belíssimas paisagens e praias do Norte da Ilha, com uma
          equipe de piratas que encantará seu passeio do início ao fim.
          <br />
          <strong>
            Você tem coragem de navegar sobre o comando de um Pirata?
          </strong>
        </p>
        <img src="./mastro.jpg" className="w-24 h-24" alt="Fotos Barco" />
      </div>
    </section>
  )
}

export default Intro
