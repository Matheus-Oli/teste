import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
}

export default function ProjectCard({ title, category, description, image }: ProjectCardProps) {
  return (
    <div className="project-card overflow-hidden rounded-lg border border-gray-100 bg-white">
      <div className="project-card-image relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="project-card-content p-6">
        <div className="project-card-category text-sm mb-2">{category}</div>
        <h3 className="project-card-title text-xl font-semibold mb-3">{title}</h3>
        <p className="project-card-description mb-4">{description}</p>
        <Link
          href={`/portfolio/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="project-card-link inline-flex items-center text-sm font-medium"
        >
          Ver Detalhes
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
