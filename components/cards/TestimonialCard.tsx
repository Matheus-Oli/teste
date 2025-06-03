import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  quote: string
  image: string
}

export default function TestimonialCard({ name, company, quote, image }: TestimonialCardProps) {
  return (
    <div className="testimonial-card p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="testimonial-card-quote-icon mb-4">
        <Quote className="testimonial-card-quote-svg h-6 w-6" />
      </div>
      <p className="testimonial-card-quote mb-6">{quote}</p>
      <div className="testimonial-card-author flex items-center">
        <div className="testimonial-card-author-image relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="testimonial-card-author-info ml-3">
          <h4 className="testimonial-card-author-name font-medium">{name}</h4>
          <p className="testimonial-card-author-company text-sm">{company}</p>
        </div>
      </div>
    </div>
  )
}
