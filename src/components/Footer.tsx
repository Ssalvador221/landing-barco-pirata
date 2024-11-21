import React from 'react'
import { Button } from './ui/button'

function Footer() {
  return (
    <footer className="bg-[#8b4513] text-[#f4e1c1] py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          © 2023 Pirates Adventure. All rights reserved. Sail at your own risk,
          matey!
        </p>
        <div className="mt-4">
          <Button
            variant="link"
            className="text-[#f4e1c1] hover:text-[#ffd700]"
          >
            Privacy Policy
          </Button>
          <Button
            variant="link"
            className="text-[#f4e1c1] hover:text-[#ffd700]"
          >
            Terms of Service
          </Button>
          <Button
            variant="link"
            className="text-[#f4e1c1] hover:text-[#ffd700]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
