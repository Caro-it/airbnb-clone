import Link from "next/link";
import { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="flex flex-col">
      <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-200 text-sm text-gray-400">
        {listing.imageAlt}
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <h3 className="truncate font-semibold text-gray-900">{listing.title}</h3>
          <span className="flex items-center gap-1 text-sm text-gray-900">
            <span aria-hidden>★</span>
            {listing.rating.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-500">{listing.location}</p>
        <p className="mt-1 text-gray-900">
          <span className="font-semibold">{listing.pricePerNight} €</span> noche
        </p>
      </div>
    </Link>
  );
};

export default ListingCard;