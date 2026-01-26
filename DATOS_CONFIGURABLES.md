# Datos Configurables - Agua Fertil

Este documento contiene todos los datos que puedes modificar fácilmente sin necesidad de tocar el código. Actualiza estos valores según tus necesidades reales.

## Información de Contacto

### Dirección
```
Ciudad: San Juan
Provincia: San Juan
País: Argentina
Código Postal: [A completar]
Dirección completa: [A completar]
```

### Teléfonos
```
Principal: +54 (264) 123-4567
WhatsApp: +54 9 264 123-4567
Alternativo: [A completar]
```

### Email
```
Principal: info@aguafertil.com.ar
Ventas: ventas@aguafertil.com.ar
Soporte: soporte@aguafertil.com.ar
```

### Redes Sociales
```
Instagram: https://www.instagram.com/aguafertil/
YouTube: https://www.youtube.com/@aguafertil
Spotify: https://open.spotify.com/show/aguafertil
Facebook: [A completar]
LinkedIn: [A completar]
Twitter/X: [A completar]
```

### Horarios de Atención
```
Días: Lunes a Viernes
Horario: 8:00 - 17:00 hs
Sábados: [A completar]
Domingos: Cerrado
```

## Google Maps

### Coordenadas Actuales (Aproximadas)
```
Latitud: -31.5375
Longitud: -68.6361
```

### Actualizar el iframe del Mapa
Para actualizar la ubicación exacta:
1. Ir a Google Maps
2. Buscar tu dirección exacta
3. Click en "Compartir"
4. Seleccionar "Insertar un mapa"
5. Copiar el código iframe
6. Reemplazar en `src/components/Location.astro`

## Productos y Servicios

### Lista de Productos Principales
Actualizar en: `src/components/ProblemSolution.astro`

```javascript
const products = [
  {
    name: 'Materia Orgánica',
    description: 'Mejora la estructura del suelo...',
    icon: '🌱',
    color: 'from-green-500 to-emerald-600'
  },
  // ... agregar más productos
];
```

### Marcas Distribuidas
Actualizar en: `src/components/SocialProof.astro`

```javascript
const brands = [
  'Simbios',           // ← Principal
  'BioTech Agro',
  'NanoFert',
  'GreenPlus',
  'AgroSolutions',
  'EcoGrow'
  // ... agregar más marcas
];
```

## Testimonios

Actualizar en: `src/components/SocialProof.astro`

```javascript
const testimonials = [
  {
    name: 'Carlos Rodríguez',
    location: 'San Juan',
    text: 'Desde que empecé a usar...',
    rating: 5
  },
  // ... agregar más testimonios reales
];
```

### Cómo agregar un testimonio:
1. Nombre completo del cliente
2. Ciudad/Región
3. Testimonio (máximo 150 caracteres)
4. Rating (1-5 estrellas)

## Preguntas Frecuentes

Actualizar en: `src/components/FAQ.astro`

```javascript
const faqs = [
  {
    question: '¿Qué productos ofrecen?',
    answer: 'Ofrecemos una amplia gama...'
  },
  // ... agregar más preguntas
];
```

### Sugerencias de FAQs adicionales:
- Formas de pago
- Tiempos de entrega
- Garantías
- Devoluciones
- Capacitaciones
- Descuentos por volumen

## Estadísticas

Actualizar en: `src/components/Benefits.astro`

```javascript
// Contadores animados
data-target="150"  // Productores Asesorados
data-target="15"   // Años de Experiencia
data-target="25"   // Productos Disponibles
```

Cambiar estos números según tus datos reales.

## Imágenes

### Slider del Hero
Actualizar en: `src/components/Hero.astro`

**Imágenes actuales (Pexels Stock)**:
1. Campo verde: pexels-photo-2132250.jpeg
2. Agricultura: pexels-photo-1382102.jpeg
3. Cultivos: pexels-photo-2255801.jpeg
4. Cosecha: pexels-photo-1595104.jpeg

**Para reemplazar con tus propias imágenes**:
1. Subir imágenes a `public/images/`
2. Tamaño recomendado: 1920x1080px
3. Formato: JPG optimizado (< 300KB)
4. Actualizar URLs en el componente

```astro
<div class="slide active" style="background: url('/images/tu-imagen-1.jpg') center/cover;"></div>
```

### Logo
Ubicación: `public/favicon.svg`
- Crear versiones PNG/SVG del logo real
- Tamaños: 32x32, 64x64, 192x192, 512x512

## Textos Clave

### Tagline Principal
Actual: "Tecnología Sustentable para el Agro"
Ubicación: `src/components/Hero.astro`

### Descripción Corta
Actual: "Distribuimos tecnología Simbios en San Juan y La Rioja..."
Ubicación: `src/components/Hero.astro`

### Footer Description
Ubicación: `src/layouts/Footer.astro`

## Formulario de Contacto

### Configuración del envío
Archivo: `src/components/Contact.astro`

**Actualmente**: Mock (simula envío)

**Para conectar a servicio real**:
```javascript
// Opción 1: Formspree
const response = await fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
});

// Opción 2: Email propio (requiere backend)
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(data)
});

// Opción 3: Netlify Forms
// Agregar atributo data-netlify="true" al form
```

## SEO y Meta Tags

### Actualizar títulos
Archivo: `src/pages/es/index.astro` y `src/pages/en/index.astro`

```astro
<Layout
  title="Tu título personalizado - Agua Fertil"
  description="Tu descripción personalizada..."
  lang="es"
>
```

### Keywords recomendadas
- nutrición vegetal
- fertilizantes orgánicos
- biofertilizantes San Juan
- nanopartículas agrícolas
- agricultura sustentable
- Simbios Argentina
- bioestimulantes La Rioja

## Traducciones

### Agregar nuevos textos
Archivo: `src/i18n/ui.ts`

```typescript
export const ui = {
  es: {
    'nueva.clave': 'Texto en español',
  },
  en: {
    'nueva.clave': 'Text in English',
  },
}
```

### Usar en componentes
```astro
{t('nueva.clave')}
```

## Colores Personalizados

Si deseas cambiar los colores de marca, actualizar en: `src/styles/global.css`

```css
@layer base {
  :root {
    --color-primary: #059669;
    --color-primary-dark: #047857;
    --color-secondary: #84cc16;
    --color-accent: #06b6d4;
  }
}
```

Luego actualizar las clases en los componentes:
- `emerald-600` → color primario
- `lime-500` → color secundario
- `cyan-500` → color de agua

## Analytics

### Google Analytics
Agregar en `src/layouts/Layout.astro` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU_ID');
</script>
```

### Facebook Pixel
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## WhatsApp Widget

Para agregar botón flotante de WhatsApp:

En `src/layouts/Layout.astro` agregar antes del `</body>`:

```html
<a
  href="https://wa.me/5492641234567?text=Hola,%20necesito%20información"
  target="_blank"
  class="fixed bottom-24 right-8 w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-110 z-40 flex items-center justify-center"
  aria-label="Contactar por WhatsApp"
>
  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

Reemplazar `5492641234567` con tu número real.

## Checklist de Personalización

- [ ] Actualizar información de contacto
- [ ] Configurar Google Maps con ubicación exacta
- [ ] Reemplazar testimonios con casos reales
- [ ] Actualizar lista de productos/servicios
- [ ] Agregar marcas reales que distribuyes
- [ ] Cambiar imágenes stock por fotos propias
- [ ] Actualizar estadísticas (años, clientes, etc.)
- [ ] Configurar envío de formulario
- [ ] Agregar Google Analytics
- [ ] Instalar WhatsApp widget
- [ ] Actualizar FAQs con preguntas reales
- [ ] Revisar todos los textos y ajustar tono
- [ ] Optimizar imágenes para web
- [ ] Configurar dominio propio
- [ ] Testing en dispositivos móviles

---

**Última actualización**: Diciembre 2025
