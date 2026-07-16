import React from "react";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const trending = [
  "Nature",
  "Mountains",
  "Cars",
  "Space",
  "Coding",
  "Anime",
  "Dogs",
  "Football",
];
const HomePage = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <hr />
      <SearchBar />

      {query !== "" ? (
        <>
          <Tabs />
          <ResultGrid />
        </>
      ) : (
        <div className="">
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold mb-8">🔥 Trending Searches</h2>

            <div className="flex flex-wrap justify-center gap-4">
              {trending.map((item) => (
                <button
                  key={item}
                  onClick={() => dispatch(setQuery(item))}
                  className="px-6 py-3 rounded-full bg-[var(--c1)] border border-white/10 hover:bg-[var(--c4)] hover:text-[var(--c1)] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Hero */}
          <div className="mt-16 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Discover Photos, Videos & GIFs
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-9">
              Search millions of high-quality images, HD videos and trending
              GIFs powered by Unsplash, Pexels and GIPHY.
            </p>
          </div>
          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[var(--c4)]">3</h2>
              <p className="text-gray-400">Media APIs</p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-[var(--c4)]">30+</h2>
              <p className="text-gray-400">Results per Search</p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-[var(--c4)]">∞</h2>
              <p className="text-gray-400">Search Possibilities</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 px-8">
            <div className="bg-[var(--c1)] rounded-2xl p-8 border border-white/10 hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--c4)] hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">📷</div>

              <h2 className="text-2xl font-bold mb-3">Photos</h2>

              <p className="text-gray-300">
                Explore millions of beautiful high-resolution images from
                Unsplash.
              </p>
            </div>

            <div className="bg-[var(--c1)] rounded-2xl p-8 border border-white/10 hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--c4)] hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🎥</div>

              <h2 className="text-2xl font-bold mb-3">Videos</h2>

              <p className="text-gray-300">
                Search thousands of free HD videos powered by Pexels.
              </p>
            </div>

            <div className="bg-[var(--c1)] rounded-2xl p-8 border border-white/10 hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--c4)] hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-6">🎉</div>

              <h2 className="text-2xl font-bold mb-3">GIFs</h2>

              <p className="text-gray-300">
                Find funny and trending GIFs instantly using GIPHY.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
