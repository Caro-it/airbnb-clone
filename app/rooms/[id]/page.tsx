"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Room } from "@/types/listing";
import { getRoomById } from "@/data/rooms";
import Loading from "@/components/Loading";

const RoomPage = () => {
  const params = useParams();
  const id = params.id as string;

  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(getRoomById(id) ?? null);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loading />;

  if (!room) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 text-center text-gray-600">
        No se encontró el alojamiento.
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl bg-white px-4 py-6 text-gray-900">
      <h1 className="text-2xl font-semibold">{room.title}</h1>
      <p className="mt-1 text-sm text-gray-700">
        ★ {room.rating} · {room.reviewsCount} reseñas · {room.location}
      </p>
      <p className="mt-6 text-gray-400">[Aquí irán galería, anfitrión, servicios y reserva]</p>
    </main>
  );
};

export default RoomPage;