-- Bubble GI Database Schema
-- Supabase PostgreSQL Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- PROFILES TABLE (extends Supabase Auth)
-- =====================================================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- =====================================================
-- CATEGORIES TABLE
-- =====================================================
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active categories"
  ON categories FOR SELECT
  USING (active = true);

-- =====================================================
-- PRODUCTS TABLE
-- =====================================================
CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  base_price DECIMAL(10, 2) NOT NULL,
  featured BOOLEAN DEFAULT false,
  is_express_available BOOLEAN DEFAULT false,
  production_days INTEGER DEFAULT 5,
  express_days INTEGER DEFAULT 2,
  express_extra_cost DECIMAL(10, 2) DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'out_of_stock')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active products"
  ON products FOR SELECT
  USING (status = 'active');

-- Index for better performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_featured ON products(featured) WHERE featured = true;
CREATE INDEX idx_products_slug ON products(slug);

-- =====================================================
-- PRODUCT VARIANTS TABLE
-- =====================================================
CREATE TABLE product_variants (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  size TEXT,
  color TEXT,
  price_adjustment DECIMAL(10, 2) DEFAULT 0,
  sku TEXT UNIQUE,
  stock INTEGER,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active product variants"
  ON product_variants FOR SELECT
  USING (active = true);

CREATE INDEX idx_variants_product ON product_variants(product_id);

-- =====================================================
-- PRODUCT IMAGES TABLE
-- =====================================================
CREATE TABLE product_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  variant_id UUID REFERENCES product_variants(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  position INTEGER DEFAULT 0,
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view product images"
  ON product_images FOR SELECT
  USING (true);

CREATE INDEX idx_images_product ON product_images(product_id);

-- =====================================================
-- CUSTOMIZATION OPTIONS TABLE
-- =====================================================
CREATE TABLE customization_options (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('text', 'image', 'color', 'select')),
  label TEXT NOT NULL,
  required BOOLEAN DEFAULT false,
  max_characters INTEGER,
  instructions TEXT,
  options JSONB, -- For select type options
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE customization_options ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view customization options"
  ON customization_options FOR SELECT
  USING (true);

CREATE INDEX idx_customization_product ON customization_options(product_id);

-- =====================================================
-- ORDERS TABLE
-- =====================================================
CREATE TABLE orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  order_number TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'pending_payment' CHECK (
    status IN (
      'pending_payment',
      'paid',
      'design_pending',
      'design_approved',
      'in_production',
      'shipped',
      'delivered',
      'cancelled',
      'refunded'
    )
  ),
  subtotal DECIMAL(10, 2) NOT NULL,
  shipping_cost DECIMAL(10, 2) DEFAULT 0,
  total DECIMAL(10, 2) NOT NULL,
  payment_method TEXT CHECK (payment_method IN ('stripe', 'mercadopago', 'cash')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_id TEXT,
  is_express BOOLEAN DEFAULT false,
  estimated_delivery_date DATE,
  tracking_number TEXT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_number ON orders(order_number);
CREATE INDEX idx_orders_email ON orders(customer_email);

-- =====================================================
-- ORDER ITEMS TABLE
-- =====================================================
CREATE TABLE order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  variant_id UUID REFERENCES product_variants(id) ON DELETE SET NULL,
  product_snapshot JSONB NOT NULL, -- Store product details at time of order
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price DECIMAL(10, 2) NOT NULL,
  customization_data JSONB,
  design_status TEXT DEFAULT 'pending' CHECK (design_status IN ('pending', 'approved', 'rejected')),
  design_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their order items"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND (orders.user_id = auth.uid() OR orders.user_id IS NULL)
    )
  );

CREATE INDEX idx_order_items_order ON order_items(order_id);

-- =====================================================
-- CUSTOMIZATION UPLOADS TABLE
-- =====================================================
CREATE TABLE customization_uploads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_item_id UUID REFERENCES order_items(id) ON DELETE CASCADE NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL CHECK (file_type IN ('image', 'document')),
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE customization_uploads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their customization uploads"
  ON customization_uploads FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM order_items
      JOIN orders ON orders.id = order_items.order_id
      WHERE order_items.id = customization_uploads.order_item_id
      AND (orders.user_id = auth.uid() OR orders.user_id IS NULL)
    )
  );

CREATE INDEX idx_uploads_order_item ON customization_uploads(order_item_id);

-- =====================================================
-- SHIPPING ZONES TABLE
-- =====================================================
CREATE TABLE shipping_zones (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  cost DECIMAL(10, 2) NOT NULL,
  estimated_days INTEGER DEFAULT 3,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE shipping_zones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active shipping zones"
  ON shipping_zones FOR SELECT
  USING (active = true);

-- =====================================================
-- ORDER STATUS HISTORY (for tracking changes)
-- =====================================================
CREATE TABLE order_status_history (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL,
  notes TEXT,
  changed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

ALTER TABLE order_status_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their order status history"
  ON order_status_history FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_status_history.order_id
      AND (orders.user_id = auth.uid() OR orders.user_id IS NULL)
    )
  );

CREATE INDEX idx_status_history_order ON order_status_history(order_id);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_product_variants_updated_at BEFORE UPDATE ON product_variants
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_shipping_zones_updated_at BEFORE UPDATE ON shipping_zones
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to generate order number
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TEXT AS $$
DECLARE
  new_number TEXT;
  year TEXT;
  counter INTEGER;
BEGIN
  year := TO_CHAR(NOW(), 'YYYY');

  SELECT COUNT(*) + 1 INTO counter
  FROM orders
  WHERE order_number LIKE 'BG-' || year || '-%';

  new_number := 'BG-' || year || '-' || LPAD(counter::TEXT, 4, '0');

  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-generate order number
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
    NEW.order_number := generate_order_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_order_number_trigger BEFORE INSERT ON orders
  FOR EACH ROW EXECUTE FUNCTION set_order_number();

-- Trigger to log order status changes
CREATE OR REPLACE FUNCTION log_order_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO order_status_history (order_id, status, changed_by)
    VALUES (NEW.id, NEW.status, auth.uid());
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER log_order_status_change_trigger AFTER UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION log_order_status_change();

-- =====================================================
-- SEED DATA (Sample categories)
-- =====================================================
INSERT INTO categories (name, slug, description, display_order) VALUES
  ('Esferas Gigantes', 'esferas-gigantes', 'Esferas personalizadas para ocasiones especiales', 1),
  ('Globos Personalizados', 'globos-personalizados', 'Globos con diseños únicos', 2),
  ('Tarjetas Navideñas', 'tarjetas-navidenas', 'Tarjetas personalizadas para Navidad', 3),
  ('Sudaderas', 'sudaderas', 'Sudaderas con diseños personalizados', 4),
  ('Tote Bags', 'tote-bags', 'Bolsas reutilizables personalizadas', 5),
  ('Arreglos Florales', 'arreglos-florales', 'Flores frescas con toques personalizados', 6);

-- Default shipping zone
INSERT INTO shipping_zones (name, description, cost, estimated_days) VALUES
  ('Local - Ciudad de México', 'Entrega local en la Ciudad de México', 100.00, 2),
  ('Nacional - Estado de México', 'Entrega en el Estado de México', 150.00, 3),
  ('Nacional - Interior', 'Entrega en el interior de la República', 250.00, 5);

-- =====================================================
-- STORAGE BUCKETS (Run this in Supabase Dashboard)
-- =====================================================
-- You'll need to create these buckets manually in Supabase:
-- 1. 'product-images' (public) - for product catalog images
-- 2. 'customization-uploads' (private) - for customer uploads
-- 3. 'design-proofs' (private) - for admin design approvals

-- Storage policies example (run in Supabase Dashboard):
-- CREATE POLICY "Public product images"
--   ON storage.objects FOR SELECT
--   USING (bucket_id = 'product-images');
--
-- CREATE POLICY "Authenticated users can upload customizations"
--   ON storage.objects FOR INSERT
--   WITH CHECK (bucket_id = 'customization-uploads' AND auth.role() = 'authenticated');
