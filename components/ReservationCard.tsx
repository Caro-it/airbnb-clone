"use client";

import { useState } from "react";
import DateRangePicker from "@/components/DateRangePicker";

interface ReservationCardProps {
  pricePerNight: number;
  maxGuests?: number;
}

const ReservationCard = ({ pricePerNight, maxGuests = 8 }: ReservationCardProps) => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const totalPrice = nights * pricePerNight;

  return (
    <aside className="rounded-xl border border-gray-300 p-6 shadow-lg">
      <p className="mb-4">
        <span className="text-xl font-semibold">{pricePerNight} €</span>
        <span className="text-gray-500"> noche</span>
      </p>

      <DateRangePicker
        checkIn={checkIn}
        checkOut={checkOut}
        onCheckInChange={setCheckIn}
        onCheckOutChange={setCheckOut}
      />

      <div className="mb-4 flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2">
        <span className="text-sm text-gray-700">Huéspedes</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            aria-label="Quitar huésped"
            className="h-7 w-7 rounded-full border border-gray-400 text-gray-700 disabled:opacity-40"
            disabled={guests === 1}
          >
            −
          </button>
          <span className="w-4 text-center">{guests}</span>
          <button
            type="button"
            onClick={() => setGuests((g) => Math.min(maxGuests, g + 1))}
            aria-label="Añadir huésped"
            className="h-7 w-7 rounded-full border border-gray-400 text-gray-700 disabled:opacity-40"
            disabled={guests === maxGuests}
          >
            +
          </button>
        </div>
      </div>

      {nights > 0 && (
        <div className="mb-4 border-t border-gray-200 pt-3 text-sm">
          <div className="flex justify-between text-gray-700">
            <span>{pricePerNight} € × {nights} {nights === 1 ? "noche" : "noches"}</span>
            <span>{totalPrice} €</span>
          </div>
          <div className="mt-2 flex justify-between font-semibold text-gray-900">
            <span>Total</span>
            <span>{totalPrice} €</span>
          </div>
        </div>
      )}

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