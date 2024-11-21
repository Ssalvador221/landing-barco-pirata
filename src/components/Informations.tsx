import React from 'react'
import AdicionalInformations from './cards/AdicionalInformations'

function Informations() {
  return (
    <section id="infos" className="py-16 bg-[#e6d2ae]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#000000]">
          Informações Adicionais
        </h2>
        <AdicionalInformations />
      </div>
    </section>
  )
}

export default Informations
