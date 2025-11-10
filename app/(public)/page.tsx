import Link from 'next/link'
import { Button } from '@/components/ui'
import { Sparkles, Package, Heart, Truck, Shield, Star } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Heart,
      title: 'Personalización Única',
      description: 'Cada regalo se personaliza con amor y atención al detalle',
    },
    {
      icon: Package,
      title: 'Calidad Premium',
      description: 'Materiales de la más alta calidad en todos nuestros productos',
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Opción express disponible para tus pedidos urgentes',
    },
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Pagos 100% seguros con Stripe y Mercado Pago',
    },
  ]

  const categories = [
    {
      name: 'Esferas Gigantes',
      image: '/images/categories/esferas.jpg',
      href: '/productos?categoria=esferas-gigantes',
    },
    {
      name: 'Globos Personalizados',
      image: '/images/categories/globos.jpg',
      href: '/productos?categoria=globos-personalizados',
    },
    {
      name: 'Sudaderas',
      image: '/images/categories/sudaderas.jpg',
      href: '/productos?categoria=sudaderas',
    },
    {
      name: 'Tote Bags',
      image: '/images/categories/tote-bags.jpg',
      href: '/productos?categoria=tote-bags',
    },
    {
      name: 'Tarjetas Navideñas',
      image: '/images/categories/tarjetas.jpg',
      href: '/productos?categoria=tarjetas-navidenas',
    },
    {
      name: 'Arreglos Florales',
      image: '/images/categories/flores.jpg',
      href: '/productos?categoria=arreglos-florales',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-bubble text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <Sparkles className="h-12 w-12 md:h-16 md:w-16" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance">
              Encanto en cada burbuja
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Regalos personalizados que hacen que cada momento sea especial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white"
                asChild
              >
                <Link href="/productos">Ver Productos</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white border-2 border-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/sobre-nosotros">Conoce más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bubble-dark mb-4">
              Explora Nuestras Categorías
            </h2>
            <p className="text-lg text-bubble-gray max-w-2xl mx-auto">
              Encuentra el regalo perfecto para cada ocasión especial
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <div
                  className="absolute inset-0 bg-bubble-light group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Fallback color if image doesn't load */}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-semibold text-lg md:text-xl">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-bubble-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bubble-dark mb-4">
              ¿Por qué elegir Bubble GI?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-bubble text-white mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-bubble-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-bubble-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bubble-dark mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-bubble-gray max-w-2xl mx-auto">
              Los favoritos de nuestros clientes
            </p>
          </div>

          <div className="text-center py-12">
            <p className="text-bubble-gray mb-6">
              Los productos estarán disponibles próximamente
            </p>
            <Button asChild>
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-bubble text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ¿Listo para crear tu regalo único?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Personaliza tus productos favoritos y sorprende a tus seres queridos
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-white/90 border-white"
            asChild
          >
            <Link href="/productos">Comenzar Ahora</Link>
          </Button>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bubble-dark mb-4">
              Síguenos en Instagram
            </h2>
            <p className="text-lg text-bubble-gray mb-6">
              @bubblegi_ - Inspírate con nuestras creaciones
            </p>
            <Button variant="primary" asChild>
              <a
                href="https://instagram.com/bubblegi_"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
