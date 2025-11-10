import { Button } from '@/components/ui'

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-bubble-dark mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-bubble-gray max-w-2xl mx-auto">
            Explora nuestra colección de regalos personalizados
          </p>
        </div>

        <div className="text-center py-12">
          <p className="text-bubble-gray mb-6">
            El catálogo de productos estará disponible próximamente.
          </p>
          <p className="text-sm text-bubble-gray">
            Para agregar productos, usa el panel de administración después de configurar Supabase.
          </p>
        </div>
      </div>
    </div>
  )
}
