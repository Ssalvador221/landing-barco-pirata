import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Menu } from 'lucide-react'

function Hamburguer() {
  return (
    <div className="fixed w-full z-50 block md:hidden  items-center justify-center p-6 bg-[url(/navbar.svg)]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onScroll={() => window.scrollTo(0, 0)}>
            Home
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => document.getElementById('passeio')?.scrollIntoView()}
          >
            Passeio
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => document.getElementById('sobre')?.scrollIntoView()}
          >
            Sobre Nos
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              document.getElementById('localização')?.scrollIntoView()
            }
          >
            Localização
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Hamburguer
