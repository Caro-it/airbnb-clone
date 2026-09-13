import CategoryItem from "@/components/CategoryItem";

interface CategoryBarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (label: string) => void;
}

const CategoryBar = ({ categories, activeCategory, onSelect }: CategoryBarProps) => {
  return (
    <div className="mb-6 flex gap-6 overflow-x-auto border-b border-gray-200 pb-1">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          label={category}
          isActive={category === activeCategory}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default CategoryBar;