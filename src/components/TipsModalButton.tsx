import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Anchor,
  Clock,
  Shirt,
  Sun,
  Cookie,
  Thermometer,
  Battery,
} from 'lucide-react'

export default function TipsModalButton() {
  const [isOpen, setIsOpen] = useState(false)

  const tips = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Chegada ao local do embarque',
      content:
        'Organize-se para chegar no local de embarque com uma hora de antecedência, assim, evitando possíveis congestionamento no trânsito e além de obter melhor local para estacionar (caso venha de carro).',
    },
    {
      icon: <Shirt className="h-6 w-6" />,
      title: 'Trajes para o passeio',
      content:
        'Venha com roupa confortável e de acordo com a estação do ano. Se for no verão, roupas de banho são indispensáveis, pois a parada para banho de mar é maravilhosa (acontece sempre nas imediações da Ilha do Francês). Não se esqueça de trazer toalhas e sandálias.',
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: 'Proteja-se do sol',
      content:
        'Protetor solar faz-se necessário em qualquer estação do ano e o uso de bonés ou chapéus são bem vindos no verão.',
    },
    {
      icon: <Cookie className="h-6 w-6" />,
      title: 'Reponha suas energias',
      content:
        'Leve uma barrinha de cereal ou de chocolate para beliscar durante o percurso e tome bastante água.',
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: 'Mamães corujas',
      content:
        'Recomendamos que tragam sempre para seus pequenos uma blusinha mais quente, às vezes esfria bastante no percurso da volta.',
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: 'Bateria extra',
      content:
        'Venha com celular carregado, você não vai querer perder a oportunidade de tirar fotos das belas paisagens naturais e dos momentos divertidos a bordo do barco. Afinal este é um momento tão esperado para vir com sua família e amigos eternizando essa aventura com belíssimos registros!',
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="text-[#f4e1c1] bg-[#8b4513]  font-bold"
        >
          <Anchor className="mr-2 h-4 w-4" />
          Dicas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#f4e1c1] border-[#8b4513]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#8b4513] text-center">
            Dicas para um passeio de barco pirata em Florianópolis
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="space-y-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-[#8b4513] rounded-full p-2">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#8b4513]">{tip.title}</h3>
                  <p className="text-[#5e2c04]">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <p className="mt-4 text-center text-[#8b4513] font-semibold">
          Seguindo essas dicas, com certeza seu passeio de barco será sinônimo
          de segurança, conforto e muita diversão!
        </p>
      </DialogContent>
    </Dialog>
  )
}
