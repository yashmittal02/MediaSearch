import SearchBar from "./SearchBar";
import Tabs from "./Tabs";

const SearchSection = () => {
  return (
    <div className="sticky top-[72px] z-40 bg-gray-950/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Search */}
          <div className="lg:flex-1">
            <SearchBar />
          </div>

          {/* Tabs */}
          <div className="flex justify-center lg:justify-end">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
