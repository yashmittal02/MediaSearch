import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAc } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 py-2 px-5 ">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${activeTab === elem ? "bg-(--c2) text-(--c4) font-bold" : "bg-(--c4)"} rounded-xl w-full cursor-pointer active:scale-95 px-5 py-2 round uppercase border-1 border-white text-(--c2) text-xl`}
            key={idx}
            onClick={() => {
              dispatch(setAc(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
