import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPhotos, fetchVideos, fetchgif } from "../api/mediaApi";

import {
  setError,
  setLoading,
  setResults,
  setQuery,
} from "../redux/features/searchSlice";

import ResultCard from "./ResultCard";
import LoadingSkeleton from "./LoadingSkeleton";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (!query.trim()) return;

    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];

        if (activeTab === "Photos") {
          const response = await fetchPhotos(query);

          data = response.results.map((item) => ({
            id: item.id,
            type: "Photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } else if (activeTab === "Videos") {
          const response = await fetchVideos(query);

          data = response.videos.map((item) => ({
            id: item.id,
            type: "Videos",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        } else if (activeTab === "gif") {
          const response = await fetchgif(query);

          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images.fixed_width.url,
            src: item.images.original.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (loading) return <LoadingSkeleton />;

  if (error)
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-red-400">
          Something went wrong
        </h2>

        <p className="mt-3 text-gray-400">Please try searching again.</p>
      </div>
    );

  if (!loading && results.length === 0 && query !== "") {
    return (
      <div className="py-24 text-center">
        <div className="text-6xl">😕</div>

        <h2 className="mt-5 text-3xl font-bold">No results found</h2>

        <p className="mt-3 text-gray-400">Try searching for something else.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["Nature", "Cars", "Coding", "Space"].map((item) => (
            <button
              key={item}
              onClick={() => dispatch(setQuery(item))}
              className="rounded-full bg-[var(--c1)] px-5 py-2 transition hover:bg-[var(--c4)] hover:text-[var(--c1)]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        gap-6
        px-4
        py-6
        sm:grid-cols-2
        sm:px-6
        lg:grid-cols-3
        lg:px-8
        xl:grid-cols-4
      "
    >
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
