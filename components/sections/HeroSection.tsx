import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section py-20">
      <div className="hero-container container mx-auto px-4">
        <div className="hero-content max-w-3xl">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold">
            Transformando ideias em soluções digitais
          </h1>
          <p className="hero-description text-xl mt-6">
            Desenvolvimento de software e criação de sites com foco em resultados para o seu negócio.
          </p>
          <div className="hero-actions flex gap-4 mt-8">
            <Button asChild size="lg" className="hero-cta-primary">
              <Link href="#contato">Solicitar Orçamento</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hero-cta-secondary">
              <Link href="#servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
