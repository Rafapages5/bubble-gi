import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'shadow-box',
    name: 'Shadow Box Personalizada',
    description: 'Caja de regalo con flores, diseño único y mensaje personalizado.',
    price: 450,
    image: '/images/products/shadow-box-cartoon.jpg',
    href: '/productos/shadow-box',
    badge: 'Nuevo'
  },
  // Add other products here as they are implemented
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-bubble-dark mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-bubble-gray max-w-2xl mx-auto">
            Explora nuestra colección de regalos personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative aspect-square bg-bubble-light/30">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bubble-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-bubble-gray text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-primary">
                    Desde ${product.price}
                  </span>
                  <Link href={product.href}>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Ver Detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
