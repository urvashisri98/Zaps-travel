import { configureStore } from '@reduxjs/toolkit';
import searchFlightSlice from './slices/searchFlightSlice';
import globalSlice from './slices/globalSlice';

const store = configureStore({
  reducer: {
    global: globalSlice,
    searchFlight: searchFlightSlice,
  }
});

export default store;