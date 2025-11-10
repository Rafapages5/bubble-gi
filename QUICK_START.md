# ⚡ Quick Start - Bubble GI

Guía ultra-rápida para poner en marcha el proyecto en 5 minutos.

---

## 🚀 3 Comandos para Empezar

```bash
# 1. Instalar
npm install

# 2. Configurar
cp .env.example .env.local
# (Edita .env.local con tus credenciales de Supabase)

# 3. Ejecutar
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 📝 ¿Qué Necesitas?

### Mínimo Requerido:
- ✅ Node.js 18+
- ✅ Cuenta de Supabase (gratis)

### Opcional (para más adelante):
- ⏳ Cuenta de Stripe
- ⏳ Cuenta de Mercado Pago
- ⏳ Cuenta de Resend

---

## 🎯 Setup de Supabase (5 min)

### 1. Crear Proyecto
- Ve a [supabase.com](https://supabase.com) → Sign Up
- "New Project" → Elige nombre y password
- Espera 2 min mientras se crea

### 2. Obtener Credenciales
- Settings → API
- Copia 3 valores:
  - `URL`
  - `anon public key`
  - `service_role key`
- Pega en `.env.local`

### 3. Crear Tablas
- SQL Editor → New Query
- Copia TODO de `supabase/schema.sql`
- Run (▶️)

### 4. Storage
- Storage → New Bucket
- Crea: `product-images` (público)
- Crea: `customization-uploads` (privado)

---

## ✅ Verificar que Funciona

```bash
npm run dev
```

Visita [localhost:3000](http://localhost:3000)

**Debes ver:**
- Logo "Bubble GI"
- Hero rosa con gradiente
- Botones funcionales
- Footer completo

---

## 🎨 Siguiente Paso

Ahora puedes:
1. Agregar productos en Supabase
2. Implementar el catálogo
3. Seguir el ROADMAP.md

---

## 📚 Más Info

- **Setup detallado:** [SETUP.md](SETUP.md)
- **Documentación completa:** [README.md](README.md)
- **Plan de desarrollo:** [ROADMAP.md](ROADMAP.md)
- **Verificación:** [VERIFICATION.md](VERIFICATION.md)

---

¡Listo para comenzar! 🚀
