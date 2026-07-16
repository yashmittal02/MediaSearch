import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-5 bg-(--c1)">
      <Link className="text-3xl font-bold" to="/">
        {" "}
        MediaSearch
      </Link>
      <div className="flex gap-5 text-xl items-center">
        <Link
          className="text-xl bg-(--c4) text-(--c1) rounded-xl px-4 py-2 active:scale-90 border-2 border-white"
          to="/"
        >
          Back to Search
        </Link>
        <Link
          className="text-xl bg-(--c4) text-(--c1) rounded-xl px-4 py-2 active:scale-90 border-2 border-white"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
