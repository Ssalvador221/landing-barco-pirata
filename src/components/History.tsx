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
              {[0, 1, 2, 3, 4].map((_, index) => (
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
          <Card className="bg-[#e6d2ae] w-[400px] border-[#8b4513]">
            <CardHeader>
              <CardTitle className="text-[#8b4513] flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#5e2c04]">
              <p className="mb-4">
                We are a crew of passionate maritime enthusiasts and history
                buffs, dedicated to bringing the golden age of piracy to life.
                Our team consists of experienced sailors, knowledgeable
                historians, and adventure-seeking guides.
              </p>
              <p>
                Founded in 2010, our mission is to provide an immersive and
                educational experience that combines the thrill of sailing with
                the rich history of piracy in these waters. We strive to create
                unforgettable memories for all who board The Golden Horizon.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default History
