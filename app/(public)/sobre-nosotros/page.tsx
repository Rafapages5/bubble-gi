import { Heart, Sparkles, Users, Award } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión por los Detalles',
      description: 'Cada producto es creado con amor y dedicación',
    },
    {
      icon: Sparkles,
      title: 'Creatividad Única',
      description: 'Diseños originales que hacen la diferencia',
    },
    {
      icon: Users,
      title: 'Enfoque en el Cliente',
      description: 'Tu satisfacción es nuestra prioridad',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Solo trabajamos con los mejores materiales',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-bubble text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Sobre Bubble GI
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Creando momentos especiales desde el corazón
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold text-bubble-dark mb-6">
              Nuestra Historia
            </h2>
            <p className="text-bubble-gray mb-4">
              Bubble GI nació de la pasión por crear regalos únicos y personalizados
              que transmiten emociones y celebran momentos especiales. Cada producto
              que diseñamos lleva consigo la esencia de hacer feliz a alguien especial.
            </p>
            <p className="text-bubble-gray mb-4">
              Nos especializamos en regalos personalizados de alta calidad, desde
              esferas gigantes hasta arreglos florales, siempre con ese toque especial
              que solo Bubble GI puede ofrecer.
            </p>
            <p className="text-bubble-gray">
              Nuestro compromiso es simple: crear productos que no solo sean hermosos,
              sino que también cuenten una historia y transmitan el amor de quien los regala.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-bubble-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-bubble-dark text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-bubble text-white mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-bubble-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-bubble-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-bubble-dark mb-6">
            Nuestra Misión
          </h2>
          <p className="text-xl text-bubble-gray mb-8">
            Hacer que cada momento especial sea inolvidable a través de regalos
            personalizados de la más alta calidad, diseñados con pasión y entregados
            con amor.
          </p>
        </div>
      </section>
    </div>
  )
}
