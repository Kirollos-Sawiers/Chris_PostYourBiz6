import { createSlice } from "@reduxjs/toolkit";
import { filterBusinesses } from "./filterAction";

const initialState = {
  loading: false,
  error: null,
  state: null,
  city: null,
  zip: null,
  clicked: false,
  flag: false,
  filterResult: [],
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchBusiness: (state, { payload }) => {
      state.state = payload.state;
      state.city = payload.city;
      state.zip = payload.zip;
      state.clicked = true;
      state.flag = true;
    },
  },
  extraReducers: {
    [filterBusinesses.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [filterBusinesses.fulfilled]: (filterState, { payload }) => {
      filterState.loading = false;
      filterState.state = payload.state;
      filterState.city = payload.city;
      filterState.zip = payload.zip;
      filterState.flag = true;
      filterState.filterResult = payload;
      filterState.clicked = false;
    },
    [filterBusinesses.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.flag = false;
    },
  },
});

export const { searchBusiness } = filter.actions;
export default filter.reducer;
