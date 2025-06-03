import SectionHeading from "../common/SectionHeading"
import TestimonialCard from "../cards/TestimonialCard"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Roberto Mendes",
      company: "Moda Express",
      quote:
        "A equipe entregou um e-commerce que superou todas as nossas expectativas. As vendas aumentaram em 150% nos primeiros três meses após o lançamento.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Juliana Ferreira",
      company: "Restaurante Sabor & Arte",
      quote:
        "O aplicativo de delivery desenvolvido pela equipe revolucionou nosso negócio. Processo simples, intuitivo e com ótimo suporte técnico.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Marcos Almeida",
      company: "Construtora Horizonte",
      quote:
        "O sistema de gestão implementado otimizou todos os nossos processos internos, resultando em economia de tempo e recursos para a empresa.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="depoimentos" className="testimonials-section py-20">
      <div className="testimonials-container container mx-auto px-4">
        <SectionHeading
          title="Depoimentos"
          subtitle="O que nossos clientes dizem"
          description="Veja o que nossos clientes têm a dizer sobre nossas soluções e serviços."
        />

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              company={testimonial.company}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
