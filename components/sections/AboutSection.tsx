import SectionHeading from "../common/SectionHeading"
import TeamMember from "../cards/TeamMember"

export default function AboutSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CEO & Fundadora",
      bio: "Especialista em estratégia digital com mais de 15 anos de experiência no mercado de tecnologia.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      role: "CTO",
      bio: "Desenvolvedor full-stack com vasta experiência em arquitetura de sistemas e novas tecnologias.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Diretora de Design",
      bio: "Designer UX/UI com foco em criar experiências digitais intuitivas e visualmente atraentes.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="sobre" className="about-section py-20 bg-gray-50">
      <div className="about-container container mx-auto px-4">
        <SectionHeading
          title="Sobre Nós"
          subtitle="Nossa História"
          description="Conheça um pouco mais sobre nossa empresa e a equipe por trás dos projetos de sucesso."
        />

        <div className="about-content mt-12">
          <div className="about-mission-vision grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="about-mission">
              <h3 className="about-mission-title text-xl font-semibold mb-4">Nossa Missão</h3>
              <p className="about-mission-text">
                Desenvolver soluções tecnológicas inovadoras que transformem negócios e simplifiquem a vida das pessoas,
                sempre com foco na qualidade, usabilidade e resultados mensuráveis.
              </p>
            </div>

            <div className="about-vision">
              <h3 className="about-vision-title text-xl font-semibold mb-4">Nossa Visão</h3>
              <p className="about-vision-text">
                Ser referência nacional em desenvolvimento de software e criação de sites, reconhecida pela excelência
                técnica, inovação constante e compromisso com o sucesso dos clientes.
              </p>
            </div>
          </div>

          <div className="about-team">
            <h3 className="about-team-title text-2xl font-semibold mb-8 text-center">Nossa Equipe</h3>
            <div className="about-team-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
