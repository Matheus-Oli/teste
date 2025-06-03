import { Code, Smartphone, LayoutDashboard, Palette, Lightbulb, LifeBuoy, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Code":
        return Code
      case "Smartphone":
        return Smartphone
      case "LayoutDashboard":
        return LayoutDashboard
      case "Palette":
        return Palette
      case "Lightbulb":
        return Lightbulb
      case "LifeBuoy":
        return LifeBuoy
      default:
        return Code
    }
  }

  const IconComponent = getIcon()

  return (
    <div className="service-card p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="service-card-icon mb-4">
        <IconComponent className="service-card-icon-svg h-10 w-10" />
      </div>
      <h3 className="service-card-title text-xl font-semibold mb-3">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  )
}
