import { useDispatch, useSelector } from "react-redux";
import { setQuery, setSearchText } from "../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.search);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    dispatch(setQuery(searchText.trim()));
  };

  return (
    <form onSubmit={submitHandler} className="w-full">
      <input
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
        className="
      w-full
      rounded-xl
      border
      border-white/20
      bg-[var(--c2)]
      px-5
      py-3
      text-lg
      outline-none
    "
        type="text"
        placeholder="Search Photos, Videos & GIFs..."
      />
    </form>
  );
};

export default SearchBar;
