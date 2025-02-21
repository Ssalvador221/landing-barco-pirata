'use client'

import AboutRide from '@/components/cards/AboutRide'
import Header from '@/components/Header'
import AboutLocale from '@/components/AboutLocale'
import Localization from '@/components/Localization'
import Informations from '@/components/Informations'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsappButton'
import History from '@/components/History'
import Intro from '@/components/Intro'
import InstagramButton from '@/components/InstagramButton'
import AboutUsCards from '@/components/OwerValues'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Intro />
        <History />
        <AboutRide />
        <AboutLocale />
        <Informations />
        <AboutUsCards />
        <Localization />
      </main>
      <Footer />
      <WhatsappButton />
      <InstagramButton />
    </div>
  )
}
