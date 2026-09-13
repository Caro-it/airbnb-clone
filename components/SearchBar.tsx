interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-full border border-gray-300 px-4 py-2 shadow-sm">
      <span aria-hidden className="text-gray-400">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por título o destino"
        aria-label="Buscar alojamientos"
        className="w-full bg-transparent text-sm outline-none"
      />
    </div>
  );
};

export default SearchBar;