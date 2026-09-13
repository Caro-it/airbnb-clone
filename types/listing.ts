export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;   // precio por noche en €
  rating: number;          // 0–5
  category: string;
  imageAlt: string;        // texto del placeholder (no hay foto real)
}

export interface Room {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  photos: string[];        // textos de placeholder, una por foto
  host: {
    name: string;
    yearsHosting: number;
  };
  amenities: string[];     // ej. "Wifi", "Cocina"
}