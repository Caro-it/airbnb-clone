# context.md — Clon de Airbnb

## Usuario
Persona que busca alojamiento para un viaje. Quiere explorar opciones,
filtrar por categoría, buscar por texto, comparar precios/valoraciones
y ver el detalle de una habitación antes de decidir reservar.

## Páginas
### / (Home)
Punto de entrada. Barra de navegación, fila de filtros por categoría y
cuadrícula de tarjetas de alojamiento con carga simulada.

### /catalog (Catálogo)
Resultados de búsqueda. Cabecera con nº de resultados y orden por precio,
la misma cuadrícula de tarjetas reutilizada y un área de mapa.

### /rooms/[id] (Detalle)
Ficha de una habitación cargada por su id. Galería de fotos, cabecera,
info del anfitrión, servicios y tarjeta de reserva.

## Componentes principales
- Navbar (logo, buscador, menú usuario)
- SearchBar (input controlado con useState)
- CategoryBar (filtros por categoría; categoría activa con useState)
- ListingCard (foto placeholder, título, precio/noche, valoración)
- ListingGrid (cuadrícula responsiva de ListingCard)
- ResultsHeader (nº resultados + orden asc/desc por precio)
- MapPlaceholder (recuadro gris "Mapa")
- PhotoGallery (array de fotos, índice visible con useState, anterior/siguiente)
- RoomHeader (título, valoración, reseñas, ubicación)
- HostInfo (avatar placeholder, nombre, años como anfitrión)
- AmenitiesList (cuadrícula icono + etiqueta)
- ReservationCard (precio/noche, contador de huéspedes con useState, CTA)

## Tipos (TypeScript, en /types)
- Alojamiento: id, titulo, precio, valoracion, categoria, ubicacion...
- Habitacion: extiende Alojamiento con fotos[], anfitrion, servicios[], reseñas...

## Especificación Home

HomePage (app/page.tsx)
Contenedor de la página. Apila verticalmente sus hijos en columna única (mobile-first).

1. AppDownloadBanner
Props: appName: string, title: string, subtitle: string, ctaLabel: string, ctaHref: string, onDismiss: () => void
Layout: Fila superior, ancho completo, flex items-center justify-between. Contiene: botón de cierre (X) a la izquierda, ícono+texto (título/subtítulo) al centro, botón CTA a la derecha. Es el primer elemento de la página.
2. SearchBar
Props: placeholder: string, onClick?: () => void
Layout: Debajo del banner, ancho completo con padding horizontal. Píldora blanca con sombra, ícono de lupa + texto centrado/izquierda.
3. CategoryTabs
Props: categories: CategoryTabItem[] — donde CategoryTabItem = { id: string; label: string; icon: ReactNode; counter?: string; isActive?: boolean }

Layout: Debajo de SearchBar. Fila horizontal (flex, sin scroll visible en este ancho), distribuida con espacio entre elementos.

3.1 CategoryTab
Props: label: string, icon: ReactNode, counter?: string, isActive?: boolean
Layout: Columna: ícono arriba, label debajo; counter (el valor "1.00") como badge pequeño superpuesto en el borde inferior de la píldora.
4. ListingSection (reutilizable — usado 3 veces: "Alojamientos populares en Móra d'Ebre", "Hoteles increíbles para tu…", "Disponibles el mes que viene en Madrid")
Props: title: string, href: string, listings: ListingCardData[]

Layout: Bloque vertical con margen inferior. Contiene SectionHeader arriba y ListingCardCarousel debajo.

4.1 SectionHeader
Props: title: string, href: string
Layout: Fila, flex justify-between items-center, padding horizontal. Título a la izquierda (puede truncar/wrappear a 2 líneas), botón circular con flecha (→) a la derecha que enlaza a href.
4.2 ListingCardCarousel
Props: listings: ListingCardData[]

Layout: Contenedor con scroll horizontal (overflow-x-auto, snap-x), flex gap-3. Cada tarjeta hija ocupa ~45–48% del viewport, dejando ver el borde de la siguiente (indica scroll).

4.2.1 ListingCard
Props (tipo ListingCardData):


id: string
imageUrl: string
imageAlt: string
title: string
subtitle: string   // ej. "6–8 nov · Anfitrión particular"
price: string      // ej. "211 € en total"
rating: number      // ej. 4.96
isFavorite: boolean
badgeLabel?: string // ej. "Recomendación del viajero"
Layout: Columna. Bloque de imagen (relative, esquinas redondeadas, aspect ratio ~1:1) que contiene FavoriteButton (superpuesto arriba-derecha) y opcionalmente Badge (superpuesto arriba-izquierda). Debajo de la imagen: title (negrita), subtitle (gris, línea 2), línea de price + rating con ícono de estrella.

FavoriteButton
Props: isFavorite: boolean, onToggle: () => void, ariaLabel: string
Layout: absolute top-2 right-2, botón circular semi-transparente sobre la imagen, ícono de corazón.
Badge
Props: label: string
Layout: absolute top-2 left-2, píldora blanca pequeña sobre la imagen, texto corto (ej. "Recomendación del viajero").
5. BottomNavigationBar
(Componente global, se renderiza en el layout raíz, no dentro de page.tsx; fixed bottom-0)

Props: items: NavItem[] — donde NavItem = { id: string; label: string; icon: ReactNode; href: string; isActive: boolean }

Layout: Fila fija al fondo del viewport, ancho completo, borde superior, flex justify-around, fondo blanco.

5.1 NavItem
Props: label: string, icon: ReactNode, href: string, isActive: boolean
Layout: Columna: ícono arriba, label debajo (texto pequeño). Color activo (rosa/rojo) vs. inactivo (gris).
6. SiteFooter
Props:


linkGroups: { heading: string; links: { label: string; href: string }[] }[]
locale: string
currency: string
socialLinks: { icon: ReactNode; href: string; label: string }[]
legalLinks: { label: string; href: string }[]
copyrightText: string
Layout: Bloque final de la página, fondo gris claro, ancho completo. Apila verticalmente: FooterLinkGroup × N (uno por cada linkGroups, en este caso "Asistencia", "Cómo ser anfitrión", "Airbnb"), luego FooterDivider, LocaleCurrencySelector, SocialLinks, FooterLegal.

6.1 FooterLinkGroup
Props: heading: string, links: { label: string; href: string }[]

 Layout: Columna, ancho completo. heading en negrita arriba; lista de FooterLink apilados verticalmente con espaciado generoso (targets táctiles).

## FooterLink
Props: label: string, href: string
Layout: Bloque de una línea, texto gris medio.
6.2 FooterDivider
Props: ninguna (o className?: string)
Layout: Línea horizontal fina, separa secciones del footer.
6.3 LocaleCurrencySelector
Props: locale: string, currency: string, onClick?: () => void
Layout: Fila alineada a la izquierda: ícono de globo + texto locale (ej. "Español (ES)"), separador visual, texto currency (ej. "€ EUR").
6.4 SocialLinks
Props: links: { icon: ReactNode; href: string; label: string }[]

## Layout: Fila alineada a la izquierda, flex gap-4.

SocialIconLink
Props: icon: ReactNode, href: string, ariaLabel: string
Layout: Botón/enlace de ícono individual (Facebook, X, Instagram).
6.5 FooterLegal
Props: copyrightText: string, legalLinks: { label: string; href: string }[]
Layout: Bloque final, texto pequeño gris. copyrightText seguido de legalLinks separados por "·", con wrap en mobile.
Resumen del apilamiento en mobile (orden vertical en HomePage):
AppDownloadBanner → SearchBar → CategoryTabs → ListingSection ("Alojamientos populares…") → ListingSection ("Hoteles increíbles…") → ListingSection ("Disponibles el mes que viene en Madrid") → SiteFooter, con BottomNavigationBar fijo superpuesto vía el layout raíz.

## Reconciliación con el brief (Home)

La especificación de arriba refleja la Home REAL de Airbnb en móvil (capturada
a 375px). Al contrastarla con los requisitos del reto, ajusto el alcance:

Requisitos del brief que la captura no cubría y que SÍ implemento:
- Navbar superior con logo + búsqueda + iconos de usuario (la home móvil real
  lo oculta; el brief lo pide).
- SearchBar como <input> CONTROLADO con useState, que filtra las tarjetas en
  vivo en cada pulsación (la captura mostraba solo una píldora con onClick).
- Cuadrícula RESPONSIVA (1 columna en móvil → varias en escritorio), en lugar
  de los carruseles horizontales de la captura.
- Categoría activa gestionada con useState, que resalta y filtra.
- useEffect de carga simulada: lista vacía → loading → setTimeout(1s) → datos.

Elementos de la captura que NO forman parte del núcleo evaluado y quedan
diferidos (se implementan solo si sobra tiempo):
- AppDownloadBanner
- BottomNavigationBar
- SiteFooter y todos sus subcomponentes

## Alcance de implementación (Home)

Estado en app/page.tsx: searchText, activeCategory, listings, loading.
Componentes en /components (uno por archivo):
- Navbar (logo + SearchBar + iconos de usuario)
- SearchBar (input controlado value/onChange)
- CategoryBar → CategoryItem (activeCategory + onSelect)
- ListingCard (placeholder de foto, título, precio/noche, valoración)
- ListingGrid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Loading (indicador mientras loading es true)