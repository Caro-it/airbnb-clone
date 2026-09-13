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