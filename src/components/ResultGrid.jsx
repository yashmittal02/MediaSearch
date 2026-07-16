import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchgif } from "../api/mediaApi";
import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import LoadingSkeleton from "./LoadingSkeleton";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  useEffect(() => {
    if (!query.trim()) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let dataa = [];
        if (activeTab === "Photos") {
          let response = await fetchPhotos(query);
          dataa = response.results.map((item) => ({
            id: item.id,
            type: "Photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } else if (activeTab === "Videos") {
          let response = await fetchVideos(query);
          console.log("heyy");
          dataa = response.videos.map((item) => ({
            id: item.id,
            type: "Videos",
            title: item.user.name || "Videos",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        } else if (activeTab === "gif") {
          let response = await fetchgif(query);
          dataa = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            thumbnail: item.images.fixed_width.url,
            src: item.images.original.url,
            url: item.images.original_mp4.mp4,
          }));
        }
        dispatch(setResults(dataa));
      } catch (error) {
        dispatch(setError(error));
      }
    };
    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <LoadingSkeleton />;
  if (!loading && results.length === 0 && query !== "") {
    return (
      <div className="text-center py-24">
        <h1 className="text-4xl mb-4">😕</h1>

        <h2 className="text-2xl font-bold">No results found</h2>

        <p className="text-gray-400 mt-3">Try searching for something else.</p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {["Nature", "Cars", "Coding", "Space"].map((item) => (
            <button
              key={item}
              onClick={() => dispatch(setQuery(item))}
              className="px-5 py-2 rounded-full bg-[var(--c1)]"
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
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6
      px-4
      sm:px-6
      lg:px-10
      py-6
    "
    >
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
