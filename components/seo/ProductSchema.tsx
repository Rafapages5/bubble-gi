
import Script from 'next/script'

interface ProductSchemaProps {
    name: string
    description: string
    image: string | string[]
    price: number
    currency?: string
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
    brand?: string
    sku?: string
    url?: string
}

export function ProductSchema({
    name,
    description,
    image,
    price,
    currency = 'MXN',
    availability = 'InStock',
    brand = 'Bubble GI',
    sku,
    url,
}: ProductSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image: Array.isArray(image) ? image : [image],
        sku: sku,
        brand: {
            '@type': 'Brand',
            name: brand,
        },
        offers: {
            '@type': 'Offer',
            url: url || 'https://bubblegi.com',
            priceCurrency: currency,
            price: price,
            availability: `https://schema.org/${availability}`,
            itemCondition: 'https://schema.org/NewCondition',
        },
    }

    return (
        <Script
            id="product-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
