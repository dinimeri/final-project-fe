import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

/**
 * Buat Slice
 * menerima param object
*/
const provincesSlice = createSlice({
  name: "Provinces Slice",
  initialState: {
    provinces: data.provinces,
  },
  reducers: {
    updateProvinces(state, action) {
      state.provinces = action.payload;
    },
  },
});

const provincesReducer = provincesSlice.reducer;
const { updateProvinces } = provincesSlice.actions;

export default provincesReducer;
export { updateProvinces };