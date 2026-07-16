import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPages = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };
  return (
    <div className="overflow-auto justify-start">
      <hr></hr>
      <div className="flex justify-between text-3xl bg-(--c2) py-2 px-4">
        <h2>Your Collection!</h2>
        <button
          onClick={() => {
            clearAll();
          }}
          className="cursor-pointer bg-red-900 px-5 py-2 text-base font-meduim rounded-xl active:scale-90 border-1 border-white"
        >
          Clear Collection
        </button>
      </div>
      <hr></hr>
      <div className="flex justify-start w-full flex-wrap gap-5 overflow-auto py-6 px-10">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPages;
