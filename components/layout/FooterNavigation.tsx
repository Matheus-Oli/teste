import Link from "next/link"

interface FooterNavigationProps {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export default function FooterNavigation({ title, links }: FooterNavigationProps) {
  return (
    <div className="footer-nav">
      <h3 className="footer-nav-title text-lg font-medium mb-4">{title}</h3>
      <ul className="footer-nav-list space-y-2">
        {links.map((link) => (
          <li key={link.label} className="footer-nav-item">
            <Link href={link.href} className="footer-nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
