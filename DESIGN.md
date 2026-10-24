---
name: Duplex Love Parry
description: Landing de un dúplex en Trelew, hecha como una chapa enlozada de calle sobre una pared celeste pálida.
colors:
  azul: "#2e3092"
  azul-hondo: "#22246f"
  celeste: "#27aae1"
  pared: "#eef1f8"
  pared-2: "#e2e7f4"
  blanco: "#ffffff"
  tinta: "#1d2059"
  tinta-suave: "#4a4f86"
  remache: "#c9cff0"
  trazo: "#c5cbe6"
typography:
  display:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 18vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(2rem, 9vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 1.05
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 5.4vw, 1.75rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.04em"
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "12px"
  plate: "14px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.75rem"
  xl: "3rem"
  section: "5rem"
components:
  plate:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.plate}"
  button-primary:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.azul-hondo}"
  button-claro:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.azul}"
    rounded: "{rounded.md}"
  faq-item:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
---

# Design System: Duplex Love Parry

## Overview

**Creative North Star: "La Chapa de Calle"**

La página es la chapa de numeración de la calle: un campo azul enlozado, letras blancas, un filete blanco interior y remaches en las esquinas, montado sobre una pared celeste muy pálida. Sin contenido, se reconoce como una columna de chapas azules remachadas sobre pared. Rechaza la plantilla de portal inmobiliario (galería a un lado, caja de precio al otro, formulario).

La densidad es baja y la lectura es de celular primero. Cada título, el precio, la ficha de datos y los epígrafes de las fotos son chapas; el resto es aire sobre pared. Las fotos son llanas y honestas: van sobre blanco con un marco fino, sin tratamiento. La marca Propietas manda (azul, Montserrat) y no hay identidad propia del desarrollo.

**Key Characteristics:**
- Una sola familia, Montserrat: Black en mayúsculas para chapas, Light para cuerpo.
- Chapa como único contenedor distintivo; el resto es pared y blanco.
- Neutros tintados hacia el azul de marca, sin grises puros.
- Movimiento único: la chapa se "atornilla" al entrar.
- Nota de fidelidad: el "borde enrollado" se resuelve como doble anillo interior (sombra inset), y los remaches son puntos de radial-gradient.

## Colors

Un azul enlozado dominante, una pared pálida tintada de azul y un blanco de letra. El celeste de marca está declarado pero el build no lo usa todavía.

### Primary
- **Azul Enlozado** (#2e3092): campo de toda chapa, botón primario, bloque de cierre, acento de enlaces y foco.
- **Azul Hondo** (#22246f): borde de chapa, sombra de contacto, hover del botón, pie.

### Secondary
- **Celeste de Marca** (#27aae1): token declarado, sin uso en las hojas. Solo para texto grande o sobre azul (contraste AA).

### Neutral
- **Pared** (#eef1f8): fondo de página.
- **Pared Profunda** (#e2e7f4): fondo de secciones alternas y de imagen en carga.
- **Blanco** (#ffffff): letras de chapa, cabecera, marcos de foto, tarjetas de preguntas.
- **Tinta** (#1d2059): texto principal.
- **Tinta Suave** (#4a4f86): texto secundario (matrícula).
- **Remache** (#c9cff0): puntos de remache y sombra del botón claro.
- **Trazo** (#c5cbe6): filetes finos, bordes de tarjeta y contorno de foto.

### Named Rules
**The Enamel Rule.** El azul pleno es superficie de chapa, nunca texto corrido sobre pared. En texto sobre pared se usa Tinta.
**The Tinted Neutral Rule.** Ningún gris ni blanco puro de fondo: pared, trazo y tinta salen del matiz del azul de marca.

## Typography

**Display / Body Font:** Montserrat (Google Fonts; pesos 300, 500, 800, 900; fallback system-ui, sans-serif)

**Character:** Black en mayúsculas como letra de chapa, Light como voz cercana de cuerpo. El contraste de peso hace la jerarquía.

### Hierarchy
- **Display** (900, clamp(3.5rem, 18vw, 8rem), 0.95): el número de la calle en la chapa del hero; "calle" en clamp(2.25rem, 10.8vw, 5.5rem). Mayúsculas.
- **Headline** (900, clamp(2rem, 9vw, 3.5rem), 1.05): titular del cierre, mayúsculas, máximo 18ch.
- **Title** (900, clamp(1.25rem, 5.4vw, 1.75rem), 1.1, 0.04em): h2 dentro de chapa-título, mayúsculas.
- **Body** (300, 1.0625rem, 1.6; 1.125rem desde 48rem): cuerpo; el lead es 1.125rem, 38ch; párrafos de sección 52ch.
- **Label** (500, 0.8125rem, 0.18 a 0.24em, mayúsculas): rótulos dentro de una chapa (ciudad, "precio", términos de la ficha). Epígrafes de foto en 800, 0.75rem, 0.16em. Botones y preguntas en 800.

### Named Rules
**The Plate Letter Rule.** Mayúsculas y peso 900 solo sobre campo azul o en el cierre azul; el cuerpo nunca va en mayúsculas.

## Layout

Contenedor `.wrap` de 70rem máximo con gutter de 1rem (2rem desde 48rem). Secciones con padding vertical de 3rem en celular y 5rem en escritorio, alternando pared y pared profunda. Cabecera blanca de 4.75rem con logo de 7.5rem. Hero: placa a ancho completo; debajo, foto y precio/botón en una columna en celular y en grilla 1.35fr / 1fr desde 48rem. Fotos en grilla de 12 columnas desde 48rem, escalonadas a mano con márgenes superiores de 2 a 3rem (7/5, 5/3/4); en celular, 2 columnas con verticales de a par y horizontales a ancho completo. Ritmo de 0.75 a 1.75rem dentro de bloques, 2.25rem entre fotos. Único breakpoint: 48rem. Barra fija de WhatsApp solo en celular, aparece cuando los botones principales salen de pantalla.

## Elevation & Depth

Híbrido: la profundidad es material (la chapa tiene filete, borde y remaches) más sombras suaves azuladas para asentar los objetos sobre la pared.

### Shadow Vocabulary
- **Borde de chapa** (`inset 0 0 0 3px #22246f, inset 0 0 0 4px rgba(255,255,255,0.28)`): doble anillo interior que reemplaza al borde enrollado.
- **Asiento de chapa** (`0 14px 26px -12px rgba(34,36,111,0.55), 0 2px 0 #22246f`): apoya la chapa sobre la pared.
- **Asiento de botón** (`0 10px 20px -10px rgba(34,36,111,0.7), 0 2px 0 #22246f`).
- **Asiento de foto** (`0 16px 30px -18px rgba(34,36,111,0.5)`).

### Named Rules
**The Tinted Shadow Rule.** Toda sombra sale del azul hondo, no del negro. Excepción en el build: el botón claro sobre azul usa negro al 50%.

## Shapes

Esquinas amables de chapa: 14px la chapa grande, 10px la chica y la de título, 12px botón, fotos y tarjetas, 8px epígrafes. El filete blanco interior es un rectángulo con radio 7px (5px en chica), 2px de borde, a una distancia (`--linea`) de 5 a 26px según el tamaño. Los remaches son cuatro puntos (de 3 a 11px) en las esquinas, hechos con radial-gradient en `::before`, en Remache con anillo oscuro. Fotos: borde blanco de 6px (4px en verticales de celular) y contorno de 1px en Trazo.

## Components

### Chapa (`.plate`)
Campo azul, letra blanca, filete interior, remaches y doble anillo. Variantes por escala: `--xl` (hero), `--ficha`, `--titulo`, `--sm` (epígrafe), y la del precio. La escala se controla con las variables `--off`, `--rem`, `--linea`. Una chapa por idea, nunca anidadas.

### Botones
- **Forma:** radio de 12px, alto mínimo 3.5rem, ancho completo en celular, auto desde 48rem.
- **Primario:** Azul Enlozado, texto blanco 800, ícono de WhatsApp en SVG de línea (1.5rem).
- **Hover / activo:** hover (solo con puntero) a Azul Hondo y sube 2px; activo baja 1px con escala 0.985. Transición 0.25s con curva exponencial.
- **Claro:** blanco con texto azul, para el bloque de cierre azul.
- **Foco:** anillo de 3px azul con offset de 3px (blanco sobre azul).

### Tarjetas de preguntas
Blanco, borde de 1px en Trazo, radio 12px, `details` nativo con summary de 3.5rem de alto y chevron CSS que rota.

### Ficha de datos
Chapa con lista de definición: término en Label, valor en 900 de 1.5rem, separadas por filetes blancos al 30%.

### Foto con epígrafe
Foto con marco blanco; epígrafe como chapa chica montada a medias sobre el borde inferior izquierdo.

## Do's and Don'ts

### Do:
- **Do** hacer de cada título, el precio, la ficha y cada epígrafe una chapa con filete y remaches.
- **Do** poner las fotos sobre blanco con borde de 6px y contorno fino en Trazo.
- **Do** tintar neutros y sombras hacia el azul (#22246f para sombras).
- **Do** animar la chapa una sola vez al entrar (translate 14px, escala 0.985, opacidad, 0.6 a 0.7s, ease-out exponencial) y apagarlo con `prefers-reduced-motion`.
- **Do** mantener objetivos táctiles de al menos 3rem y foco visible.

### Don't:
- **Don't** armar la plantilla de portal (galería izquierda, caja de precio derecha, formulario).
- **Don't** anidar chapas ni poner texto corrido dentro de ellas.
- **Don't** usar celeste en texto chico sobre blanco.
- **Don't** aplicar efectos al logo ni deformarlo (regla del manual de marca).
- **Don't** usar mayúsculas con peso 900 fuera de campos azules.

## Not canonized
`--celeste` sin uso, `#d4d8f3` del texto legal como valor suelto fuera de los tokens, y la sombra negra del botón claro son hallazgos del build, no reglas para nuevas superficies.
