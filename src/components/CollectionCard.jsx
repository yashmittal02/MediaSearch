import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = () => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
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
            onClick={removeFromCollection}
            className="
              w-full
              rounded-lg
              bg-red-600
              py-2
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-red-700
              active:scale-95
            "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
