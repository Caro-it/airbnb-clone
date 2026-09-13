"use client";

import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
import { LISTINGS } from "@/data/listings";
import ResultsHeader, { SortOrder } from "@/components/ResultsHeader";
import ListingGrid from "@/components/ListingGrid";
import CatalogMap from "@/components/CatalogMap";
import Loading from "@/components/Loading";
import Link from "next/link";

const CatalogPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sortedListings = [...listings].sort((a, b) =>
    sortOrder === "asc"
      ? a.pricePerNight - b.pricePerNight
      : b.pricePerNight - a.pricePerNight
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl bg-white px-4 py-6 text-gray-900">
            <Link href="/" className="mb-2 inline-block text-sm text-gray-700 hover:underline">
        ← Inicio
      </Link>
      <h1 className="mb-4 text-2xl font-semibold">Catálogo</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ResultsHeader
            count={sortedListings.length}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
            <ListingGrid listings={sortedListings} />
            <CatalogMap listings={sortedListings} />
          </div>
        </>
      )}
    </main>
  );
};

export default CatalogPage;