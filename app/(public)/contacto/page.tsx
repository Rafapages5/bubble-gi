import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import { Button, Input, Textarea } from '@/components/ui'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-bubble-dark mb-4">
            Contacto
          </h1>
          <p className="text-lg text-bubble-gray max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-bubble-dark mb-6">
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              <Input
                label="Nombre completo"
                placeholder="Tu nombre"
                required
              />
              <Input
                type="email"
                label="Email"
                placeholder="tu@email.com"
                required
              />
              <Input
                type="tel"
                label="Teléfono"
                placeholder="55 1234 5678"
              />
              <Textarea
                label="Mensaje"
                placeholder="¿En qué podemos ayudarte?"
                required
                rows={5}
              />
              <Button fullWidth type="submit">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-bubble-dark mb-6">
              Información de contacto
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-bubble flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-bubble-dark mb-1">
                    Ubicación
                  </h3>
                  <p className="text-bubble-gray">
                    Ciudad de México, México
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-bubble flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-bubble-dark mb-1">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+525512345678"
                    className="text-bubble-gray hover:text-primary transition-colors"
                  >
                    +52 55 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-bubble flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-bubble-dark mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hola@bubblegi.com"
                    className="text-bubble-gray hover:text-primary transition-colors"
                  >
                    hola@bubblegi.com
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-bubble-dark mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/bubblegi_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-bubble flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Instagram className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://facebook.com/bubblegi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-bubble flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 p-6 bg-bubble-light rounded-lg">
              <h3 className="font-semibold text-bubble-dark mb-4">
                Horario de atención
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-bubble-gray">Lunes - Viernes</span>
                  <span className="font-medium text-bubble-dark">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bubble-gray">Sábado</span>
                  <span className="font-medium text-bubble-dark">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bubble-gray">Domingo</span>
                  <span className="font-medium text-bubble-dark">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
