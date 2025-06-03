import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empresa de Tecnologia | Desenvolvimento de Software e Sites",
  description:
    "Empresa especializada em desenvolvimento de software e criação de sites com soluções personalizadas para o seu negócio.",
  openGraph: {
    title: "Empresa de Tecnologia | Desenvolvimento de Software e Sites",
    description:
      "Empresa especializada em desenvolvimento de software e criação de sites com soluções personalizadas para o seu negócio.",
    url: "https://seusite.com.br",
    siteName: "Nome da Empresa",
    locale: "pt_BR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
