import ServiceCard from "../cards/ServiceCard"
import SectionHeading from "../common/SectionHeading"

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Desenvolvimento Web",
      description:
        "Sites institucionais, e-commerces e aplicações web personalizadas com as melhores tecnologias do mercado.",
      icon: "Code",
    },
    {
      id: 2,
      title: "Aplicativos Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android que atendem às necessidades do seu negócio.",
      icon: "Smartphone",
    },
    {
      id: 3,
      title: "Sistemas Corporativos",
      description: "Sistemas sob medida para otimizar processos e aumentar a produtividade da sua empresa.",
      icon: "LayoutDashboard",
    },
    {
      id: 4,
      title: "UX/UI Design",
      description: "Design de interfaces intuitivas e experiências de usuário que convertem visitantes em clientes.",
      icon: "Palette",
    },
    {
      id: 5,
      title: "Consultoria",
      description: "Consultoria especializada em tecnologia para impulsionar a transformação digital do seu negócio.",
      icon: "Lightbulb",
    },
    {
      id: 6,
      title: "Suporte e Manutenção",
      description: "Suporte técnico e manutenção contínua para garantir o funcionamento perfeito das suas soluções.",
      icon: "LifeBuoy",
    },
  ]

  return (
    <section id="servicos" className="services-section py-20 bg-gray-50">
      <div className="services-container container mx-auto px-4">
        <SectionHeading
          title="Nossos Serviços"
          subtitle="Soluções completas para o seu negócio"
          description="Oferecemos uma ampla gama de serviços de tecnologia para atender às necessidades específicas da sua empresa."
        />

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
