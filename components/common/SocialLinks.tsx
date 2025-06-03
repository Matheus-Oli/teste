import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

interface SocialLinksProps {
  className?: string
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  ]

  return (
    <div className={`social-links flex gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <Icon className="social-icon h-5 w-5" />
          </Link>
        )
      })}
    </div>
  )
}
