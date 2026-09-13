"use client";

import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
import { LISTINGS } from "@/data/listings";
import ResultsHeader, { SortOrder } from "@/components/ResultsHeader";
import ListingGrid from "@/components/ListingGrid";
import MapPlaceholder from "@/components/MapPlaceholder";
import Loading from "@/components/Loading";

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
            <MapPlaceholder />
          </div>
        </>
      )}
    </main>
  );
};

export default CatalogPage;