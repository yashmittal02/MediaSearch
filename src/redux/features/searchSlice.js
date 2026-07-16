import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setAc(state, action) {
      state.activeTab = action.payload;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});
export default searchSlice.reducer;
export const {
  setAc,
  setError,
  setLoading,
  setQuery,
  setResults,
  clearResults,
} = searchSlice.actions;
