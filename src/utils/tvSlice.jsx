import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    topRatedTv: null,
    popularTv: null,
    onTheAir: null,
    airingToday: null,
  },
  reducers: {
    addTopRatedTv: (state, action) => {
      state.topRatedTv = action.payload;
    },
    addPopularTv: (state, action) => {
      state.popularTv = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
  },
});

export const { addTopRatedTv, addPopularTv, addOnTheAir, addAiringToday } =
  tvSlice.actions;
export default tvSlice.reducer;
