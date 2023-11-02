import { combineReducers } from "@reduxjs/toolkit";
import filterSlice from "./features/filterSlice";

export default combineReducers({
  filter: filterSlice,
});
