import Link from "next/link"

export default function NavMenu() {
  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
  ]

  return (
    <nav className="nav-menu hidden md:block">
      <ul className="nav-menu-list flex gap-6">
        {menuItems.map((item) => (
          <li key={item.label} className="nav-menu-item">
            <Link href={item.href} className="nav-menu-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
