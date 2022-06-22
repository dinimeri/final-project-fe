import { configureStore } from "@reduxjs/toolkit";
import provincesReducer from "../features/provincesSlice";

/**
 * Buat store
 * Menyimpan berbagai slice reducer
*/
const store = configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});

export default store;