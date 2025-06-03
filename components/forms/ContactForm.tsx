"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log("Form data:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    alert("Mensagem enviada com sucesso!")
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-6">
      <div className="contact-form-field">
        <Label htmlFor="name" className="contact-form-label">
          Nome
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-form-input"
          required
        />
      </div>

      <div className="contact-form-field grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="contact-form-label">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form-input"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="contact-form-label">
            Telefone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="contact-form-input"
          />
        </div>
      </div>

      <div className="contact-form-field">
        <Label htmlFor="subject" className="contact-form-label">
          Assunto
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="contact-form-input"
          required
        />
      </div>

      <div className="contact-form-field">
        <Label htmlFor="message" className="contact-form-label">
          Mensagem
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form-textarea"
          rows={5}
          required
        />
      </div>

      <Button type="submit" className="contact-form-submit w-full">
        Enviar Mensagem
      </Button>
    </form>
  )
}
