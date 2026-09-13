"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Room } from "@/types/listing";
import { getRoomById } from "@/data/rooms";
import Loading from "@/components/Loading";
import PhotoGallery from "@/components/PhotoGallery";
import HostInfo from "@/components/HostInfo";
import AmenitiesList from "@/components/AmenitiesList";
import ReservationCard from "@/components/ReservationCard";
import Link from "next/link";

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
              <Link href="/catalog" className="mb-4 inline-block text-sm text-gray-700 hover:underline">
        ← Volver al catálogo
      </Link>
      <h1 className="text-2xl font-semibold">{room.title}</h1>
      <p className="mb-4 mt-1 text-sm text-gray-700">
        ★ {room.rating} · {room.reviewsCount} reseñas · {room.location}
      </p>

      <PhotoGallery photos={room.photos} />

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <HostInfo name={room.host.name} yearsHosting={room.host.yearsHosting} />
          <AmenitiesList amenities={room.amenities} />
        </div>
        <ReservationCard pricePerNight={room.pricePerNight} />
      </div>
    </main>
  );
};

export default RoomPage;