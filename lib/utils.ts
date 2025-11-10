import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price in Mexican pesos
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(amount)
}

/**
 * Format date in Spanish
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'long',
  }).format(new Date(date))
}

/**
 * Generate slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Calculate estimated delivery date
 */
export function calculateDeliveryDate(
  productionDays: number,
  isExpress: boolean = false,
  expressDays?: number
): Date {
  const days = isExpress && expressDays ? expressDays : productionDays
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + days)
  return deliveryDate
}

/**
 * Validate Mexican phone number
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+?52)?[\s-]?(\d{10})$/
  return phoneRegex.test(phone)
}

/**
 * Format phone number
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

/**
 * Truncate text
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Get order status color
 */
export function getOrderStatusColor(
  status: string
): 'default' | 'info' | 'success' | 'warning' | 'error' {
  const statusColors: Record<string, 'default' | 'info' | 'success' | 'warning' | 'error'> = {
    pending_payment: 'warning',
    paid: 'info',
    design_pending: 'warning',
    design_approved: 'info',
    in_production: 'info',
    shipped: 'success',
    delivered: 'success',
    cancelled: 'error',
    refunded: 'error',
  }
  return statusColors[status] || 'default'
}

/**
 * Get order status label in Spanish
 */
export function getOrderStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending_payment: 'Pago Pendiente',
    paid: 'Pagado',
    design_pending: 'Diseño Pendiente',
    design_approved: 'Diseño Aprobado',
    in_production: 'En Producción',
    shipped: 'Enviado',
    delivered: 'Entregado',
    cancelled: 'Cancelado',
    refunded: 'Reembolsado',
  }
  return labels[status] || status
}

/**
 * File size formatter
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * Sleep utility for delays
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
