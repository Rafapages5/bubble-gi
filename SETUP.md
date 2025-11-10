# 🚀 Guía Rápida de Setup - Bubble GI

## ⚡ Setup Rápido (5 minutos)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales (como mínimo necesitas Supabase).

### 3. Ejecutar el proyecto
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 📝 Configuración Mínima Requerida

Para que el proyecto funcione, **necesitas configurar Supabase**:

### Supabase Setup (5 pasos)

1. **Crear cuenta y proyecto**
   - Ve a [supabase.com](https://supabase.com)
   - Crea un proyecto nuevo
   - Espera 2-3 minutos

2. **Obtener credenciales**
   - Settings > API
   - Copia `URL` y `anon public key`
   - Pega en `.env.local`

3. **Crear las tablas**
   - SQL Editor
   - Pega el contenido de `supabase/schema.sql`
   - Ejecuta (Run)

4. **Crear buckets de Storage**
   - Storage > New bucket
   - Crea: `product-images` (público)
   - Crea: `customization-uploads` (privado)
   - Crea: `design-proofs` (privado)

5. **Listo!**
   - Reinicia el servidor: `npm run dev`

---

## 🎨 Próximos Pasos

### Opcional pero Recomendado:

**Para pagos:**
- Stripe: [dashboard.stripe.com](https://dashboard.stripe.com)
- Mercado Pago: [mercadopago.com.mx/developers](https://mercadopago.com.mx/developers)

**Para emails:**
- Resend: [resend.com](https://resend.com)

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint
```

---

## 📁 Estructura Básica

```
bubble-gi/
├── app/              # Páginas y rutas
├── components/       # Componentes React
├── lib/              # Utilidades y config
├── types/            # TypeScript types
├── supabase/         # Schema SQL
└── public/           # Archivos estáticos
```

---

## ❓ Problemas Comunes

### Error: "Supabase client error"
✅ Verifica que las variables de entorno estén correctas en `.env.local`

### Error: "Table does not exist"
✅ Ejecuta el schema SQL en Supabase SQL Editor

### El sitio no carga
✅ Asegúrate de estar en el puerto correcto (3000)
✅ Reinicia el servidor: Ctrl+C y `npm run dev`

---

## 📚 Documentación Completa

Lee [README.md](README.md) para documentación detallada.

---

**¿Listo?** Ejecuta `npm run dev` y visita [localhost:3000](http://localhost:3000)
