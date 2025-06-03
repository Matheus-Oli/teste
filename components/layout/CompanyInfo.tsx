import { MapPin, Phone, Mail } from "lucide-react"

export default function CompanyInfo() {
  return (
    <div className="footer-contact">
      <h3 className="footer-contact-title text-lg font-medium mb-4">Contato</h3>
      <ul className="footer-contact-list space-y-3">
        <li className="footer-contact-item flex items-start">
          <MapPin className="footer-contact-icon mr-2 h-5 w-5 flex-shrink-0" />
          <span className="footer-contact-text">Av. Tecnologia, 1000, São Paulo - SP</span>
        </li>
        <li className="footer-contact-item flex items-center">
          <Phone className="footer-contact-icon mr-2 h-5 w-5" />
          <span className="footer-contact-text">(11) 9999-9999</span>
        </li>
        <li className="footer-contact-item flex items-center">
          <Mail className="footer-contact-icon mr-2 h-5 w-5" />
          <span className="footer-contact-text">contato@techcompany.com.br</span>
        </li>
      </ul>
    </div>
  )
}
