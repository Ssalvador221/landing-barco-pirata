/* eslint-disable @next/next/no-img-element */
'use client'

import AboutRide from '@/components/cards/AboutRide'
import Header from '@/components/Header'
import AboutLocale from '@/components/AboutLocale'
import Localization from '@/components/Localization'
import Informations from '@/components/Informations'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsappButton'
import History from '@/components/History'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <History />
        <AboutRide />
        <AboutLocale />
        <Informations />
        <Localization />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  )
}
