
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
        <i className="ri-search-line text-gray-400"></i>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-white rounded-full border-none shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}
