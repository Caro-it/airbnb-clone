import { Listing } from "@/types/listing";

export const CATEGORIES = ["Todos", "Playa", "Mansiones", "Tendencias", "Cabañas", "Ciudad"];

export const LISTINGS: Listing[] = [
  { id: "1", title: "Ático luminoso con vistas", location: "Móra d'Ebre", pricePerNight: 92, rating: 4.96, category: "Ciudad", imageAlt: "Ático luminoso" },
  { id: "2", title: "Casa junto al mar", location: "Tarragona", pricePerNight: 145, rating: 4.80, category: "Playa", imageAlt: "Casa junto al mar" },
  { id: "3", title: "Villa con piscina privada", location: "Sitges", pricePerNight: 320, rating: 4.99, category: "Mansiones", imageAlt: "Villa con piscina" },
  { id: "4", title: "Cabaña de madera en el bosque", location: "Prades", pricePerNight: 78, rating: 4.72, category: "Cabañas", imageAlt: "Cabaña en el bosque" },
  { id: "5", title: "Loft de diseño en el centro", location: "Barcelona", pricePerNight: 130, rating: 4.88, category: "Tendencias", imageAlt: "Loft de diseño" },
  { id: "6", title: "Apartamento acogedor", location: "Reus", pricePerNight: 65, rating: 4.60, category: "Ciudad", imageAlt: "Apartamento acogedor" },
];