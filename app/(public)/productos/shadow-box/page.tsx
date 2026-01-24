'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star, Truck, Shield, Check } from 'lucide-react'
import { Button } from '@/components/ui'
import { ProductSchema } from '@/components/seo/ProductSchema'
import { ProductImageUpload } from '@/components/product/ProductImageUpload'

export default function ShadowBoxPage() {
    // State for customization
    const [design, setDesign] = useState('cartoon')
    const [size, setSize] = useState('med')
    const [color, setColor] = useState('lime-green')
    const [phrase, setPhrase] = useState('')
    const [uploadedImage, setUploadedImage] = useState<File | null>(null)

    // Active Image State for Gallery
    const [activeImage, setActiveImage] = useState<string>('')

    // Reset active image when design changes
    useEffect(() => {
        const images = designGallery[design]
        if (images && images.length > 0) {
            setActiveImage(images[0])
        } else {
            setActiveImage('') // Fallback or empty
        }
    }, [design])

    // Prices
    const basePriceMed = 450
    const basePriceLarge = 650
    const currentPrice = size === 'med' ? basePriceMed : basePriceLarge

    // Options
    const designs = [
        { id: 'cartoon', label: 'Cartoon' },
        { id: 'music-art', label: 'Music Art' },
        { id: 'baby-birth', label: 'Baby Birth' },
        { id: 'album', label: 'Album' },
        { id: 'graduate', label: 'Graduate' },
    ]

    // Design Image Mapping
    // Design Image Mapping
    const designGallery: Record<string, string[]> = {
        cartoon: [
            '/images/products/shadow-box-cartoon.jpg',
            '/images/products/shadow-box-cartoon-detail-1.jpg',
            '/images/products/shadow-box-cartoon-detail-2.jpg',
        ],
        'music-art': [
            '/images/products/shadow-box-music-art.jpg',
            '/images/products/shadow-box-music-art-detail-1.jpg',
            '/images/products/shadow-box-music-art-detail-2.jpg',
            '/images/products/shadow-box-music-art-detail-3.jpg',
        ],
        'baby-birth': [
            '/images/products/shadow-box-baby-birth.jpg',
            '/images/products/shadow-box-baby-birth-detail-2.jpg',
            '/images/products/shadow-box-baby-birth-detail-3.jpg',
        ],
        album: [
            '/images/products/shadow-box-album.jpg',
            '/images/products/shadow-box-album-detail-2.jpg',
        ],
        graduate: [
            '/images/products/shadow-box-graduate.jpg',
            '/images/products/shadow-box-graduate-detail-4.jpg',
            '/images/products/shadow-box-graduate-detail-1.jpg',
            '/images/products/shadow-box-graduate-detail-2.jpg',
        ],
    }

    const sizes = [
        { id: 'med', label: 'Mediana (20cm x 25cm)', price: basePriceMed },
        { id: 'gde', label: 'Grande (31cm x 41cm)', price: basePriceLarge },
    ]

    const colors = [
        //NegroBlanco
        { id: 'blanco', label: 'Blanco', hex: '#ffff' },
        { id: 'negro', label: 'Negro', hex: '#000000' },
        // Greens
        { id: 'green-pastel', label: 'Verde pastel', hex: '#95f095fe' },
        { id: 'green-neon', label: 'Verde Fosfo', hex: '#97ff0eff' },
        { id: 'green-raw', label: 'Amarillo Crudo', hex: '#e2ff62af' },
        { id: 'lime-green', label: 'Verde Rex', hex: '#13d34ce2' },
        { id: 'grass-green', label: 'Verde Lima', hex: '#c3ed83ff' },
        { id: 'forest-green', label: 'Verde Bosque', hex: '#0f602dff' },
        // Yellows/Oranges
        { id: 'yellow', label: 'Naranja claro', hex: '#FACC15' },
        { id: 'red-orange', label: 'Naranja', hex: '#F97316' },
        { id: 'red', label: 'Rojo', hex: '#EF4444' },
        // Pinks
        { id: 'peach', label: 'Coral', hex: '#FDBA74' },
        { id: 'pink-pastel', label: 'Rosa pastel', hex: '#f25a9c9b' },
        { id: 'pink', label: 'Fucsia', hex: '#f25a9c' },
        // Blues
        { id: 'sky-blue', label: 'Azul Cielo', hex: '#83dcf8ff' },
        { id: 'royal-blue', label: 'Azul Turquesa', hex: '#0387dada' },
        // Purples
        { id: 'lavender', label: 'Lila', hex: '#C084FC' },
        { id: 'purple', label: 'Morado', hex: '#7E22CE' },
    ]

    const handleAddToCart = () => {
        // Mock functionality
        alert(`Agregado al carrito: Shadow Box ${size.toUpperCase()} - ${design} - $${currentPrice}`)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            {/* JSON-LD Schema */}
            <ProductSchema
                name="Shadow Box Personalizada"
                description="Caja de regalo personalizada Shadow Box con flores y diseño único. Perfecta para cualquier ocasión especial."
                image="https://bubblegi.com/images/products/shadow-box-placeholder.jpg" // Placeholder for now
                price={currentPrice}
                url="https://bubblegi.com/productos/shadow-box"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-bubble-gray mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/productos" className="hover:text-primary transition-colors">Productos</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="text-bubble-dark font-medium">Shadow Box</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group">
                            {/* Product Image */}
                            {activeImage ? (
                                <Image
                                    src={activeImage}
                                    alt={`Shadow Box ${design}`}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 bg-bubble-light flex items-center justify-center text-bubble-gray">
                                    <span className="text-lg">Imagen del Producto ({design})</span>
                                </div>
                            )}
                        </div>
                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {designGallery[design]?.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveImage(img)}
                                    className={`aspect-square bg-white rounded-lg shadow-sm border overflow-hidden cursor-pointer transition-colors relative ${activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-gray-100 hover:border-primary'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Key Info & Customization */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h1 className="text-3xl font-heading font-bold text-bubble-dark mb-2">
                            Shadow Box Personalizada
                        </h1>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm text-bubble-gray">(Nuevo Producto)</span>
                        </div>

                        <div className="text-3xl font-bold text-primary mb-6">
                            ${currentPrice.toFixed(2)} <span className="text-sm font-normal text-bubble-gray">MXN</span>
                        </div>

                        <div className="space-y-6">
                            {/* 1. Design */}
                            <div>
                                <label className="block text-sm font-medium text-bubble-dark mb-2">
                                    1. Elige tu Diseño
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {designs.map((d) => (
                                        <button
                                            key={d.id}
                                            onClick={() => setDesign(d.id)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${design === d.id
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-gray-100 text-bubble-dark hover:bg-gray-200'
                                                }`}
                                        >
                                            {d.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 2. Size */}
                            <div>
                                <label className="block text-sm font-medium text-bubble-dark mb-2">
                                    2. Elige el Tamaño
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {sizes.map((s) => (
                                        <div
                                            key={s.id}
                                            onClick={() => setSize(s.id)}
                                            className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col justify-center transition-all ${size === s.id
                                                ? 'border-primary bg-bubble-light/20'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-medium text-bubble-dark">{s.label}</span>
                                                {size === s.id && <Check className="h-4 w-4 text-primary" />}
                                            </div>
                                            <span className="text-primary font-bold">${s.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Flower Color */}
                            <div>
                                <label className="block text-sm font-medium text-bubble-dark mb-2">
                                    3. Color de las Flores
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {colors.map((c) => (
                                        <button
                                            key={c.id}
                                            onClick={() => setColor(c.id)}
                                            className={`w-10 h-10 rounded-full border-2 transition-all ${color === c.id ? 'border-primary scale-110 shadow-sm' : 'border-gray-200 hover:scale-105'
                                                }`}
                                            style={{ backgroundColor: c.hex }}
                                            title={c.label}
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 text-sm text-bubble-gray">
                                    Seleccionado: <span className="font-medium text-bubble-dark">{colors.find(c => c.id === color)?.label}</span>
                                </p>
                            </div>

                            {/* 4. Phrase */}
                            <div>
                                <label className="block text-sm font-medium text-bubble-dark mb-2">
                                    4. Frase Personalizada
                                </label>
                                <input
                                    type="text"
                                    value={phrase}
                                    onChange={(e) => setPhrase(e.target.value)}
                                    placeholder="Escribe la frase para tu caja..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    maxLength={50}
                                />
                                <p className="text-xs text-right text-bubble-gray mt-1">
                                    {phrase.length}/50 caracteres
                                </p>
                            </div>

                            {/* 5. Image Upload */}
                            <div>
                                <ProductImageUpload
                                    label="5. Sube tu imagen (Opcional)"
                                    onImageSelect={setUploadedImage}
                                />
                            </div>

                            {/* Action */}
                            <div className="pt-6 border-t border-gray-100">
                                <Button
                                    onClick={handleAddToCart}
                                    className="w-full h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                                >
                                    Agregar al Carrito - ${currentPrice}
                                </Button>
                                <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-bubble-gray">
                                    <div className="flex items-center">
                                        <Truck className="h-4 w-4 mr-1" />
                                        Envío Nacional
                                    </div>
                                    <div className="flex items-center">
                                        <Shield className="h-4 w-4 mr-1" />
                                        Pago Seguro
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
