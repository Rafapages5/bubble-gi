// Bubble GI - TypeScript Types

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// =====================================================
// DATABASE TYPES
// =====================================================

export interface Database {
  public: {
    Tables: {
      profiles: Profile
      categories: Category
      products: Product
      product_variants: ProductVariant
      product_images: ProductImage
      customization_options: CustomizationOption
      orders: Order
      order_items: OrderItem
      customization_uploads: CustomizationUpload
      shipping_zones: ShippingZone
      order_status_history: OrderStatusHistory
    }
  }
}

// =====================================================
// USER & PROFILE
// =====================================================

export interface Profile {
  id: string
  full_name: string | null
  phone: string | null
  created_at: string
  updated_at: string
}

// =====================================================
// CATEGORIES
// =====================================================

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  display_order: number
  active: boolean
  created_at: string
  updated_at: string
}

// =====================================================
// PRODUCTS
// =====================================================

export type ProductStatus = 'active' | 'inactive' | 'out_of_stock'

export interface Product {
  id: string
  category_id: string | null
  name: string
  slug: string
  description: string | null
  base_price: number
  featured: boolean
  is_express_available: boolean
  production_days: number
  express_days: number
  express_extra_cost: number
  status: ProductStatus
  created_at: string
  updated_at: string
}

export interface ProductWithDetails extends Product {
  category?: Category
  variants: ProductVariant[]
  images: ProductImage[]
  customization_options: CustomizationOption[]
}

// =====================================================
// PRODUCT VARIANTS
// =====================================================

export interface ProductVariant {
  id: string
  product_id: string
  name: string
  size: string | null
  color: string | null
  price_adjustment: number
  sku: string | null
  stock: number | null
  active: boolean
  created_at: string
  updated_at: string
}

// =====================================================
// PRODUCT IMAGES
// =====================================================

export interface ProductImage {
  id: string
  product_id: string
  variant_id: string | null
  image_url: string
  position: number
  alt_text: string | null
  created_at: string
}

// =====================================================
// CUSTOMIZATION
// =====================================================

export type CustomizationType = 'text' | 'image' | 'color' | 'select'

export interface CustomizationOption {
  id: string
  product_id: string
  type: CustomizationType
  label: string
  required: boolean
  max_characters: number | null
  instructions: string | null
  options: Json | null
  created_at: string
}

export interface CustomizationData {
  option_id: string
  type: CustomizationType
  label: string
  value: string | string[] // text/color or image URLs
}

export interface CustomizationUpload {
  id: string
  order_item_id: string
  file_url: string
  file_type: 'image' | 'document'
  uploaded_at: string
}

// =====================================================
// ORDERS
// =====================================================

export type OrderStatus =
  | 'pending_payment'
  | 'paid'
  | 'design_pending'
  | 'design_approved'
  | 'in_production'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentMethod = 'stripe' | 'mercadopago' | 'cash'

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'

export interface ShippingAddress {
  street: string
  number: string
  colony: string
  city: string
  state: string
  postal_code: string
  country: string
  references?: string
}

export interface Order {
  id: string
  user_id: string | null
  order_number: string
  status: OrderStatus
  subtotal: number
  shipping_cost: number
  total: number
  payment_method: PaymentMethod | null
  payment_status: PaymentStatus
  payment_id: string | null
  is_express: boolean
  estimated_delivery_date: string | null
  tracking_number: string | null
  customer_name: string
  customer_email: string
  customer_phone: string
  shipping_address: ShippingAddress
  admin_notes: string | null
  created_at: string
  updated_at: string
}

export interface OrderWithItems extends Order {
  items: OrderItemWithProduct[]
}

// =====================================================
// ORDER ITEMS
// =====================================================

export type DesignStatus = 'pending' | 'approved' | 'rejected'

export interface OrderItem {
  id: string
  order_id: string
  product_id: string | null
  variant_id: string | null
  product_snapshot: Json
  quantity: number
  unit_price: number
  customization_data: CustomizationData[] | null
  design_status: DesignStatus
  design_notes: string | null
  created_at: string
}

export interface OrderItemWithProduct extends OrderItem {
  product?: ProductWithDetails
  variant?: ProductVariant
  uploads: CustomizationUpload[]
}

// =====================================================
// SHIPPING
// =====================================================

export interface ShippingZone {
  id: string
  name: string
  description: string | null
  cost: number
  estimated_days: number
  active: boolean
  created_at: string
  updated_at: string
}

// =====================================================
// ORDER STATUS HISTORY
// =====================================================

export interface OrderStatusHistory {
  id: string
  order_id: string
  status: OrderStatus
  notes: string | null
  changed_by: string | null
  created_at: string
}

// =====================================================
// CART (Frontend Only - Not in DB until checkout)
// =====================================================

export interface CartItem {
  product: ProductWithDetails
  variant?: ProductVariant
  quantity: number
  customization: CustomizationData[]
  is_express: boolean
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping_cost: number
  total: number
}

// =====================================================
// FORMS & UI
// =====================================================

export interface CheckoutFormData {
  // Step 1: Customer Info
  customer_name: string
  customer_email: string
  customer_phone: string

  // Step 2: Shipping
  shipping_address: ShippingAddress
  shipping_zone_id: string

  // Step 3: Payment
  payment_method: PaymentMethod
  is_express: boolean
}

export interface ProductFilters {
  category?: string
  min_price?: number
  max_price?: number
  search?: string
  featured?: boolean
  sort?: 'price_asc' | 'price_desc' | 'name' | 'newest'
}

// =====================================================
// ADMIN
// =====================================================

export interface DashboardStats {
  total_orders: number
  pending_designs: number
  in_production: number
  total_revenue: number
  new_orders_today: number
}

export interface AdminProductForm {
  category_id: string
  name: string
  slug: string
  description: string
  base_price: number
  featured: boolean
  is_express_available: boolean
  production_days: number
  express_days: number
  express_extra_cost: number
  status: ProductStatus
}

export interface AdminVariantForm {
  product_id: string
  name: string
  size?: string
  color?: string
  price_adjustment: number
  sku?: string
  stock?: number
}

// =====================================================
// API RESPONSES
// =====================================================

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  per_page: number
  total_pages: number
}

// =====================================================
// PAYMENT TYPES
// =====================================================

export interface StripePaymentIntent {
  client_secret: string
  payment_intent_id: string
}

export interface MercadoPagoPreference {
  id: string
  init_point: string
  sandbox_init_point?: string
}

// =====================================================
// NOTIFICATION TYPES
// =====================================================

export interface EmailNotification {
  to: string
  subject: string
  html: string
  text?: string
}

export type NotificationType =
  | 'order_confirmation'
  | 'design_approved'
  | 'design_rejected'
  | 'order_shipped'
  | 'order_delivered'
  | 'new_order_admin'

export interface NotificationData {
  type: NotificationType
  order: Order
  recipient: string
  data?: Record<string, any>
}
