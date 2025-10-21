
interface FilterButtonProps {
  onClick: () => void;
  hasActiveFilters: boolean;
}

export default function FilterButton({ onClick, hasActiveFilters }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full shadow-sm transition-all ${
        hasActiveFilters 
          ? 'bg-orange-500 text-white' 
          : 'bg-white text-gray-600 hover:text-orange-500'
      }`}
    >
      <i className="ri-equalizer-line text-lg"></i>
      {hasActiveFilters && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      )}
    </button>
  );
}
