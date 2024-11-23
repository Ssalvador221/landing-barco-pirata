/* eslint-disable react/jsx-no-undef */
import { Ship, Anchor } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../ui/card'
import Link from 'next/link'

function AboutRide() {
  return (
    <section id="passeio" className="py-16 bg-[#e6d2ae]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#8b4513]">
          Sobre o Passeio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#f4e1c1] border-[#8b4513]">
            <CardHeader className="p-0">
              <Image
                src="/fotoPocket.jpg"
                alt="Passeio Pocket"
                width={400}
                height={30}
                className="w-full mb-2 h-[600px] object-fill rounded-t-lg"
              />
              <CardTitle className="text-[#8b4513] flex items-center p-4">
                <Ship className="w-6 h-6 mr-2" />
                Passeio Pocket
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#5e2c04]">
              <p className="mb-2">⏱️ Duração: Aproximadamente 2 horas</p>
              <p className="mb-2">
                ⚓ Saida: Canasvieiras às 10h e as 14h30 somente na alta
                temporada ou com grupos durante o ano todo
              </p>
              <p className="mb-2">🏖️ Vista panorâmica das praias:</p>
              <ul className="list-disc list-inside mb-2">
                <li>Canasvieiras</li>
                <li>Canasjure</li>
                <li>Jurerê Tradicional</li>
                <li>Jurerê Internacional</li>
                <li>Praia do Forte</li>
                <li>Cachoeira do Bom Jesus</li>
                <li>Ponta das Canas</li>
              </ul>
              <p className="mb-2">🏊‍♂️ Banho de mar na Ilha do Francês</p>
              <p className="mb-2">
                🏰 Explicação histórica das Fortalezas, praias da ilha da Magia,
                com vista panorâmica da Fortaleza de São José da Ponta Grossa.
              </p>
              <p className="font-bold">Valores:</p>
              <p className="font-bold">R$ 90,00 COMPRA ANTECIPADA.</p>
              <p>R$ 110,00 COMPRA NO DIA.</p>
              <p className="text-sm mt-2">
                👧🏽 Crianças de 0 a 5 anos não pagam
              </p>
              <p className="text-sm">
                Crianças de 6-10 anos: Paga meia entrada e é necessário
                documento.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://ingressos.escunaspirata.com.br/unit/4212/pirata-pocket--compra-antecipada/"
                target="_blank"
              >
                <button className="bg-[#8b4513] hover:bg-[#5e2c04] text-white py-2 px-4 rounded">
                  Compre aqui!
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-[#f4e1c1] border-[#8b4513]">
            <CardHeader className="p-0">
              <Image
                src="/barcoPerola.jpg"
                alt="Passeio Pocket"
                width={400}
                height={30}
                className="w-full mb-2 h-[600px] object-fill rounded-t-lg"
              />
              <CardTitle className="text-[#8b4513] p-4 flex items-center">
                <Anchor className="w-6 h-6 mr-2" />
                Passeio Full
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#5e2c04]">
              <p className="mb-2">⏱️ Duração: aproximadamente 4 horas</p>
              <p className="mb-2">
                ⚓ Saída: Canasvieiras as 10h30 (Alta temporada)
              </p>
              <p className="mb-2">🏖️ Passagens pelas praias</p>
              <ul className="list-disc list-inside mb-2">
                <li>Canasvieiras e Canasjurê</li>
                <li>Jurerê Tradicional e Internacional</li>
                <li>Praia do Forte</li>
                <li>São José da Ponta Grossa Forte (vista panorâmica)</li>
                <li>
                  Ilha de Anhatomirim e em seguida do Quartel da Tropa história
                  da Fortaleza de Santa Cruz nestas paradas.
                </li>
                <li>Santa Cruz Forte</li>
                <li>
                  Baía dos Golfinhos (Estando os golfinhos, paramos para
                  observa-los.)
                </li>
              </ul>
              <p className="mb-2">
                🍽️ parada para almoço na praia da Costeira da Armação (Município
                de Governador Celso Ramos). Valor de R$ 70,00 (dinheiro ou
                cartão) por pessoa buffet livre (crianças de 6 a 10 anos paga
                meia no almoço);
              </p>
              <p className="mb-2">🏊‍♂️ Banho de Mar ilha do francês</p>
              <p className="font-bold">Valores:</p>
              <p className="font-bold">R$ 130,00 COMPRA ANTECIPADA</p>
              <p>R$ 150,00 COMPRA NO DIA</p>
              <p className="text-sm mt-2">
                👧🏽 Crianças de 0 a 5 anos não pagam
              </p>
              <p className="text-sm">
                {' '}
                6 a 10 anos pagam meia é necessário apresentação de documento
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://ingressos.escunaspirata.com.br/unit/4211/pirata-full--compra-antecipada/"
                target="_blank"
              >
                <button className="bg-[#8b4513] hover:bg-[#5e2c04] text-white py-2 px-4 rounded">
                  Compre aqui!
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-[#f4e1c1] border-[#8b4513]">
            <CardHeader className="p-0">
              <Image
                src="/roteiro5horas.jpg"
                alt="Passeio Pocket"
                width={400}
                height={200}
                className="w-full mb-2 object-cover rounded-t-lg"
              />
              <CardTitle className="text-[#8b4513] flex items-center p-4">
                <Ship className="w-6 h-6 mr-2" />
                Passeio Full + Visitação à Fortaleza
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#5e2c04]">
              <p className="mb-2">⏱️ Duração: aproximadamente 5 horas</p>
              <p className="mb-2">
                ⚓ Saida: Canasvieiras as 9h (Alta temporada)
              </p>
              <p className="mb-2">🏖️ Passagens pelas praias:</p>
              <ul className="list-disc list-inside mb-2">
                <li>Canasvieiras and Canasjurê</li>
                <li>Jurerê Tradicional e Internacional</li>
                <li>Praia do Forte</li>
                <li>
                  São José da Ponta Grossa Fort (vista panorâmica) e breve
                  explicação histórica desta Fortaleza
                </li>
                <li>
                  Baía dos Golfinhos (Estando os golfinhos, paramos para
                  observa-los.)
                </li>
                <p className="mb-2">
                  🍽️ parada para almoço na praia da Costeira da Armação
                  (Município de Governador Celso Ramos). Valor de R$ 70,00
                  (dinheiro ou cartão) por pessoa buffet livre (crianças de 6 a
                  10 anos paga meia no almoço);
                </p>
                <li>
                  Visitação a Ilha de Anhatomirim (Desembarque Obrigatório)
                </li>
                <p className="font-bold">
                  🏰 Valor da entrada na Fortaleza: R$16,00. (Só aceitam
                  dinheiro, levem trocado, para agilizar a fila de entrada.)
                  Crianças em idade escolar pagam a metade e adultos que
                  apresentarem carteirinha de estudante também. Maiores de 60
                  anos não pagam para entrar na Fortaleza.
                </p>
              </ul>
              <p className="mb-2">🏊‍♂️ Banho de mar na Ilha do Francês</p>

              <p className="font-bold">Valores:</p>
              <p className="font-bold">R$ 150,00 COMPRA ANTECIPADA.</p>
              <p>R$ 170,00 COMPRA NO DIA</p>
              <p className="text-sm mt-2">
                👧🏽 Crianças de 0 a 5 anos não pagam
              </p>
              <p className="text-sm">
                6 a 10 anos pagam meia é necessário apresentação de documento
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://ingressos.escunaspirata.com.br/unit/4233/fortalezas/"
                target="_blank"
              >
                <button className="bg-[#8b4513] hover:bg-[#5e2c04] text-white py-2 px-4 rounded">
                  Compre aqui!
                </button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[#5e2c04] mb-4">
            ⚠️ Aviso Importante: o Check-in deve ser feito com 1 hora de
            antecedência.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutRide
