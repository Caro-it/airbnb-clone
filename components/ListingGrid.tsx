import { Listing } from "@/types/listing";
import ListingCard from "@/components/ListingCard";

interface ListingGridProps {
  listings: Listing[];
}

const ListingGrid = ({ listings }: ListingGridProps) => {
  if (listings.length === 0) {
    return <p className="py-10 text-center text-gray-500">No hay alojamientos que coincidan.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;