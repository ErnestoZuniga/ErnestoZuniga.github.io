import { createSlice } from "@reduxjs/toolkit";

export const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    lan: 'en-Us'
  },
  reducers:{
    updateLan: (state, action) => {
      state.lan = action.payload;
    }
  }
});

export const { updateLan } = languagesSlice.actions;
export default languagesSlice.reducer;
