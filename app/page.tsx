"use client";

import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
import { LISTINGS } from "@/data/listings";
import ListingGrid from "@/components/ListingGrid";
import Loading from "@/components/Loading";

const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-white px-4 py-6 text-gray-900">
      <h1 className="mb-6 text-2xl font-semibold">Explora alojamientos</h1>
      {loading ? <Loading /> : <ListingGrid listings={listings} />}
    </main>
  );
};

export default HomePage;