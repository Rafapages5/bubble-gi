'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X, Heart, User, Search } from 'lucide-react'
import { Button } from '@/components/ui'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Categorías', href: '/categorias' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-bubble rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-bubble-dark">
                Bubble GI
              </span>
              <span className="text-xs text-bubble-gray -mt-1">
                Encanto en cada burbuja
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-bubble-dark hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <button className="hidden md:flex p-2 text-bubble-gray hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <button className="hidden md:flex p-2 text-bubble-gray hover:text-primary transition-colors relative">
              <Heart className="h-5 w-5" />
            </button>

            {/* User Account */}
            <Link
              href="/cuenta"
              className="hidden md:flex p-2 text-bubble-gray hover:text-primary transition-colors"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/carrito"
              className="p-2 text-bubble-gray hover:text-primary transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-bubble-gray hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-bubble-dark hover:bg-bubble-light hover:text-primary rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
              <Link
                href="/cuenta"
                className="flex items-center px-3 py-2 text-bubble-dark hover:bg-bubble-light hover:text-primary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-2" />
                Mi Cuenta
              </Link>
              <button className="flex items-center px-3 py-2 text-bubble-dark hover:bg-bubble-light hover:text-primary rounded-lg transition-colors text-left">
                <Search className="h-5 w-5 mr-2" />
                Buscar productos
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
