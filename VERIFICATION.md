# ✅ Verificación del Proyecto - Bubble GI

Esta guía te ayudará a verificar que todo esté funcionando correctamente después de la instalación.

## 📋 Checklist de Verificación

### 1. Instalación Base

```bash
# Verificar que Node.js esté instalado
node --version
# Debe mostrar: v18.x.x o superior

# Verificar que npm esté instalado
npm --version
# Debe mostrar: 9.x.x o superior

# Verificar que las dependencias se instalaron
ls node_modules
# Debe mostrar una lista de carpetas
```

### 2. Archivos de Configuración

Verifica que estos archivos existan:

- [x] `package.json` - Dependencias
- [x] `tsconfig.json` - TypeScript config
- [x] `next.config.js` - Next.js config
- [x] `tailwind.config.ts` - Tailwind config
- [x] `.env.local` - Variables de entorno (copia de .env.example)
- [x] `.gitignore` - Ignorar archivos

### 3. Estructura de Carpetas

```bash
# Verificar estructura principal
ls -la

# Debe mostrar:
# - app/
# - components/
# - lib/
# - types/
# - supabase/
# - public/
# - README.md
# - package.json
```

### 4. Variables de Entorno

Abre `.env.local` y verifica que tengas al menos:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co  ✅ Obligatorio
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx                  ✅ Obligatorio
SUPABASE_SERVICE_ROLE_KEY=xxx                      ✅ Obligatorio
NEXT_PUBLIC_SITE_URL=http://localhost:3000         ✅ Obligatorio
```

Opcional (para producción):
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx     ⏳ Opcional
STRIPE_SECRET_KEY=sk_test_xxx                      ⏳ Opcional
NEXT_PUBLIC_MP_PUBLIC_KEY=TEST-xxx                 ⏳ Opcional
MP_ACCESS_TOKEN=TEST-xxx                           ⏳ Opcional
RESEND_API_KEY=re_xxx                              ⏳ Opcional
```

---

## 🚀 Ejecutar el Proyecto

### Paso 1: Instalar dependencias
```bash
npm install
```

**Resultado esperado:**
- No errores
- Mensaje "added XXX packages"
- Carpeta `node_modules` creada

### Paso 2: Ejecutar en desarrollo
```bash
npm run dev
```

**Resultado esperado:**
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000
```

### Paso 3: Abrir en el navegador
Abre [http://localhost:3000](http://localhost:3000)

**Debes ver:**
- ✅ Navbar con logo "Bubble GI"
- ✅ Hero section con gradiente rosa
- ✅ Título: "Encanto en cada burbuja"
- ✅ Botones "Ver Productos" y "Conoce más"
- ✅ Sección de categorías
- ✅ Features section
- ✅ Footer completo

---

## 🧪 Tests de Funcionalidad

### Test 1: Navegación
- [ ] Click en "Productos" → debe ir a `/productos`
- [ ] Click en "Sobre Nosotros" → debe ir a `/sobre-nosotros`
- [ ] Click en "Contacto" → debe ir a `/contacto`
- [ ] Click en logo → debe volver a homepage

### Test 2: Responsive
- [ ] Abre DevTools (F12)
- [ ] Toggle device toolbar
- [ ] Prueba en iPhone (375px)
- [ ] Prueba en iPad (768px)
- [ ] Prueba en Desktop (1920px)
- [ ] Menu hamburguesa debe aparecer en mobile

### Test 3: Estilos
- [ ] Los colores deben ser rosas (#FF6B9D)
- [ ] Botones deben tener hover effect
- [ ] Gradientes deben verse suaves
- [ ] Fuentes deben cargar correctamente
- [ ] No debe haber estilos rotos

---

## 🗄️ Verificar Supabase

### 1. Proyecto creado
- [ ] Ve a [app.supabase.com](https://app.supabase.com)
- [ ] Tu proyecto debe estar en la lista
- [ ] Estado: "Active" (verde)

### 2. Credenciales
- [ ] Settings > API
- [ ] Copia URL y keys
- [ ] Pega en `.env.local`

### 3. Tablas creadas
- [ ] Ve a Table Editor
- [ ] Debes ver estas tablas:
  - profiles
  - categories
  - products
  - product_variants
  - product_images
  - customization_options
  - orders
  - order_items
  - customization_uploads
  - shipping_zones
  - order_status_history

### 4. Datos de ejemplo
- [ ] Abre tabla `categories`
- [ ] Debe tener 6 categorías:
  - Esferas Gigantes
  - Globos Personalizados
  - Tarjetas Navideñas
  - Sudaderas
  - Tote Bags
  - Arreglos Florales

### 5. Storage Buckets
- [ ] Ve a Storage
- [ ] Crea estos buckets:
  - `product-images` (público)
  - `customization-uploads` (privado)
  - `design-proofs` (privado)

---

## 🔍 Verificar Build de Producción

```bash
# Build del proyecto
npm run build
```

**Resultado esperado:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                   XXX kB        XXX kB
├ ○ /contacto                           XXX kB        XXX kB
├ ○ /productos                          XXX kB        XXX kB
└ ○ /sobre-nosotros                     XXX kB        XXX kB
```

**No debe haber:**
- ❌ Errores de TypeScript
- ❌ Errores de ESLint
- ❌ Errores de build

---

## 🐛 Problemas Comunes y Soluciones

### Error: "Cannot find module"
```bash
# Solución: Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"
```bash
# Solución: Usar otro puerto
npm run dev -- -p 3001
```

### Error: "Supabase client error"
**Causa:** Variables de entorno incorrectas

**Solución:**
1. Verifica que `.env.local` existe
2. Verifica que las URLs/keys son correctas
3. Reinicia el servidor

### Error: "Module not found: Can't resolve '@/...'"
**Causa:** Path alias no configurado

**Solución:**
1. Verifica `tsconfig.json` tiene paths configurado
2. Reinicia VS Code
3. Reinicia el servidor

### Estilos no se ven
**Causa:** Tailwind no compiló

**Solución:**
```bash
# Limpiar caché
rm -rf .next
npm run dev
```

### Error 404 en páginas
**Causa:** Archivos no en lugar correcto

**Solución:**
1. Verifica que los archivos estén en `app/(public)/`
2. Verifica que tengan extensión `.tsx`
3. Verifica que exporten default

---

## ✅ Checklist Final

Antes de comenzar el desarrollo, verifica:

### Setup Básico
- [ ] Node.js instalado (v18+)
- [ ] npm funcionando
- [ ] Proyecto clonado/descargado
- [ ] Dependencias instaladas
- [ ] `.env.local` creado y configurado

### Supabase
- [ ] Proyecto creado
- [ ] Schema ejecutado
- [ ] Tablas creadas (12 tablas)
- [ ] Datos de ejemplo insertados
- [ ] Storage buckets creados
- [ ] Credenciales en `.env.local`

### Funcionamiento
- [ ] `npm run dev` funciona
- [ ] Sitio carga en localhost:3000
- [ ] Homepage se ve correcta
- [ ] Navegación funciona
- [ ] Responsive funciona
- [ ] No hay errores en consola

### Producción
- [ ] `npm run build` exitoso
- [ ] No errores de TypeScript
- [ ] No errores de linting
- [ ] Build optimizado

### Documentación
- [ ] README.md leído
- [ ] SETUP.md leído
- [ ] Variables de entorno configuradas
- [ ] Next.js básico entendido

---

## 🎉 ¡Todo Listo!

Si todos los checks están ✅, tu proyecto está listo para desarrollo.

### Próximos Pasos:

1. **Lee el ROADMAP.md** para ver el plan de desarrollo
2. **Empieza con Fase 1** (Catálogo de productos)
3. **Consulta PROJECT_SUMMARY.md** para overview del proyecto

---

## 🆘 ¿Necesitas Ayuda?

Si algo no funciona:

1. **Revisa la consola** del navegador (F12)
2. **Revisa la terminal** donde corre `npm run dev`
3. **Verifica `.env.local`** tiene todas las variables
4. **Ejecuta schema SQL** en Supabase si las tablas no existen
5. **Reinstala dependencias** con `rm -rf node_modules && npm install`

---

**Última actualización:** 2024

¡Feliz desarrollo! 🚀
