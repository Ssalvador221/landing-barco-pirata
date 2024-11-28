/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Users } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'

function History() {
  return (
    <section id="our-story" className="py-16 bg-[#f4e1c1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#8b4513]">
          Nossa História
        </h2>
        <div className="flex flex-wrap flex-row justify-center gap-16 max-sm:gap-12">
          <Carousel className="w-[600px] h-auto">
            <CarouselContent>
              {[0, 1, 2].map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px]">
                    <img
                      src={`./barco-perola-${index}.jpg`}
                      alt={`Fotos Barco`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="max-sm:hidden" />
          </Carousel>
          <Card className="bg-[#e6d2ae] w-[700px] border-[#8b4513]">
            <CardHeader>
              <CardTitle className="text-[#8b4513] flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Quem somos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#5e2c04]">
              <p>
                O sonho começou bem pequenininho na praia de{' '}
                <strong>Ponta das Canas</strong>, por volta de 1998.
              </p>
              <br />
              <p className="mb-4">
                Durante o inverno, a embarcação “boca aberta” garantia o
                sustento da família com a pesca e quando chegava o verão, eram
                feitas adaptações, como colocação de um guarda sol para ser
                utilizados nos passeios.
              </p>
              <p>
                A procura dos turistas para visitar a Ilha do Francês e
                Anhatomirim era muito grande e a capacidade máxima dessa pequena
                embarcação era de apenas 12 passageiros e sem projetar, esse foi
                o início.
              </p>
              <br />
              <p>
                O Pérola Negra foi construído em 2007, uma escuna pirata com
                capacidade para 200 passageiros, com embarque em Canasvieiras,
                leva alegria e muita diversão, com atrações inesquecíveis, show
                de piratas e teatro a bordo, considerado o melhor e mais
                divertido barco pirata de Florianópolis. Encantar e divertir, é
                a nossa missão.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default History
