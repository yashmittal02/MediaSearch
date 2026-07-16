import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };
  return (
    <div className="w-[17vw] relative h-75 bg-white rounded-xl overflow-hidden border-1 border-white">
      <a className="h-full" target="_blank" href={item.url}>
        {item.type == "Photo" ? (
          <img className="h-full w-full obj-cover obj-center" src={item.src} />
        ) : (
          ""
        )}
        {item.type == "Videos" ? (
          <video
            className="h-full w-full obj-cover obj-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img className="h-full w-full obj-cover obj-center" src={item.src} />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex gap-3 justify-between items-center w-full px-6 p-y-5 absolute bottom-0 text-white "
      >
        <h2 className="text-lg font-semibold capitalized h-15 overflow-hidden">
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
