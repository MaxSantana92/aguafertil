# Agua Fertil - Documentación de la Web Corporativa

## Resumen del Proyecto

Web corporativa moderna para Agua Fertil, empresa especializada en nutrición vegetal sustentable en San Juan y La Rioja, Argentina. La web está construida con Astro y Tailwind CSS, incluye soporte multiidioma (español e inglés), y sigue el modelo AIDA para optimizar la conversión.

## Tecnologías Utilizadas

- **Astro 5.2.5**: Framework principal
- **Tailwind CSS 4.1.18**: Sistema de diseño y estilos
- **TypeScript**: Tipado estático
- **i18n Custom**: Sistema de traducción español/inglés

## Paleta de Colores

### Colores Principales
- **Verde Corporativo**: `#1B6B4E` / `#2D7A5E` (from-emerald-600 to-emerald-700)
- **Verde Lima**: `#A4D233` / `#8BC34A` (lime-500, green-600)
- **Azul Turquesa**: `#00B4D8` / `#0891B2` (cyan-500, blue-600)

### Colores Secundarios
- **Naranja/Ámbar**: Para iconos y acentos (amber-500, orange-600)
- **Gris Oscuro**: `#1F2937` (Para textos)
- **Blanco**: `#FFFFFF`

### Colores de Fondo
- Gradientes suaves con `from-gray-50 to-white`
- Gradientes de marca con `from-emerald-50 to-lime-50`

## Tipografía

- **Fuente Principal**: Inter (Google Fonts)
- **Pesos Utilizados**: 400, 500, 600, 700, 800, 900
- **Características**: Sans-serif moderna, limpia y altamente legible

## Estructura de Archivos

```
src/
├── i18n/
│   ├── ui.ts              # Traducciones ES/EN
│   └── utils.ts           # Utilidades de i18n
├── components/
│   ├── Navigation.astro    # Barra de navegación sticky
│   ├── Footer.astro        # Pie de página corporativo
│   ├── Hero.astro          # Sección principal con slider
│   ├── ProblemSolution.astro  # Productos y soluciones
│   ├── Benefits.astro      # Beneficios con iconografía
│   ├── SocialProof.astro   # Testimonios y marcas
│   ├── SocialMedia.astro   # Enlaces a redes sociales
│   ├── FAQ.astro           # Preguntas frecuentes
│   ├── Contact.astro       # Formulario de contacto
│   └── Location.astro      # Google Maps y ubicación
├── layouts/
│   └── Layout.astro        # Layout principal
├── pages/
│   ├── index.astro         # Redirect a /es
│   ├── es/
│   │   └── index.astro     # Página principal español
│   └── en/
│       └── index.astro     # Página principal inglés
└── styles/
    └── global.css          # Estilos globales Tailwind
```

## Secciones de la Web (Modelo AIDA)

### 1. Hero Section (Atención)
- **Componente**: `Hero.astro`
- **Características**:
  - Slider automático con 4 imágenes de cultivos (Pexels)
  - Título impactante y propuesta de valor
  - 2 CTAs principales: "Solicitar Asesoramiento" y "Ver Productos"
  - Navegación con flechas y dots
  - Auto-play cada 5 segundos
  - Animaciones de fade-in y slide-up

### 2. Problem/Solution (Interés)
- **Componente**: `ProblemSolution.astro`
- **Características**:
  - Descripción del problema y solución
  - Grid de 6 productos principales con iconos
  - Tarjetas interactivas con hover effects
  - Banner CTA final con gradiente
  - Animaciones de fadeInUp escalonadas

**Productos Incluidos**:
1. Materia Orgánica
2. Biofertilizantes
3. Bioestimulantes Foliares
4. Nanopartículas
5. Microorganismos
6. Correctores de Suelo

### 3. Benefits (Deseo)
- **Componente**: `Benefits.astro`
- **Características**:
  - 4 beneficios clave con iconos SVG
  - Tarjetas con hover effects (scale y rotate)
  - Contadores animados (150 productores, 15 años, 25 productos)
  - Gradientes de colores distintivos por beneficio

### 4. Social Proof (Confianza)
- **Componente**: `SocialProof.astro`
- **Características**:
  - 3 testimonios reales con ratings de 5 estrellas
  - Grid de 6 marcas distribuidas
  - Avatares con iniciales en gradiente
  - Efecto grayscale a color en hover
  - Sistema de animaciones escalonadas

### 5. Social Media (Engagement)
- **Componente**: `SocialMedia.astro`
- **Características**:
  - 3 tarjetas de redes sociales (Instagram, YouTube, Spotify)
  - Gradientes específicos por plataforma
  - Iconos SVG completos
  - Enlaces externos con target="_blank"
  - Animación bounceIn

### 6. FAQ (Objeciones)
- **Componente**: `FAQ.astro`
- **Características**:
  - 6 preguntas frecuentes
  - Sistema de acordeón interactivo
  - Solo una respuesta abierta a la vez
  - Animaciones de expansión suaves
  - Iconos rotativos

**Preguntas Incluidas**:
1. ¿Qué productos ofrecen?
2. ¿Ofrecen asesoramiento técnico?
3. ¿En qué zonas trabajan?
4. ¿Prestan maquinaria?
5. ¿Los productos son certificados orgánicos?
6. ¿Cómo puedo hacer un pedido?

### 7. Contact Form (Acción)
- **Componente**: `Contact.astro`
- **Características**:
  - Formulario con validación HTML5
  - Campos: Nombre, Email, Teléfono, Mensaje
  - Información de contacto lateral
  - Mensajes de éxito/error
  - Panel de "Por qué elegirnos"
  - Diseño responsive en 2 columnas

### 8. Location (Ubicación)
- **Componente**: `Location.astro`
- **Características**:
  - Google Maps embebido (San Juan, Argentina)
  - 3 tarjetas de información: Horario, Teléfono, Email
  - Diseño responsive
  - Sombras y hover effects

### 9. Navigation
- **Componente**: `Navigation.astro`
- **Características**:
  - Barra fija (sticky)
  - Logo con gradiente
  - Menú responsive con hamburguesa
  - Selector de idioma (ES/EN)
  - Smooth scroll a secciones
  - Efecto de sombra al hacer scroll

### 10. Footer
- **Componente**: `Footer.astro`
- **Características**:
  - 3 columnas: Sobre Nosotros, Contacto, Redes Sociales
  - Enlaces a redes sociales
  - Información corporativa
  - Copyright dinámico
  - Gradiente verde corporativo

## Funcionalidades Interactivas

### Animaciones
- **Fade In**: Aparición gradual de elementos
- **Slide Up**: Entrada desde abajo
- **Bounce In**: Entrada con rebote
- **Scale & Rotate**: Efectos hover en tarjetas
- **Counters**: Contadores animados en Benefits

### JavaScript Interactivo
1. **Slider de Hero**: Auto-play, navegación manual, dots
2. **FAQ Accordion**: Expansión/colapso de respuestas
3. **Mobile Menu**: Menú hamburguesa responsive
4. **Scroll to Top**: Botón flotante
5. **Navbar Shadow**: Sombra dinámica al scroll
6. **Form Validation**: Validación de formulario
7. **Animated Counters**: Contadores con IntersectionObserver

## Sistema i18n (Internacionalización)

### Estructura
- **Archivo de traducciones**: `src/i18n/ui.ts`
- **Utilidades**: `src/i18n/utils.ts`
- **Idiomas**: Español (ES) - por defecto, Inglés (EN)

### Uso
```typescript
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

// En el template
{t('hero.title')}
```

### Rutas
- `/` → Redirect a `/es`
- `/es` → Versión en español
- `/en` → Versión en inglés

## Responsive Design

### Breakpoints (Tailwind)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Adaptaciones Móviles
- Hero: Títulos más pequeños, stack de botones
- Navigation: Menú hamburguesa
- Products: Grid de 1 columna
- Benefits: 1 columna en móvil, 4 en desktop
- Contact: Stack vertical en móvil

## Optimizaciones

### Performance
- Lazy loading de imágenes
- Preconnect a Google Fonts
- Smooth scroll con CSS
- Animaciones con CSS cuando es posible
- Build optimizado con Vite

### SEO
- Meta descriptions por idioma
- Títulos únicos por página
- HTML semántico
- Lang attributes correctos
- Alt text en imágenes (implementar)

## Imágenes de Stock (Pexels)

### Hero Slider
1. https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg (Campo verde)
2. https://images.pexels.com/photos/1382102/pexels-photo-1382102.jpeg (Agricultura)
3. https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg (Cultivos)
4. https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg (Cosecha)

## Próximos Pasos Sugeridos

### Mejoras Técnicas
1. Conectar formulario de contacto a backend o servicio de email
2. Agregar sistema de testimonios dinámico (base de datos)
3. Implementar blog/noticias
4. Añadir catálogo de productos detallado
5. Sistema de cotizaciones online

### Mejoras de Contenido
1. Reemplazar textos placeholder con contenido real
2. Agregar imágenes propias de productos y equipo
3. Incluir casos de éxito reales
4. Videos testimoniales
5. Infografías sobre procesos

### Analytics & Marketing
1. Integrar Google Analytics 4
2. Implementar Facebook Pixel
3. Agregar chatbot/WhatsApp widget
4. Sistema de newsletter
5. Tracking de conversiones

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Añadir Astro Check
npm run astro check
```

## Contacto del Proyecto

- **Cliente**: Agua Fertil
- **Ubicación**: San Juan y La Rioja, Argentina
- **Tecnología distribuida**: Simbios
- **Enfoque**: Nutrición vegetal sustentable

---

**Fecha de creación**: Diciembre 2025
**Versión**: 1.0.0
**Framework**: Astro 5.2.5
