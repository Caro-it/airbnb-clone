export type SortOrder = "asc" | "desc";

interface ResultsHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

const ResultsHeader = ({ count, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <p className="text-sm text-gray-700">{count} alojamientos encontrados</p>
      <label className="flex items-center gap-2 text-sm text-gray-700">
        Ordenar por precio:
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as SortOrder)}
          className="rounded-md border border-gray-300 px-2 py-1 text-sm outline-none"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
    </div>
  );
};

export default ResultsHeader;