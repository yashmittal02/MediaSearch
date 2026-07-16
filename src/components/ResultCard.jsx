import { useDispatch, useSelector } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const collection = useSelector((state) => state.collection.items);

  const alreadyAdded = collection.some(
    (collectionItem) => collectionItem.id === item.id,
  );

  const addToCollection = () => {
    if (alreadyAdded) return;

    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div
      className="
        relative
        h-80
        w-full
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {item.type === "Photo" && (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        )}

        {item.type === "Videos" && (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover object-center"
          />
        )}

        {item.type === "gif" && (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        )}
      </a>

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          bg-gradient-to-t
          from-black/90
          via-black/50
          to-transparent
          p-4
        "
      >
        <div className="flex flex-col gap-3">
          <h2
            className="
              text-sm
              sm:text-base
              md:text-lg
              font-semibold
              text-white
              capitalize
              line-clamp-2
            "
          >
            {item.title || "Untitled"}
          </h2>

          <button
            onClick={addToCollection}
            disabled={alreadyAdded}
            className={`
              w-full
              rounded-lg
              py-2
              font-semibold
              transition-all
              duration-300
              cursor-pointer
              ${
                alreadyAdded
                  ? "bg-green-600 cursor-not-allowed text-white"
                  : "bg-teal-600 text-white hover:bg-teal-700 active:scale-95"
              }
            `}
          >
            {alreadyAdded ? "✔ Added" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
