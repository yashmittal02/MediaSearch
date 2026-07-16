import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-center items-center gap-5 p-5"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="border-1 px-4 py-3 text-xl rounded-xl outline-none w-full bg-(--c2)"
          type="text"
          placeholder="Search Anything..."
        />

        <button
          type="submit"
          className="border-1 px-6 py-3 text-xl rounded-xl active:scale-95 cursor-pointer bg-(--c2)"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
