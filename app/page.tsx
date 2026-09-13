"use client";

import { useEffect, useState } from "react";
import { Listing } from "@/types/listing";
import { LISTINGS, CATEGORIES } from "@/data/listings";
import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import ListingGrid from "@/components/ListingGrid";
import Loading from "@/components/Loading";

const HomePage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(LISTINGS);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const visibleListings = listings.filter((listing) => {
    const matchesCategory =
      activeCategory === "Todos" || listing.category === activeCategory;
    const query = searchText.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      listing.title.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar searchValue={searchText} onSearchChange={setSearchText} />
      <main className="mx-auto min-h-screen max-w-7xl bg-white px-4 py-6 text-gray-900">
        <CategoryBar
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        {loading ? <Loading /> : <ListingGrid listings={visibleListings} />}
      </main>
    </>
  );
};

export default HomePage;