import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9b9188]"
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search questions..."
        className="w-full rounded-lg border border-[#e4ddd4] bg-white py-3 pl-10 pr-4 text-sm text-[#29231f] outline-none transition placeholder:text-[#a59c93] focus:border-[#c96524] focus:ring-2 focus:ring-[#c96524]/10"
      />
    </div>
  );
};

export default SearchBar;