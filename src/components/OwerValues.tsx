/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Eye, Heart, Leaf, Target } from 'lucide-react'

export default function AboutUsCards() {
  return (
    <section
      id="sobre"
      className="w-full flex flex-row flex-wrap justify-center px-16 py-16 bg-[#f4e1c1]"
    >
      <h2 className="text-3xl w-full font-bold text-center text-[#8b4513] mb-8">
        Nosso Propósito
      </h2>
      <div className="flex flex-row flex-wrap w-full justify-center items-center gap-14 max-sm:gap-0 max-md:gap-0">
        <div className="flex flex-col flex-wrap w-[400px]">
          <img
            src="./bulgura.jpg"
            className="w-full h-[500px] max-sm:hidden max-md:hidden object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col flex-wrap gap-3">
          <div className="flex flex-row justify-end flex-wrap gap-6">
            <Card className="bg-[#f4e1c1] w-[400px] max-md:w-full max-sm:w-full border-[#8b4513]">
              <CardHeader>
                <CardTitle className="flex flex-row items-center text-xl font-semibold text-[#8b4513]">
                  <Target className="w-6 h-6 mr-2" />
                  NOSSA MISSÃO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5e2c04]">
                  Levar diversão e entretenimento, com excelência no atendimento
                  ao cliente, priorizando suas necessidades e interesses.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#f4e1c1] w-[400px] max-md:w-full max-sm:w-full border-[#8b4513]">
              <CardHeader>
                <CardTitle className="flex flex-row items-center text-xl font-semibold text-[#8b4513]">
                  <Eye className="w-6 h-6 mr-2" />
                  NOSSA VISÃO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#5e2c04]">
                  Tornar-se a principal referência nacional em passeios
                  temáticos, oferecendo experiências únicas a bordo do Barco
                  Pirata.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row justify-end flex-wrap gap-6">
            <Card className="bg-[#f4e1c1] w-[400px] max-md:w-full max-sm:w-full border-[#8b4513]">
              <CardHeader>
                <CardTitle className="flex flex-row items-center text-xl font-semibold text-[#8b4513]">
                  <Heart className="w-6 h-6 mr-2" />
                  NOSSOS VALORES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-[#5e2c04]">
                  <li>Ética</li>
                  <li>Trabalho em equipe</li>
                  <li>Comprometimento</li>
                  <li>Segurança</li>
                  <li>Conforto</li>
                  <li>Credibilidade</li>
                  <li>Sustentabilidade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#f4e1c1] w-[400px] max-md:w-full max-sm:w-full border-[#8b4513]">
              <CardHeader>
                <CardTitle className="flex flex-row items-center text-xl font-semibold text-[#8b4513]">
                  <Leaf className="w-6 h-6 mr-2" />
                  Responsabilidade socioambiental
                </CardTitle>
                <CardDescription>
                  Não jogar lixo no mar nem deixar nas ilhas!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#5e2c04]">
                  Realizamos passeios beneficentes com entidades carentes
                  locais, proporcionando assim, conhecerem os atrativos da ilha,
                  sem custos. A respeito do lixo, plásticos e vidros são
                  separados e colocados nos dias da coleta seletiva. Já as
                  latinhas também são separadas e doadas a um morador da
                  comunidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center text-center pt-8 w-full">
        <h1 className="w-full">
          ⚠️ Nossa embarcação é habilitada pela Marinha do Brasil e segue
          padrões e normas de segurança.
        </h1>
      </div>
    </section>
  )
}
