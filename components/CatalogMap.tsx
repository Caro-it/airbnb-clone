"use client";

import dynamic from "next/dynamic";

const ListingsMap = dynamic(() => import("@/components/ListingsMap"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[300px] items-center justify-center rounded-xl bg-gray-200 text-gray-500">
      Cargando mapa…
    </div>
  ),
});

import { Listing } from "@/types/listing";

interface CatalogMapProps {
  listings: Listing[];
}

const CatalogMap = ({ listings }: CatalogMapProps) => {
  return <ListingsMap listings={listings} />;
};

export default CatalogMap;