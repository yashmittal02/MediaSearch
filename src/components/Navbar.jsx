import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[var(--c1)] border-b border-white/20">
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold hover:text-[var(--c4)] transition-colors"
        >
          MediaSearch
        </Link>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="px-5 py-2 rounded-xl border-2 border-white bg-[var(--c4)] text-[var(--c1)] text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Back to Search
          </Link>

          <Link
            to="/collection"
            className="px-5 py-2 rounded-xl border-2 border-white bg-[var(--c4)] text-[var(--c1)] text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Collection
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
