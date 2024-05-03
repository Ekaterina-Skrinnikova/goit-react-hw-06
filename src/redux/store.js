import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "../redux/contactsSlice";
// import reducerFilters from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: reducerSlice,
    // filter: reducerFilters,
  },
});
