import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: true,
  },
  reducers:{
    loading: (state) => {
      state.loading = false;
    },
    complete: (state) => {
      state.loading = true;
    }
  }
});

export const { loading, complete } = loadingSlice.actions;
export default loadingSlice.reducer;