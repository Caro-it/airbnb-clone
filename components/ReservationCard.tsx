"use client";

import { useState } from "react";

interface ReservationCardProps {
  pricePerNight: number;
  maxGuests?: number;
}

const ReservationCard = ({ pricePerNight, maxGuests = 8 }: ReservationCardProps) => {
  const [guests, setGuests] = useState(1);

  const decrease = () => setGuests((g) => Math.max(1, g - 1));
  const increase = () => setGuests((g) => Math.min(maxGuests, g + 1));

  return (
    <aside className="rounded-xl border border-gray-300 p-6 shadow-lg">
      <p className="mb-4">
        <span className="text-xl font-semibold">{pricePerNight} €</span>
        <span className="text-gray-500"> noche</span>
      </p>

      <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2">
        <span className="text-sm text-gray-700">Huéspedes</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrease}
            aria-label="Quitar huésped"
            className="h-7 w-7 rounded-full border border-gray-400 text-gray-700 disabled:opacity-40"
            disabled={guests === 1}
          >
            −
          </button>
          <span className="w-4 text-center">{guests}</span>
          <button
            type="button"
            onClick={increase}
            aria-label="Añadir huésped"
            className="h-7 w-7 rounded-full border border-gray-400 text-gray-700 disabled:opacity-40"
            disabled={guests === maxGuests}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-rose-500 py-3 font-semibold text-white hover:bg-rose-600"
      >
        Reservar
      </button>
    </aside>
  );
};

export default ReservationCard;