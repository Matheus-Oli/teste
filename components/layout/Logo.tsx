import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="logo flex items-center">
      <span className="logo-text text-xl font-bold">TechCompany</span>
    </Link>
  )
}
