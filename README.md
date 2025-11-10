# 🎁 Bubble GI - Ecommerce de Regalos Personalizados

![Bubble GI](https://img.shields.io/badge/Bubble%20GI-Encanto%20en%20cada%20burbuja-FF6B9D?style=for-the-badge)

Plataforma de ecommerce moderna y minimalista para regalos personalizados, construida con Next.js 14, TypeScript, Tailwind CSS y Supabase.

## ✨ Características Principales

- 🛍️ **Catálogo de productos** con filtros avanzados
- 🎨 **Personalizador interactivo** para productos
- 🛒 **Carrito de compras** persistente
- 💳 **Pagos integrados** (Stripe + Mercado Pago)
- 📦 **Gestión de pedidos** con tracking
- 👨‍💼 **Panel de administración** completo
- ✉️ **Notificaciones por email** automatizadas
- 📱 **Diseño responsive** mobile-first
- ⚡ **Rendimiento optimizado** con Next.js 14

## 🚀 Stack Tecnológico

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Estilos:** Tailwind CSS
- **Base de datos:** Supabase (PostgreSQL)
- **Autenticación:** Supabase Auth
- **Storage:** Supabase Storage
- **Pagos:** Stripe + Mercado Pago
- **Emails:** Resend
- **Deployment:** Vercel

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- Node.js 18.17 o superior
- npm o yarn
- Git (opcional)

## 🔧 Instalación

### 1. Clonar el repositorio (o descargar el proyecto)

```bash
cd bubble-gi
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Edita `.env.local` y completa las variables de entorno necesarias (ver sección de configuración abajo).

### 4. Configurar Supabase

#### a) Crear un proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta (gratis)
3. Crea un nuevo proyecto
4. Espera a que el proyecto se inicialice (2-3 minutos)

#### b) Obtener las credenciales

1. Ve a **Settings** > **API**
2. Copia la **URL** y la **anon public key**
3. Copia el **service_role key** (¡Mantenla segura!)
4. Pega estos valores en tu `.env.local`

#### c) Ejecutar el schema SQL

1. Ve a **SQL Editor** en tu proyecto de Supabase
2. Crea un nuevo query
3. Copia todo el contenido de `supabase/schema.sql`
4. Ejecuta el query (Run)
5. Verifica que todas las tablas se crearon correctamente en **Table Editor**

#### d) Configurar Storage Buckets

1. Ve a **Storage** en tu proyecto de Supabase
2. Crea los siguientes buckets:
   - `product-images` (público)
   - `customization-uploads` (privado)
   - `design-proofs` (privado)

3. Configura las políticas de acceso:
   - Para `product-images`: permitir lectura pública
   - Para `customization-uploads`: permitir lectura/escritura autenticada
   - Para `design-proofs`: permitir lectura/escritura solo para admins

### 5. Configurar Stripe (Pagos Internacionales)

1. Crea una cuenta en [https://stripe.com](https://stripe.com)
2. Ve a **Developers** > **API keys**
3. Copia la **Publishable key** y **Secret key** (usa las de test)
4. Pega estos valores en tu `.env.local`

### 6. Configurar Mercado Pago (Pagos México)

1. Crea una cuenta en [https://www.mercadopago.com.mx/developers](https://www.mercadopago.com.mx/developers)
2. Ve a **Tus aplicaciones** > **Crear aplicación**
3. Crea una aplicación de tipo "Pagos online"
4. Copia la **Public key** y **Access token** (usa las de test)
5. Pega estos valores en tu `.env.local`

### 7. Configurar Resend (Emails)

1. Crea una cuenta en [https://resend.com](https://resend.com) (100 emails/día gratis)
2. Ve a **API Keys**
3. Crea una nueva API key
4. Pega el valor en tu `.env.local`

### 8. Ejecutar el proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
bubble-gi/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Páginas públicas
│   │   ├── page.tsx              # Homepage
│   │   ├── productos/            # Catálogo
│   │   ├── producto/[slug]/      # Detalle de producto
│   │   ├── carrito/              # Carrito
│   │   ├── checkout/             # Proceso de compra
│   │   └── cuenta/               # Cuenta de usuario
│   ├── admin/                    # Panel de administración
│   │   ├── dashboard/
│   │   ├── productos/
│   │   ├── pedidos/
│   │   └── configuracion/
│   ├── api/                      # API Routes
│   │   ├── stripe/
│   │   ├── mercadopago/
│   │   └── orders/
│   ├── layout.tsx                # Layout principal
│   └── globals.css               # Estilos globales
├── components/
│   ├── ui/                       # Componentes UI base
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   └── Badge.tsx
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── product/                  # Componentes de producto
│   ├── cart/                     # Componentes de carrito
│   └── admin/                    # Componentes de admin
├── lib/
│   ├── supabase/                 # Configuración de Supabase
│   │   ├── client.ts             # Cliente para componentes
│   │   ├── server.ts             # Cliente para servidor
│   │   └── middleware.ts         # Middleware de sesión
│   ├── stripe.ts                 # Configuración de Stripe
│   ├── mercadopago.ts            # Configuración de Mercado Pago
│   └── utils.ts                  # Utilidades
├── types/
│   └── index.ts                  # TypeScript types
├── supabase/
│   └── schema.sql                # Schema de base de datos
├── public/
│   └── images/                   # Imágenes estáticas
├── .env.example                  # Ejemplo de variables de entorno
├── next.config.js                # Configuración de Next.js
├── tailwind.config.ts            # Configuración de Tailwind
└── package.json                  # Dependencias
```

## 🎨 Paleta de Colores

La paleta de colores de Bubble GI está definida en `tailwind.config.ts`:

- **Primary:** `#FF6B9D` (Rosa vibrante)
- **Secondary:** `#FF8FA3` (Coral)
- **Accent:** `#FFB5C5` (Rosa suave)
- **Light:** `#FFE5EC` (Backgrounds)
- **Dark:** `#2D2D2D` (Textos principales)
- **Gray:** `#6B6B6B` (Textos secundarios)
- **Gradient:** `linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 50%, #FFB5C5 100%)`

## 📝 Variables de Entorno

### Requeridas

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Admin Email
ADMIN_EMAIL=admin@bubblegi.com
```

### Opcionales (para producción)

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Mercado Pago
NEXT_PUBLIC_MP_PUBLIC_KEY=TEST-...
MP_ACCESS_TOKEN=TEST-...

# Resend
RESEND_API_KEY=re_...
```

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint
```

## 🗄️ Base de Datos

El schema completo de la base de datos está en `supabase/schema.sql` e incluye:

### Tablas Principales

- **profiles** - Perfiles de usuario
- **categories** - Categorías de productos
- **products** - Productos
- **product_variants** - Variantes de productos (tamaños, colores)
- **product_images** - Imágenes de productos
- **customization_options** - Opciones de personalización
- **orders** - Pedidos
- **order_items** - Items de pedidos
- **customization_uploads** - Archivos subidos por clientes
- **shipping_zones** - Zonas de envío
- **order_status_history** - Historial de cambios de estado

### Características

- ✅ Row Level Security (RLS) habilitado
- ✅ Políticas de seguridad configuradas
- ✅ Triggers para timestamps automáticos
- ✅ Función para generar números de orden
- ✅ Índices para mejor rendimiento
- ✅ Datos de ejemplo (categorías y zonas de envío)

## 🚀 Despliegue en Vercel

### 1. Conectar con Vercel

1. Instala Vercel CLI (opcional):
   ```bash
   npm i -g vercel
   ```

2. O despliega desde el dashboard:
   - Ve a [https://vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

### 2. Configurar Variables de Entorno

En el dashboard de Vercel:
1. Ve a **Settings** > **Environment Variables**
2. Agrega todas las variables de `.env.local`
3. Asegúrate de cambiar `NEXT_PUBLIC_SITE_URL` a tu dominio de producción

### 3. Configurar Webhooks

#### Stripe Webhooks

1. Ve a **Developers** > **Webhooks** en Stripe
2. Agrega un endpoint: `https://tu-dominio.vercel.app/api/stripe/webhook`
3. Selecciona los eventos a escuchar
4. Copia el webhook secret a `STRIPE_WEBHOOK_SECRET`

#### Mercado Pago Webhooks

1. Ve a tu aplicación en Mercado Pago
2. Configura el webhook: `https://tu-dominio.vercel.app/api/mercadopago/webhook`
3. Selecciona los eventos a escuchar

### 4. Configurar Dominio (Opcional)

1. Ve a **Settings** > **Domains**
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## 🔒 Seguridad

- ✅ Row Level Security habilitado en Supabase
- ✅ Validación de datos con Zod
- ✅ Sanitización de inputs
- ✅ Protección CSRF
- ✅ Variables de entorno seguras
- ✅ Autenticación JWT con Supabase
- ✅ HTTPS obligatorio en producción

## 📈 Próximos Pasos

Después de completar la instalación básica:

1. **Agregar productos:** Usa el panel de administración para agregar tus productos
2. **Personalizar imágenes:** Reemplaza las imágenes de categorías en `/public/images/`
3. **Configurar pagos:** Completa la integración de Stripe y Mercado Pago
4. **Probar el flujo:** Realiza una compra de prueba completa
5. **Configurar emails:** Personaliza las plantillas de email
6. **SEO:** Agrega metadata específica para cada producto

## 📚 Documentación Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Mercado Pago Documentation](https://www.mercadopago.com.mx/developers/es/docs)

## 🤝 Soporte

Para problemas o preguntas:

1. Revisa la [documentación](README.md)
2. Verifica las variables de entorno
3. Consulta los logs de Vercel
4. Revisa los logs de Supabase

## 📄 Licencia

Este proyecto es privado y confidencial. Todos los derechos reservados © 2024 Bubble GI.

---

**Bubble GI** - _Encanto en cada burbuja_ 💝
