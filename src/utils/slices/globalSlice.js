import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    searchWidgetType: 1
  },
  reducers: {
    changeSearchWidgetType: (state, action) => {
      state.searchWidgetType = action.payload;
    }
  }
});

export const { changeSearchWidgetType } = globalSlice.actions;

export default globalSlice.reducer;