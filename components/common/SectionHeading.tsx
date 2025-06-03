interface SectionHeadingProps {
  title: string
  subtitle: string
  description?: string
  alignment?: "left" | "center"
}

export default function SectionHeading({ title, subtitle, description, alignment = "center" }: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${alignment === "center" ? "text-center" : "text-left"} max-w-3xl ${alignment === "center" ? "mx-auto" : ""}`}
    >
      <h2 className="section-heading-subtitle text-sm uppercase tracking-wider mb-2">{subtitle}</h2>
      <h2 className="section-heading-title text-3xl md:text-4xl font-bold">{title}</h2>
      {description && <p className="section-heading-description mt-4 text-lg">{description}</p>}
    </div>
  )
}
