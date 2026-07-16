import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ResultGrid from "../components/ResultGrid";
import SearchSection from "../components/SearchSection";

import { setQuery, setSearchText } from "../redux/features/searchSlice";

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

  const handleTrending = (item) => {
    dispatch(setSearchText(item));
    dispatch(setQuery(item));
  };

  return (
    <div>
      <hr />

      <SearchSection />

      {query !== "" ? (
        <ResultGrid />
      ) : (
        <div className="mx-auto max-w-7xl px-4 py-10">
          {/* Trending */}
          <section className="text-center">
            <h2 className="mb-8 text-3xl font-bold">🔥 Trending Searches</h2>

            <div className="flex flex-wrap justify-center gap-4">
              {trending.map((item) => (
                <button
                  key={item}
                  onClick={() => handleTrending(item)}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-[var(--c1)]
                    px-6
                    py-3
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[var(--c4)]
                    hover:text-[var(--c1)]
                    active:scale-95
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* Hero */}
          <section className="mx-auto mt-20 max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Discover Photos,
              <br />
              Videos & GIFs
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
              Search millions of high-quality images, HD videos and trending
              GIFs powered by Unsplash, Pexels and GIPHY.
            </p>
          </section>

          {/* Stats */}
          <section className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <h2 className="text-4xl font-bold text-[var(--c4)]">3</h2>

              <p className="mt-2 text-gray-400">Media APIs</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[var(--c4)]">150+</h2>

              <p className="mt-2 text-gray-400">Results Per Search</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[var(--c4)]">∞</h2>

              <p className="mt-2 text-gray-400">Search Possibilities</p>
            </div>
          </section>

          {/* Features */}
          <section className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[var(--c1)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--c4)] hover:shadow-2xl">
              <div className="mb-6 text-6xl">📷</div>

              <h2 className="mb-3 text-2xl font-bold">Photos</h2>

              <p className="leading-7 text-gray-300">
                Explore millions of stunning high-resolution images powered by
                Unsplash.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[var(--c1)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--c4)] hover:shadow-2xl">
              <div className="mb-6 text-6xl">🎥</div>

              <h2 className="mb-3 text-2xl font-bold">Videos</h2>

              <p className="leading-7 text-gray-300">
                Browse thousands of beautiful HD videos from the Pexels library.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[var(--c1)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--c4)] hover:shadow-2xl">
              <div className="mb-6 text-6xl">🎉</div>

              <h2 className="mb-3 text-2xl font-bold">GIFs</h2>

              <p className="leading-7 text-gray-300">
                Discover trending and entertaining GIFs instantly using GIPHY.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
