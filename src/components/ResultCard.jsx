import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };
  return (
    <div
      className="
    w-full
    sm:w-[280px]
    md:w-[300px]
    lg:w-[17vw]
    h-80
    relative
    bg-white
    rounded-xl
    overflow-hidden
    border
    border-white
  "
    >
      <a className="h-full" target="_blank" href={item.url}>
        {item.type == "Photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "Videos" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="
absolute
bottom-0
left-0
w-full
bg-gradient-to-t
from-black/80
to-transparent
p-4
flex
flex-col
gap-3
"
      >
        <h2
          className="
    text-base
    md:text-lg
    font-semibold
    capitalize
    line-clamp-2
    text-center
    md:text-left
  "
        >
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="bg-teal-700 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-85"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
