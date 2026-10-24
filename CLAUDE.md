# Duplex Love Parry — Landing de captación

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** dúplex en venta, landing de captación de consultas. Fuente de los datos: ficha en ipropietas.com.ar (listing "Love Parry 159").
- **Ubicación:** Love Parry 159, Trelew, Chubut. A metros de la avenida Hipólito Yrigoyen.
- **Oferta:** 1 unidad · USD 70.000 · 4 ambientes · 2 dormitorios · 2 baños · 85 m² totales · antigüedad 25 años. Cocina y living integrados, patio con fogón, entrada de auto propia.
- **Estado:** disponible (en venta)
- **Contacto específico:** usa el WhatsApp de la firma (+54 9 280 450-3151, `https://wa.me/5492804503151`).

## Identidad
- **Marca propia del desarrollo:** no. Usa solo la identidad de Propietas (azul `#2e3092` / celeste `#27aae1`, Montserrat).
- **Rol de Propietas:** comercializadora (logo en header/footer + pie legal)
- **Paleta / tipografía:** definida por impeccable shape; ver DESIGN.md cuando exista

## Técnico
- **Stack:** HTML/CSS estático
- **Assets:** `assets/logos/` (color, blanco, 1 tinta, negro, símbolo) y `assets/img/foto-01..12.jpg` (originales de la ficha, orden de la galería; foto-01 es la portada, vertical 1042×1280). No referenciar `../_shared`.
- **Deploy:** Vercel, dominio loveparry.ipropietas.com.ar; repo https://github.com/lisandroprada/loveparry

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` son la fuente de verdad visual y de producto.

## Estado
- Construida: `index.html`, `styles.css`, `script.js` (mundo "chapa de calle": placas azules enlozadas con remaches). Revisada por el revisor final; `DESIGN.md` y `.impeccable/design.json` generados.
- Foto de portada = `foto-01.jpg` (frente de ladrillo). Orden y `alt` de las 12 fotos ya definidos en el HTML.
- La ficha dice "cocina y living integrados" pero las fotos muestran la cocina separada del living: **no se afirma "integrados"** en la landing.

## Pendientes
- Dominio: loveparry.ipropietas.com.ar (DNS pendiente de apuntar a Vercel)
- Optimizar peso de las fotos (hoy 100–280 KB cada una; evaluar WebP)
- Confirmar que el precio USD 70.000 y los datos de la ficha siguen vigentes
- Orientación, cochera/estado de conservación, expensas, escritura y financiación: PENDIENTE (no figuran en la ficha; no afirmar)
- Dirección confirmada por el corredor: Gregorio Mayo 106 (corregido también en `_shared/inmobiliaria.md`; revisar los otros proyectos que dicen 118)
- Mapa/ubicación exacta: decidir si se muestra la dirección completa o solo la zona
- Pie legal: el corredor dio el visto bueno (confirmar si hay que ajustar algo más)
