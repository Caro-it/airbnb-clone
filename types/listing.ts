export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;   // precio por noche en €
  rating: number;          // 0–5
  category: string;
  imageAlt: string;        // texto del placeholder (no hay foto real)
}