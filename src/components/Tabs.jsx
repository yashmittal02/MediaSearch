import { useDispatch, useSelector } from "react-redux";
import { setAc, setQuery } from "../redux/features/searchSlice";

const tabs = [
  { label: "📷 Photos", value: "Photos" },
  { label: "🎥 Videos", value: "Videos" },
  { label: "🎉 GIFs", value: "gif" },
];

const Tabs = () => {
  const dispatch = useDispatch();

  const { activeTab, searchText } = useSelector((state) => state.search);

  const handleTabChange = (tab) => {
    dispatch(setAc(tab));

    if (searchText.trim()) {
      dispatch(setQuery(searchText.trim()));
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTabChange(tab.value)}
          className={`rounded-xl border px-5 py-2 text-base font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === tab.value
              ? "bg-[var(--c4)] text-[var(--c1)] border-[var(--c4)]"
              : "bg-[var(--c2)] text-white border-white/20 hover:bg-[var(--c4)] hover:text-[var(--c1)]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
