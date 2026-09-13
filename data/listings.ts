import { Listing } from "@/types/listing";

export const CATEGORIES = ["Todos", "Playa", "Mansiones", "Tendencias", "Cabañas", "Ciudad"];

export const LISTINGS: Listing[] = [
  { id: "1", title: "Ático luminoso con vistas", location: "Móra d'Ebre", pricePerNight: 92, rating: 4.96, category: "Ciudad", imageAlt: "Ático luminoso", lat: 41.0921, lng: 0.6414 },
  { id: "2", title: "Casa junto al mar", location: "Tarragona", pricePerNight: 145, rating: 4.80, category: "Playa", imageAlt: "Casa junto al mar", lat: 41.1189, lng: 1.2445 },
  { id: "3", title: "Villa con piscina privada", location: "Sitges", pricePerNight: 320, rating: 4.99, category: "Mansiones", imageAlt: "Villa con piscina", lat: 41.2371, lng: 1.8111 },
  { id: "4", title: "Cabaña de madera en el bosque", location: "Prades", pricePerNight: 78, rating: 4.72, category: "Cabañas", imageAlt: "Cabaña en el bosque", lat: 41.3097, lng: 0.9722 },
  { id: "5", title: "Loft de diseño en el centro", location: "Barcelona", pricePerNight: 130, rating: 4.88, category: "Tendencias", imageAlt: "Loft de diseño", lat: 41.3874, lng: 2.1686 },
  { id: "6", title: "Apartamento acogedor", location: "Reus", pricePerNight: 65, rating: 4.60, category: "Ciudad", imageAlt: "Apartamento acogedor", lat: 41.1560, lng: 1.1069 },
];