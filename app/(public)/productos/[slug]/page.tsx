import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createServerClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui'

/* eslint-disable @next/next/no-img-element */

interface ProductPageProps {
    params: {
        slug: string
    }
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const supabase = createServerClient()
    const { data: product } = await supabase
        .from('products')
        .select('name, description, image_url:product_images(image_url)')
        .eq('slug', params.slug)
        .single()

    if (!product) {
        return {
            title: 'Producto no encontrado',
        }
    }

    const mainImage = Array.isArray(product.image_url) && product.image_url.length > 0
        ? product.image_url[0].image_url
        : '/images/placeholder.jpg'

    return {
        title: `${product.name} | Bubble GI`,
        description: product.description || `Compra ${product.name} en Bubble GI.`,
        openGraph: {
            images: [mainImage],
        },
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const supabase = createServerClient()

    // Fetch product with images and variants
    const { data: product } = await supabase
        .from('products')
        .select(`
      *,
      images:product_images(*),
      variants:product_variants(*)
    `)
        .eq('slug', params.slug)
        .eq('status', 'active')
        .single()

    if (!product) {
        notFound()
    }

    // Schema.org Data
    const mainImage = product.images && product.images.length > 0
        ? product.images[0].image_url
        : 'https://bubblegi.com/images/placeholder.jpg'

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: mainImage,
        description: product.description,
        sku: product.id,
        offers: {
            '@type': 'Offer',
            price: product.base_price,
            priceCurrency: 'MXN',
            availability: 'https://schema.org/InStock',
            url: `https://bubblegi.com/productos/${product.slug}`,
        },
    }

    return (
        <div className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image Gallery */}
                    <div className="flex flex-col">
                        <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3">
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-heading font-bold tracking-tight text-bubble-dark">{product.name}</h1>

                        <div className="mt-3">
                            <p className="text-3xl tracking-tight text-bubble-dark">${product.base_price.toFixed(2)} MXN</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Descripción</h3>
                            <div className="text-base text-gray-700 space-y-6">
                                <p>{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button size="lg" className="w-full">
                                Agregar al Carrito
                            </Button>
                            <p className="mt-4 text-sm text-gray-500 text-center">
                                Tiempo de producción estimado: {product.production_days} días hábiles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
