# Aguafertil - Guía de Branding y Diseño

## Identidad de Marca

### Logo y Símbolo

- **Elemento principal**: Gota de agua + hoja (simboliza agua + fertilidad vegetal)
- **Colores del logo**:
  - Versión 1: Fondo verde oscuro, gota blanca, hoja verde lima
  - Versión 2: Fondo blanco/negro, gota azul turquesa, hoja verde lima
- **Tagline**: "NUTRICIÓN VEGETAL"
- **Tipografía del logo**: Minúsculas, sans-serif moderna, peso regular

### Valores de Marca

1. **Sustentabilidad**: Compromiso con el medio ambiente
2. **Innovación**: Tecnología de vanguardia (bio y nanopartículas)
3. **Confianza**: Acompañamiento y asesoramiento profesional
4. **Resultados**: Máximo potencial de producción

## Sistema de Colores

### Paleta Principal

#### Verde Corporativo (Identidad)

```css
/* Tonos principales */
--emerald-50: #ecfdf5 --emerald-100: #d1fae5 --emerald-500: #10b981 --emerald-600: #059669
  /* Principal */ --emerald-700: #047857 /* Principal Oscuro */ --emerald-800: #065f46
  --emerald-900: #064e3b /* Uso */ - Navegación y headers - CTAs primarios - Footer - Iconos
  principales;
```

#### Verde Lima (Acento Natural)

```css
--lime-300: #bef264 --lime-400: #a3e635 --lime-500: #84cc16 /* Acento */ --lime-600: #65a30d
  /* Uso */ - Acentos en iconografía vegetal - Badges y pills - Highlights - Bordes decorativos;
```

#### Azul Turquesa (Agua)

```css
--cyan-400: #22d3ee --cyan-500: #06b6d4 /* Agua */ --cyan-600: #0891b2 --blue-500: #3b82f6
  --blue-600: #2563eb /* Uso */ - Iconos relacionados con agua - Links secundarios - Elementos
  informativos;
```

### Paleta Secundaria

#### Naranja/Ámbar (Energía)

```css
--amber-500: #f59e0b --orange-600: #ea580c /* Uso */ - Iconos de soporte/ayuda - Alertas positivas -
  Elementos de llamado a la acción secundarios;
```

#### Grises (Neutrales)

```css
--gray-50: #f9fafb /* Fondos suaves */ --gray-100: #f3f4f6 /* Fondos de cards */ --gray-600: #4b5563
  /* Texto secundario */ --gray-700: #374151 /* Texto links */ --gray-900: #111827
  /* Texto principal */;
```

## Gradientes de Marca

### Gradientes Principales

```css
/* Verde Corporativo */
.gradient-primary {
  background: linear-gradient(to right, #059669, #047857);
}

/* Verde Natural */
.gradient-nature {
  background: linear-gradient(to right, #10b981, #84cc16);
}

/* Agua */
.gradient-water {
  background: linear-gradient(to right, #06b6d4, #2563eb);
}

/* Fondo Suave */
.gradient-soft {
  background: linear-gradient(to bottom right, #ecfdf5, #ffffff);
}

/* Fondo Verde Suave */
.gradient-green-soft {
  background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
}
```

### Aplicación de Gradientes

1. **CTAs principales**: Verde corporativo
2. **Cards de productos**: Gradientes específicos por tipo
3. **Redes sociales**: Gradientes de marca (Instagram rosa-morado, YouTube rojo, etc.)
4. **Fondos de sección**: Gradientes suaves gris/verde

## Tipografía

### Familia Tipográfica: Inter

```css
font-family:
  'Inter',
  system-ui,
  -apple-system,
  sans-serif;
```

#### Jerarquía Tipográfica

**Hero Titles (H1)**

```css
font-size: 3rem; /* Mobile */
font-size: 4.5rem; /* Desktop */
font-weight: 700; /* Bold */
line-height: 1.1;
letter-spacing: -0.02em;
```

**Section Titles (H2)**

```css
font-size: 2.25rem; /* Mobile */
font-size: 3rem; /* Desktop */
font-weight: 700;
line-height: 1.2;
```

**Subsection Titles (H3)**

```css
font-size: 1.5rem;
font-weight: 600; /* Semibold */
line-height: 1.3;
```

**Card Titles (H4)**

```css
font-size: 1.25rem;
font-weight: 700;
line-height: 1.4;
```

**Body Text**

```css
font-size: 1rem;
font-weight: 400; /* Regular */
line-height: 1.6;
color: #4b5563; /* gray-600 */
```

**Large Body**

```css
font-size: 1.125rem; /* 18px */
font-weight: 400;
line-height: 1.75;
```

**Small Text**

```css
font-size: 0.875rem; /* 14px */
font-weight: 400;
line-height: 1.5;
```

**Labels & Buttons**

```css
font-size: 0.875rem - 1rem;
font-weight: 600; /* Semibold */
letter-spacing: 0.025em;
text-transform: none;
```

## Iconografía

### Estilo de Iconos

- **Biblioteca**: Heroicons (outline y solid)
- **Estilo**: Line icons, stroke-width: 2
- **Tamaños estándar**:
  - Pequeño: 16px (w-4 h-4)
  - Normal: 20px (w-5 h-5)
  - Mediano: 24px (w-6 h-6)
  - Grande: 32px (w-8 h-8)
  - Extra grande: 40px (w-10 h-10)

### Iconos por Categoría

**Productos (Emojis + SVG)**

- Materia Orgánica: 🌱
- Biofertilizantes: 🧬
- Bioestimulantes: 🍃
- Nanopartículas: ⚗️
- Microorganismos: 🦠
- Correctores: 🌾

**Navegación**

- Menú: Heroicons menu
- Flechas: Heroicons arrows
- Checkmarks: Heroicons check
- Close: Heroicons x

**Contacto**

- Ubicación: map-pin
- Email: envelope
- Teléfono: phone
- Reloj: clock

## Espaciado y Grid

### Sistema de Espaciado (8px base)

```css
/* Tailwind spacing scale */
0.5 = 0.125rem = 2px
1   = 0.25rem  = 4px
2   = 0.5rem   = 8px   ← Base unit
3   = 0.75rem  = 12px
4   = 1rem     = 16px
6   = 1.5rem   = 24px
8   = 2rem     = 32px
12  = 3rem     = 48px
16  = 4rem     = 64px
20  = 5rem     = 80px
```

### Contenedores

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile */
  padding: 0 2rem; /* Desktop */
}
```

### Grid Layouts

```css
/* Products Grid */
grid-cols-1        /* Mobile */
md:grid-cols-2     /* Tablet */
lg:grid-cols-3     /* Desktop */

/* Benefits Grid */
grid-cols-1        /* Mobile */
md:grid-cols-2     /* Tablet */
lg:grid-cols-4     /* Desktop */
```

## Componentes de Diseño

### Botones

#### Botón Primario

```css
.btn-primary {
  background: linear-gradient(to right, #059669, #047857);
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px; /* Full rounded */
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.btn-primary:hover {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}
```

#### Botón Secundario

```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}
```

### Cards

#### Card Estándar

```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-8px);
}
```

#### Card con Gradiente

```css
.card-gradient {
  background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
```

### Inputs

```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: transparent;
  ring: 2px solid #059669;
}
```

## Animaciones

### Timing Functions

```css
/* Ease Out - Para entradas */
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

/* Ease In Out - Para hover */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### Duraciones

- Micro: 150ms (hover)
- Pequeña: 300ms (transiciones estándar)
- Media: 500ms (animaciones de entrada)
- Grande: 800ms (animaciones complejas)

### Animaciones Personalizadas

**Fade In**

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

**Slide Up**

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Bounce In**

```css
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
```

## Sombras

### Jerarquía de Sombras

```css
/* Small - Cards en reposo */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

/* Medium - Cards hover */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Large - Modales */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* XL - Hero elements */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* 2XL - CTAs principales */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

## Bordes y Radius

### Border Radius

```css
rounded-sm:  0.125rem   /* 2px */
rounded:     0.25rem    /* 4px */
rounded-lg:  0.5rem     /* 8px */
rounded-xl:  0.75rem    /* 12px */
rounded-2xl: 1rem       /* 16px */
rounded-3xl: 1.5rem     /* 24px */
rounded-full: 9999px    /* Círculo/píldora */
```

### Grosor de Bordes

```css
border: 1px    /* Estándar */
border-2: 2px  /* Énfasis */
```

## Responsive Design

### Breakpoints Strategy

```css
/* Mobile First */
.element {
  /* Estilos móvil por defecto */
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    /* Ajustes tablet */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    /* Ajustes desktop */
  }
}
```

### Tipografía Responsive

- Títulos: Reducir 25-30% en móvil
- Body: Mantener legibilidad (16px mínimo)
- Espaciado: Reducir padding/margin en móvil

## Accesibilidad

### Contraste de Colores

- Texto sobre blanco: Usar gray-600 o más oscuro
- Texto sobre verde: Usar blanco
- Links: Verde corporativo con underline en hover

### Focus States

```css
:focus {
  outline: 2px solid #059669;
  outline-offset: 2px;
}
```

### Touch Targets

- Mínimo: 44px x 44px
- Botones CTA: 48px de altura
- Espaciado entre elementos: 8px mínimo

## Mejores Prácticas

### Performance

1. Usar gradientes CSS en lugar de imágenes
2. Lazy loading para imágenes
3. Optimizar SVGs
4. Minimizar animaciones en móvil

### Consistencia

1. Usar clases de Tailwind estándar
2. Mantener jerarquía de espaciado
3. Colores de la paleta definida
4. Bordes redondeados consistentes

### UX

1. Feedback visual en todas las interacciones
2. Estados de loading visibles
3. Mensajes de error claros
4. Navegación intuitiva

---

**Nota**: Este sistema de diseño está construido con Tailwind CSS 4.x y puede ser extendido según necesidades específicas del proyecto.
