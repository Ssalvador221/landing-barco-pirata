import Link from 'next/link'
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/card'

function AdicionalInformations() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-8">
      <Card className={`bg-[#f4e1c1] border-[#000000]`}>
        <CardHeader>
          <CardTitle className="text-center text-[#000000]">
            ⚠️ Passeios na baixa temporada ⚠️
          </CardTitle>
          <div className="text-3xl font-bold text-center text-[#000000]"></div>
        </CardHeader>
        <CardContent>
          <p className="pb-2">SAÍDAS DE ROTEIRO FULL:</p>
          <li>SEGUNDA</li>
          <li>TERÇA</li>
          <li>QUARTA</li>
          <li>SEXTA</li>
          <li>SÁBADO</li>
          <p className="pt-2">
            ROTEIRO FULL + ANHATOMIRIM: QUINTAS E DOMINGOS.
          </p>
          <br />
          <p className="font-bold">
            CONSULTE DISPONIBILDADE DO PASSEIO POCKET;
          </p>
          <p>
            Sujeito a uma quantidade mínima de passageiros para ocorrer o
            passeio.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href="https://api.whatsapp.com/send?phone=5548999603576"
            target="_blank"
            className="py-2 px-2 rounded mt-4 bg-[#8b4513] hover:bg-[#a0522d] text-[#f4e1c1]"
          >
            Agendar Passeio
          </Link>
        </CardFooter>
      </Card>
      <Card className={`bg-[#f4e1c1] border-[#000000]`}>
        <CardHeader>
          <CardTitle className="text-center text-[#000000]">
            ⚠️ Valores especiais para ⚠️
          </CardTitle>
          <div className="text-3xl font-bold text-center text-[#000000]"></div>
        </CardHeader>
        <CardContent>
          <li>Grupo + de 20 pagantes (Guia/motorista cortesia)</li>
          <p className="py-2">Locações exclusivas:</p>
          <li>Grupos coorporativos</li>
          <li>Aniversário</li>
          <li>Casamento</li>
          <li>Confraternizações</li>
          <li>Grupos escolares!</li>
          <br />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href="https://api.whatsapp.com/send?phone=5548999603576"
            target="_blank"
            className="py-2 px-2 rounded mt-4 bg-[#8b4513] hover:bg-[#a0522d] text-[#f4e1c1]"
          >
            Faça seu orçamento
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AdicionalInformations
