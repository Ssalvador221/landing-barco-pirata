import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Heart, Target } from 'lucide-react'

export default function AboutUsCards() {
  return (
    <section className="w-full flex flex-row flex-wrap justify-center px-16 py-16 bg-[#e6d2ae]">
      <div>
        <h2 className="text-3xl font-bold text-center text-[#8b4513] mb-8">
          Quem somos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#f4e1c1] border-[#8b4513]">
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

          <Card className="bg-[#f4e1c1] border-[#8b4513]">
            <CardHeader>
              <CardTitle className="flex flex-row items-center text-xl font-semibold text-[#8b4513]">
                <Eye className="w-6 h-6 mr-2" />
                NOSSA VISÃO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#5e2c04]">
                Tornar-se a principal referência nacional em passeios temáticos,
                oferecendo experiências únicas a bordo do Barco Pirata.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f4e1c1] border-[#8b4513]">
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
        </div>
      </div>
    </section>
  )
}
