interface CategoryItemProps {
  label: string;
  isActive: boolean;
  onSelect: (label: string) => void;
}

const CategoryItem = ({ label, isActive, onSelect }: CategoryItemProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(label)}
      className={`whitespace-nowrap border-b-2 pb-2 text-sm transition-colors ${
        isActive
          ? "border-gray-900 font-semibold text-gray-900"
          : "border-transparent text-gray-500 hover:text-gray-900"
      }`}
    >
      {label}
    </button>
  );
};

export default CategoryItem;