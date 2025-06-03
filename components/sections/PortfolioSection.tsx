import ProjectCard from "../cards/ProjectCard"
import SectionHeading from "../common/SectionHeading"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Moda",
      category: "Desenvolvimento Web",
      description:
        "Plataforma completa de e-commerce para uma marca de moda com integração de pagamentos e gestão de estoque.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Aplicativo de Delivery",
      category: "Aplicativo Mobile",
      description:
        "Aplicativo de delivery para restaurantes com sistema de pedidos, pagamentos e rastreamento em tempo real.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Sistema de Gestão",
      category: "Sistema Corporativo",
      description:
        "Sistema de gestão empresarial completo para uma empresa de médio porte, integrando todos os departamentos.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="portfolio" className="portfolio-section py-20">
      <div className="portfolio-container container mx-auto px-4">
        <SectionHeading
          title="Nosso Portfólio"
          subtitle="Projetos de Sucesso"
          description="Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes."
        />

        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>

        <div className="portfolio-action flex justify-center mt-12">
          <Button asChild variant="outline" size="lg" className="portfolio-view-more">
            <Link href="/portfolio">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
