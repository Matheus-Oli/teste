import SectionHeading from "../common/SectionHeading"
import ContactForm from "../forms/ContactForm"
import WhatsAppButton from "../common/WhatsAppButton"

export default function ContactSection() {
  return (
    <section id="contato" className="contact-section py-20 bg-gray-50">
      <div className="contact-container container mx-auto px-4">
        <SectionHeading
          title="Entre em Contato"
          subtitle="Vamos conversar sobre o seu projeto"
          description="Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível."
        />

        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="contact-info">
            <div className="contact-info-content">
              <h3 className="contact-info-title text-xl font-semibold mb-6">Informações de Contato</h3>
              <p className="contact-info-text mb-8">
                Estamos disponíveis para atender você e esclarecer todas as suas dúvidas sobre nossos serviços.
              </p>

              <div className="contact-info-items space-y-4">
                <div className="contact-info-item">
                  <h4 className="contact-info-item-title font-medium">Endereço</h4>
                  <p className="contact-info-item-text">Av. Tecnologia, 1000, São Paulo - SP</p>
                </div>

                <div className="contact-info-item">
                  <h4 className="contact-info-item-title font-medium">Telefone</h4>
                  <p className="contact-info-item-text">(11) 9999-9999</p>
                </div>

                <div className="contact-info-item">
                  <h4 className="contact-info-item-title font-medium">Email</h4>
                  <p className="contact-info-item-text">contato@techcompany.com.br</p>
                </div>

                <div className="contact-info-item">
                  <h4 className="contact-info-item-title font-medium">Horário de Atendimento</h4>
                  <p className="contact-info-item-text">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>

              <div className="contact-whatsapp mt-8">
                <WhatsAppButton phoneNumber="5511999999999" text="Fale conosco pelo WhatsApp" />
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
