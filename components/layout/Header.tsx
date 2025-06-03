import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavMenu from "./NavMenu"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container mx-auto py-4 px-4 flex justify-between items-center">
        <Logo />
        <NavMenu />
        <Button asChild className="header-contact-button">
          <Link href="#contato">Fale Conosco</Link>
        </Button>
      </div>
    </header>
  )
}
