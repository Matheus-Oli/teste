import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  text: string
}

export default function WhatsAppButton({ phoneNumber, text }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <Button asChild className="whatsapp-button" variant="default">
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
        <MessageCircle className="mr-2 h-5 w-5" />
        {text}
      </Link>
    </Button>
  )
}
