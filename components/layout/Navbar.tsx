'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X, Heart, User, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const navigation = [
    { name: 'Inicio', href: '/' },
    {
      name: 'Productos',
      href: '/productos',
      submenu: [
        { name: 'Shadow Box', href: '/productos/shadow-box' },
        { name: 'Globos burbuja', href: '/productos/globos-burbuja' },
        { name: 'Burbujas florales', href: '/productos/burbujas-florales' },
        { name: 'Vasos', href: '/productos/vasos' },
        { name: 'Tazas', href: '/productos/tazas' },
        { name: 'Tote Bags', href: '/productos/tote-bags' },
        { name: 'Sudaderas', href: '/productos/sudaderas' },
        { name: 'Joyeros de viaje', href: '/productos/joyeros-de-viaje' },
      ]
    },
    { name: 'Categorías', href: '/categorias' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(name)
    }
  }

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
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-bubble-dark hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-bubble-gray hover:text-primary hover:bg-bubble-light/30 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
        <div className="md:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-bubble-dark hover:bg-bubble-light hover:text-primary rounded-lg transition-colors font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {activeSubmenu === item.name && (
                      <div className="ml-4 space-y-1 mt-1 border-l-2 border-bubble-light pl-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-3 py-2 text-sm text-bubble-gray hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-bubble-dark hover:bg-bubble-light hover:text-primary rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
