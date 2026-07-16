import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetSearch } from "../redux/features/searchSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(resetSearch());
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--c1)] border-b border-white/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleHome}
          className="text-3xl font-bold hover:text-[var(--c4)] transition-colors"
        >
          MediaSearch
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3">
          {location.pathname === "/collection" && (
            <Link
              to="/"
              onClick={handleHome}
              className="px-5 py-2 rounded-xl border border-white bg-[var(--c4)] text-[var(--c1)] text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            >
              ← Back to Search
            </Link>
          )}

          <Link
            to="/collection"
            className="px-5 py-2 rounded-xl border border-white bg-[var(--c4)] text-[var(--c1)] text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
          >
            📁 Collection
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
