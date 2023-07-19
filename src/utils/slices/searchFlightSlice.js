import { createSlice } from '@reduxjs/toolkit';

const searchFlightSlice = createSlice({
  name: 'searchFlight',
  initialState: {
    bookingType: 'Flight',
    flightTravelType: 'oneWay',
    addAnotherCity: false,
    flightType: '',
    flightFrom: [{}, {}, {}],
    flightTo: [{}, {}, {}],
    flightDepartureDate: '',
    flightReturnDate: '',
    flightClassType: 'Economy',
    flightTotalTravellers: {
      totalCount: 1,
      flightAdultsCount: 1,
      flightChildrenCount: 0,
      flightInfantsCount: 0,
    },
    errors: [],
  },
  reducers: {
    updateTravellersCount: (state, action) => {
      const { totalTravellers, adultCount, childrenCount, infantCount } = action.payload;
      Object.assign(state.flightTotalTravellers, {
        totalCount: totalTravellers,
        flightAdultsCount: adultCount,
        flightChildrenCount: childrenCount,
        flightInfantsCount: infantCount
      });
    },
    updateFlightClassType: (state, action) => {
      state.flightClassType = action.payload;
    },
    updateFlightTravelType: (state, action) => {
      state.flightTravelType = action.payload;
    },
    updateFlightType: (state, action) => {
      state.flightType = action.payload;
    },
    updateFlightTo: (state, action) => {
      const {id, data} = action.payload;
      state.flightTo[id] = data;
    },
    updateFlightFrom: (state, action) => {
      const {id, data} = action.payload;
      state.flightFrom[id] = data;
    },
    updateDates: (state, action) => {
      const { departureDate, returnDate } = action.payload;
      state.flightDepartureDate = departureDate;
      state.flightReturnDate = returnDate;
    },
    addError: (state, action) => {
      const { id } = action.payload;
      const isErrorExists = state.errors.find((error) => error.id === id);
      if(!isErrorExists) state.errors.push(action.payload);
    },
    removeError: (state, action) => {
      state.errors = state.errors.filter((error) => error.id !== action.payload.id);
    },
    addAnotherCity: (state, action) => {
      state.addAnotherCity = action.payload;
    },
  }
});

export const { 
  updateTravellersCount, 
  updateFlightClassType,
  updateFlightTravelType, 
  updateFlightType, 
  updateFlightFrom, 
  updateFlightTo, 
  updateDates,
  addError,
  removeError,
  addAnotherCity } = searchFlightSlice.actions;

export default searchFlightSlice.reducer;