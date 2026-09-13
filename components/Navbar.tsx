import Link from "next/link";
import SearchBar from "@/components/SearchBar";

interface NavbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-bold text-rose-500">
          airbnb
        </Link>
        <SearchBar value={searchValue} onChange={onSearchChange} />
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <Link href="/catalog" className="hidden hover:underline sm:inline">
            Catálogo
          </Link>
          <span aria-hidden className="rounded-full border border-gray-300 px-3 py-1">
            ☰ 👤
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;