'use client'

import { useState, useRef, ChangeEvent } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui'

interface ProductImageUploadProps {
    onImageSelect: (file: File | null) => void
    label?: string
}

export function ProductImageUpload({ onImageSelect, label = 'Sube tu imagen' }: ProductImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            setPreview(objectUrl)
            onImageSelect(file)
        }
    }

    const handleRemove = () => {
        setPreview(null)
        onImageSelect(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-bubble-dark mb-2">
                {label}
            </label>

            {!preview ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer flex flex-col items-center justify-center text-center"
                >
                    <div className="w-10 h-10 bg-bubble-light rounded-full flex items-center justify-center mb-3">
                        <Upload className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-bubble-dark">
                        Haz clic para subir imagen
                    </p>
                    <p className="text-xs text-bubble-gray mt-1">
                        PNG, JPG o WEBP (Max. 5MB)
                    </p>
                </div>
            ) : (
                <div className="relative rounded-lg overflow-hidden border border-gray-200 aspect-video bg-gray-50 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={preview}
                        alt="Preview"
                        className="max-h-full max-w-full object-contain"
                    />
                    <button
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md text-red-500 hover:bg-red-50"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    )
}
