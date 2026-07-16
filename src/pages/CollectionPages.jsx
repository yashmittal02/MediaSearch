import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPages = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };
  if (collection.length === 0) {
    return (
      <div className="text-center py-24">
        <h1 className="text-5xl mb-4">📁</h1>

        <h2 className="text-3xl font-bold">Your collection is empty</h2>

        <p className="text-gray-400 mt-4">
          Save your favorite Photos, Videos and GIFs to see them here.
        </p>
      </div>
    );
  }
  return (
    <div className="overflow-auto justify-start">
      <hr></hr>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--c2)] py-4 px-6">
        <h2 className="text-2xl md:text-3xl font-bold">Your Collection!</h2>
        <button
          onClick={clearAll}
          className="
    bg-red-700
    hover:bg-red-800
    px-5
    py-2
    rounded-xl
    border
    border-white
    transition-all
    active:scale-95
  "
        >
          Clear Collection
        </button>
      </div>
      <hr></hr>
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
    px-4
    sm:px-6
    lg:px-10
    py-6
  "
      >
        {collection.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPages;
