import React from "react";
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
      w-full
      h-80
      relative
      bg-white
      rounded-xl
      overflow-hidden
      border
      border-white
    "
    >
      <div className="w-full h-80 justify-start relative h-75 bg-white rounded-xl overflow-hidden border-1 border-white">
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
          className="flex gap-3 flex-col md:flex-row items-center w-full px-6 py-5 absolute bottom-0 text-white "
        >
          <h2 className="text-base md:text-lg font-semibold capitalize h-12 overflow-hidden">
            {item.title}
          </h2>
          <button
            onClick={removeFromCollection}
            className="bg-teal-700 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-85"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
