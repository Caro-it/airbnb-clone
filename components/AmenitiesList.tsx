interface AmenitiesListProps {
  amenities: string[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  return (
    <section className="border-b border-gray-200 py-6">
      <h2 className="mb-4 text-lg font-semibold">Lo que ofrece este lugar</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity} className="flex items-center gap-2 text-gray-700">
            <span aria-hidden>✓</span>
            {amenity}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AmenitiesList;