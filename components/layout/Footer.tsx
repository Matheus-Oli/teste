import Link from "next/link"
import SocialLinks from "../common/SocialLinks"
import FooterNavigation from "./FooterNavigation"
import CompanyInfo from "./CompanyInfo"

export default function Footer() {
  return (
    <footer className="footer bg-gray-50">
      <div className="footer-container container mx-auto py-12 px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-text text-xl font-bold">TechCompany</span>
            </Link>
            <p className="footer-tagline mt-2">Soluções tecnológicas para transformar seu negócio</p>
            <SocialLinks className="mt-4" />
          </div>

          <FooterNavigation
            title="Navegação"
            links={[
              { label: "Início", href: "#" },
              { label: "Serviços", href: "#servicos" },
              { label: "Portfólio", href: "#portfolio" },
              { label: "Sobre", href: "#sobre" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" },
            ]}
          />

          <FooterNavigation
            title="Serviços"
            links={[
              { label: "Desenvolvimento Web", href: "#servicos" },
              { label: "Aplicativos Mobile", href: "#servicos" },
              { label: "Sistemas Corporativos", href: "#servicos" },
              { label: "UX/UI Design", href: "#servicos" },
              { label: "Consultoria", href: "#servicos" },
            ]}
          />

          <CompanyInfo />
        </div>

        <div className="footer-bottom mt-12 pt-6 border-t border-gray-200">
          <div className="footer-copyright text-center">
            <p>&copy; {new Date().getFullYear()} TechCompany. Todos os direitos reservados.</p>
          </div>
          <div className="footer-legal flex justify-center mt-2 gap-4">
            <Link href="/politica-de-privacidade" className="footer-legal-link text-sm">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="footer-legal-link text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
